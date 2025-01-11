import { useState } from "react";
import { Bot, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
	const [email, setEmail] = useState("");
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your waitlist submission logic here
		console.log("Submitted email:", email);
		setEmail("");
	};

	return (
		<div className="w-full max-w-7xl mx-auto px-4 py-16">
			{/* Hero Section */}
			<div className="flex flex-col items-center text-center mb-12">
				<div className="flex items-center gap-3 mb-6">
					<Bot className="w-8 h-8 text-blue-500" />
					<span className="px-4 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm font-medium">AI-Powered Trading</span>
				</div>
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
					Modular
					<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Liquidity</span>
				</h1>
				<p className="text-lg md:text-xl text-gray-400 max-w-2xl">Solving Liquidity by making a Utility Layer on top of Liquidity pool</p>
			</div>

			{/* Waitlist Form */}
			<form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-16">
				<div className="flex flex-col sm:flex-row gap-4 p-2 bg-gray-800/50 rounded-full backdrop-blur-sm">
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-400
                     focus:outline-none rounded-full"
						required
					/>
					<button
						type="submit"
						onClick={() => {
							navigate("/basket");
						}}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
                     font-medium text-white transition-all duration-300 hover:shadow-lg
                     hover:shadow-blue-500/25 flex items-center gap-2">
						Start Investing
						<ArrowRight
							className={`w-4 h-4 transition-transform duration-300
                       ${isHovered ? "translate-x-1" : ""}`}
						/>
					</button>
				</div>
			</form>

			{/* Feature Image */}
			<div className="relative w-full max-w-5xl mx-auto">
				<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
				<img
					src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80"
					alt="Trading Platform Interface"
					className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
				/>
				<div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
			</div>

			{/* Stats */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16 text-center">
				{[
					{ label: "Active Users", value: "10K+" },
					{ label: "Daily Trades", value: "50K+" },
					{ label: "Success Rate", value: "94%" },
					{ label: "Total Volume", value: "$2M+" },
				].map((stat, index) => (
					<div key={index} className="p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm">
						<div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
						<div className="text-sm text-gray-400">{stat.label}</div>
					</div>
				))}
			</div>
		</div>
	);
}
