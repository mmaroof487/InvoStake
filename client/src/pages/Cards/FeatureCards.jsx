import { Droplets, Bot, Rocket, LineChart, Shield, Repeat, Layout } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
	{
		title: "Liquidity Pool as Utility Layer",
		description: "Multiply your investments with integrated liquidity pools",
		icon: <Droplets size={32} />,
		imagePosition: "top",
	},
	{
		title: "AI Agents",
		description: "Analyze market data to give you the best trades",
		icon: <Bot size={32} />,
		imagePosition: "left",
	},
	{
		title: "Meme Coins KOL Predictions",
		description: "Trending meme coins",
		icon: <Rocket size={32} />,
		imagePosition: "right",
	},
	{
		title: "Prediction Market Integration",
		description: "Integrate prediction markets seamlessly",
		icon: <LineChart size={32} />,
		imagePosition: "bottom",
	},
	{
		title: "Homomorphic Encryption",
		description: "Keep your investments secure",
		icon: <Shield size={32} />,
		imagePosition: "left",
	},
	{
		title: "Automated SIP",
		description: "Automated systematic investment plans",
		icon: <Repeat size={32} />,
		imagePosition: "right",
	},
	{
		title: "Thematic Baskets",
		description: "Diversify smartly with AI-curated investment baskets",
		icon: <Layout size={32} />,
		imagePosition: "bottom",
	},
];

export default function FeatureCards() {
	return (
		<div className="w-full flex flex-col items-center justify-center mt-16">
			{/* First Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-7xl px-5">
				{features.slice(0, 2).map((feature, index) => (
					<FeatureCard key={index} {...feature} />
				))}
			</div>

			{/* Second Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-7xl px-5 mt-5">
				{features.slice(2, 5).map((feature, index) => (
					<FeatureCard key={index + 2} {...feature} />
				))}
			</div>

			{/* Third Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-7xl px-5 mt-5">
				{features.slice(5).map((feature, index) => (
					<FeatureCard key={index + 5} {...feature} />
				))}
			</div>
		</div>
	);
}
