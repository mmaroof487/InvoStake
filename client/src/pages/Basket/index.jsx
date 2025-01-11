import { useState, useEffect } from "react";
import { Activity, Users, PieChart, TrendingDown, LineChart, Droplets } from "lucide-react";
import Navbar from "../Navbar";
import getRandomTokens from "./components/token"
const initialMetrics = [
	{ name: "User Factor", value: 0.85, icon: <Users className="w-5 h-5" />, trend: 0 },
	{ name: "Shape Ratio", value: 1.23, icon: <PieChart className="w-5 h-5" />, trend: 0 },
	{ name: "Max Drawdown", value: -12.5, icon: <TrendingDown className="w-5 h-5" />, trend: 0 },
	{ name: "Value of Risk", value: 0.67, icon: <Activity className="w-5 h-5" />, trend: 0 },
	{ name: "Beta Co-efficient", value: 1.05, icon: <LineChart className="w-5 h-5" />, trend: 0 },
	{ name: "Liquidity", value: 98.2, icon: <Droplets className="w-5 h-5" />, trend: 0 },
];

export default function Basket() {
	const [isFixed, setIsFixed] = useState(true);
	const [metrics, setMetrics] = useState(initialMetrics);
	const [isEditing, setIsEditing] = useState(false);
	const [editingMetric, setEditingMetric] = useState(null);
	const [savedValues, setSavedValues] = useState(initialMetrics);
	const [showRightPanel, setShowRightPanel] = useState(false);
	const [answer, setAnswer] = useState(null);

	useEffect(() => {
		let interval;
		if (!isFixed) {
			setSavedValues(metrics);
			interval = setInterval(() => {
				setMetrics((currentMetrics) =>
					currentMetrics.map((metric) => {
						const change = (Math.random() - 0.5) * 0.1;
						const newValue = Number((metric.value + change).toFixed(2));
						return {
							...metric,
							value: newValue,
							trend: change > 0 ? 1 : change < 0 ? -1 : 0,
						};
					})
				);
			}, 2000);
		} else {
			setMetrics(savedValues);
		}

		return () => interval && clearInterval(interval);
	}, [isFixed, metrics, savedValues]);

	const formatValue = (value, name) => (["Liquidity", "Max Drawdown"].includes(name) ? value.toFixed(1) : value.toFixed(2));

	const handleEdit = (metric) => {
		if (!isFixed) return;
		setEditingMetric(metric);
		setIsEditing(true);
	};

	const handleSave = (e) => {
		e.preventDefault();
		if (editingMetric) {
			const newMetrics = metrics.map((m) => (m.name === editingMetric.name ? editingMetric : m));
			setMetrics(newMetrics);
			setSavedValues(newMetrics);
			setIsEditing(false);
			setEditingMetric(null);
		}
	};

	const handleToggle = () => {
		if (!isEditing) setIsFixed(!isFixed);
	};

	// Make this function async
	const handleSubmit = async () => {

		
		// Example usage:
		setAnswer(getRandomTokens());

		const zeroedMetrics = metrics.map((metric) => ({ ...metric, value: 0, trend: 0 }));
		setMetrics(zeroedMetrics);
		setSavedValues(zeroedMetrics);
		setIsFixed(true);
		setIsEditing(false);
		setEditingMetric(null);
		setShowRightPanel(true);
	};

	return (
		<>
			<Navbar />
			<div className="min-h-screen bg-black relative">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(0,0,0,0.3))]" />
				<div className="relative min-h-screen p-8 flex items-center justify-center gap-8">
					<div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 w-full max-w-2xl shadow-2xl border border-purple-500/20">
						<div className="space-y-6">
							{isEditing && editingMetric ? (
								<form onSubmit={handleSave} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
									<h3 className="text-xl text-purple-300 mb-4">Edit {editingMetric.name}</h3>
									<div className="space-y-4">
										<div>
											<label className="block text-gray-300 mb-2">Value</label>
											<input
												type="number"
												step="0.01"
												value={editingMetric.value}
												onChange={(e) =>
													setEditingMetric({
														...editingMetric,
														value: parseFloat(e.target.value) || 0,
													})
												}
												className="w-full bg-black/30 border border-purple-500/30 rounded-lg px-4 py-2 text-white"
											/>
										</div>
										<div className="flex gap-3">
											<button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
												Save
											</button>
											<button
												type="button"
												onClick={() => {
													setIsEditing(false);
													setEditingMetric(null);
												}}
												className="px-4 py-2 bg-white/10 text-purple-300 rounded-lg hover:bg-white/20 transition-colors">
												Cancel
											</button>
										</div>
									</div>
								</form>
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{metrics.map((metric, index) => (
										<div
											key={index}
											className={`bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-purple-500/10 transition-all duration-300
                      ${isFixed ? "hover:border-purple-500/30 hover:bg-white/10 cursor-pointer" : "cursor-default"}`}
											onClick={() => handleEdit(metric)}>
											<div className="flex items-center gap-3 mb-2">
												<div className="text-purple-400">{metric.icon}</div>
												<h3 className="text-gray-200 font-medium">{metric.name}</h3>
											</div>
											<div className="flex items-center gap-2">
												<div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{formatValue(metric.value, metric.name)}</div>
												{!isFixed && (
													<span className={`text-sm ${metric.trend > 0 ? "text-green-400" : metric.trend < 0 ? "text-red-400" : "text-gray-400"}`}>{metric.trend > 0 ? "↑" : metric.trend < 0 ? "↓" : "→"}</span>
												)}
											</div>
										</div>
									))}
								</div>
							)}

							<div className="flex flex-col items-center justify-center gap-4 mt-6">
								<div className="flex items-center gap-4">
									<div className={`toggle-switch ${!isFixed ? "active" : ""} ${isEditing ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={handleToggle}>
										<div className="toggle-switch-handle" />
									</div>
									<button onClick={handleSubmit} className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-colors shadow-lg">
										Submit
									</button>
								</div>
								<span className="text-gray-300 text-sm">{isFixed ? "Fixed Values (Click to Edit)" : "Dynamic Values"}</span>
							</div>
						</div>
					</div>

					{showRightPanel && (
						<div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 w-full max-w-md shadow-2xl border border-purple-500/20 animate-fade-in">
						<div className="space-y-4">
							<h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								Your AI Recommended BASKET
							</h3>
							<p 
								className="text-gray-300 break-words overflow-hidden text-ellipsis"
								style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
							>
								{answer ? answer : "fetching....."}
							</p>
							<div className="h-1 w-full bg-gradient-to-r from-purple-500 to-blue-500 rounded animate-pulse" />
						</div>
					</div>
					
					)}
				</div>
			</div>
		</>
	);
}
