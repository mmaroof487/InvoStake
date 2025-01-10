import Ai from "../../components/Ai";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Card from "../Cards";
import Market from "../../components/Market";

export default function Home() {
	return (
		<>
			<main className="bg-black p-8 text-white">
				<Navbar />
				<Banner />
				<Card />
				<Ai />
				<Market />
			</main>
		</>
	);
}
