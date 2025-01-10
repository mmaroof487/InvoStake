import Ai from "../../components/Ai";
import Navbar from "../Navbar";
import Banner from "../Banner";
import FeatureCards from "../Cards/FeatureCards";
import Market from "../../components/Market";

export default function Home() {
	return (
		<>
			<main className="bg-black p-8 text-white">
				<Navbar />
				<Banner />
				<FeatureCards />
				<Ai />
				<div className="flex justify-evenly">
					<Market />
					<Market />
					<Market />
				</div>
			</main>
		</>
	);
}
