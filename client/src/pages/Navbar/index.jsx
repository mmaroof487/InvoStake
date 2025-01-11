import { useState } from "react";
import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const [activeTab, setActiveTab] = useState("Home");
	const navigate = useNavigate();

	const handleScrollToBottom = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: "smooth",
		});
	};
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // For smooth scrolling
		});
	};

	return (
		<nav className="w-full backdrop-blur-sm bg-gray-900/50 fixed top-0 z-50 border-b border-gray-800">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center gap-2">
						<Bot className="w-8 h-8 text-blue-500" />
						<span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">TradingAI</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-2">
						<div className="flex bg-gray-800/50 rounded-full backdrop-blur-sm">
							{/* Home */}

							<button
								onMouseOver={() => setActiveTab("Home")}
								onClick={() => {
									navigate("/");
									handleScrollToTop();
								}}
								className={`py-2 px-6 transition-all duration-300 relative ${activeTab === "Home" ? "text-blue-500" : "text-gray-400 hover:text-gray-200"}`}>
								Home
								{activeTab === "Home" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />}
							</button>

							{/* AI Agent */}
							<button
								onMouseOver={() => setActiveTab("AI Agent")}
								onClick={() => {
									navigate("/");
									handleScrollToBottom();
								}}
								className={`py-2 px-6 transition-all duration-300 relative ${activeTab === "AI Agent" ? "text-blue-500" : "text-gray-400 hover:text-gray-200"}`}>
								AI Agent
								{activeTab === "AI Agent" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />}
							</button>

							{/* Basket */}
							<button
								onMouseOver={() => setActiveTab("Basket")}
								onClick={() => navigate("/basket")}
								className={`py-2 px-6 transition-all duration-300 relative ${activeTab === "Basket" ? "text-blue-500" : "text-gray-400 hover:text-gray-200"}`}>
								Basket
								{activeTab === "Basket" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />}
							</button>
						</div>
					</div>

					{/* CTA Button */}
					<div className="hidden md:block">
						<button
							className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
                font-medium text-white transition-all duration-300 hover:shadow-lg
                hover:shadow-blue-500/25"
							onClick={() => navigate("/metamask")}>
							Metamask
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
