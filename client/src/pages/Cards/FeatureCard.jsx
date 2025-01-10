export default function FeatureCard(prop) {
	const getFlexClasses = () => {
		switch (prop.imagePosition) {
			case "top":
				return "flex-col-reverse";
			case "bottom":
				return "flex-col";
			case "left":
				return "flex-row";
			case "right":
				return "flex-row-reverse";
			default:
				return "flex-col";
		}
	};

	return (
		<div
			className="h-80 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6 shadow-lg
                    transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
			<div className={`flex ${getFlexClasses()} justify-between items-center h-full space-x-4`}>
				<div className="flex flex-col text-center">
					<h3 className="font-extrabold text-xl md:text-2xl text-white mb-4">{prop.title}</h3>
					<p className="text-lg text-white/90">{prop.description}</p>
				</div>
				<div
					className="text-white w-16 h-16 flex items-center justify-center
                      bg-white/10 rounded-full backdrop-blur-sm">
					{prop.icon}
				</div>
			</div>
		</div>
	);
}
