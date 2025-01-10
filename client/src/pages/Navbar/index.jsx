export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("Home");

	const navItems = ["Home", "AI Agent", "Basket"];

	const NavLink = (prop) => (
		<button
			onClick={() => setActiveTab(prop.text)}
			className={`py-2 px-6 transition-all duration-300 relative
                ${activeTab === prop.text ? "text-blue-500" : "text-gray-400 hover:text-gray-200"}`}>
			{prop.text}
			{activeTab === prop.text && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />}
		</button>
	);

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
							{navItems.map((item) => (
								<NavLink key={item} text={item} />
							))}
						</div>
					</div>

					{/* Waitlist Button */}
					<div className="hidden md:block">
						<button
							className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
                           font-medium text-white transition-all duration-300 hover:shadow-lg
                           hover:shadow-blue-500/25">
							Join Waitlist
						</button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none">
							{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
				<div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/90 backdrop-blur-sm">
					{navItems.map((item) => (
						<button
							key={item}
							onClick={() => {
								setActiveTab(item);
								setIsOpen(false);
							}}
							className={`block w-full px-3 py-2 rounded-lg text-base font-medium
                       transition-colors duration-300
                       ${activeTab === item ? "bg-blue-500/10 text-blue-500" : "text-gray-400 hover:bg-gray-800 hover:text-white"}`}>
							{item}
						</button>
					))}
					<button
						className="w-full px-3 py-2 mt-4 bg-gradient-to-r from-blue-500 to-purple-500
                         rounded-lg font-medium text-white transition-all duration-300">
						Join Waitlist
					</button>
				</div>
				<div className="rounded-full py-2 px-4 bg-transparent  border-2 border-neon-green ">Wait list</div>
			</div>
		</nav>
	);
}
