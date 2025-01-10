/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"neon-green": "#39FF14",
				"dark-gray-1": "#1e1e1e",
				"dark-gray-2": "#141414",
			},
			backgroundImage: {
				"custom-gradient": "linear-gradient(180deg, #1e1e1e 0%, #141414 100%)",
			},
		},
	},
	plugins: [],
};
