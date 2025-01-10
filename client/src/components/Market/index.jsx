import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Zap } from "lucide-react";

export default function Market(prop) {
	const [marketData, setMarketData] = useState({
		price: 0,
		isNegative: false,
		notional: 2782,
		size: -0.044,
		entryPrice: 64000,
		markPrice: 63239,
		liqPrice: 64161,
		realizedCF: 0.03,
		marginAmount: 14.12,
	});

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Generate a fractional change between -2 and +2, with a fractional part to avoid integer results
			const change = Math.random() * 4 - 2 + Math.random() * 0.1; // Adding a small decimal value ensures it's never an integer

			// Update the price with the change
			const newPrice = marketData.price + change;

			// Clamp the new price between 3 and 7 (which is ±2 from 5)
			const clampedPrice = Math.max(Math.min(newPrice, prop.num), prop.num - 4);

			// Round to 5 decimal places
			const roundedPrice = parseFloat(clampedPrice.toFixed(5));

			// Ensure price is never an integer by checking if the rounded value has no decimal part
			if (roundedPrice === Math.floor(roundedPrice)) {
				// Add a very small fractional value to ensure it has a decimal part
				setMarketData((prev) => ({
					...prev,
					price: roundedPrice + 0.00001, // Adding a tiny value to force a decimal
					isNegative: roundedPrice < 0,
				}));
			} else {
				setMarketData((prev) => ({
					...prev,
					price: roundedPrice,
					isNegative: roundedPrice < 0,
				}));
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [marketData.price]);

	const DataCell = (prop) => (
		<div
			id="market"
			className="flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm
                    transform transition-all duration-300 hover:scale-105">
			<span className="text-gray-400 text-sm mb-2">{prop.label}</span>
			<div className={`flex items-center gap-2 ${prop.highlight ? (marketData.isNegative ? "text-red-500" : "text-green-500") : "text-white"}`}>
				{prop.icon && <span>{prop.icon}</span>}
				<span className="text-lg font-semibold">{prop.value}</span>
			</div>
		</div>
	);

	return (
		<div className="w-1/3 mx-auto p-6">
			<div className="bg-gray-900 rounded-xl shadow-2xl p-6 border border-gray-800">
				{/* Header */}
				<div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
					<div className="flex items-center gap-2">
						<Zap className="text-yellow-500" size={24} />
						<span className="text-xl font-bold text-white">{prop.name}</span>
					</div>
					<div className={`flex items-center gap-2 ${marketData.isNegative ? "text-red-500" : "text-green-500"}`}>
						{marketData.isNegative ? <TrendingDown size={20} /> : <TrendingUp size={20} />}
						<span className="text-lg font-semibold">{marketData.price}</span>
					</div>
				</div>

				{/* Main Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{/* First Row */}
					<DataCell label="Notional" value={prop.notional} />
					<DataCell label="Size" value={`${prop.size} BTC`} />
					<DataCell label="UPL@Mark" value={prop.price} highlight={true} icon={marketData.isNegative ? <TrendingDown size={16} /> : <TrendingUp size={16} />} />

					{/* Second Row */}
					<DataCell label="Entry Price" value={prop.eprice} />
					<DataCell label="Mark Price" value={prop.mprice} />
					<DataCell label="Est. Liq. Price" value={prop.elprice} />

					{/* Third Row */}
					<DataCell label="Realized CF" value={prop.rcf} />
					<DataCell label="Margin Amount" value={prop.mamount} />
					<DataCell label="Auto Top Up" value="Enabled" icon={<Zap size={16} className="text-yellow-500" />} />
				</div>
			</div>
		</div>
	);
}
