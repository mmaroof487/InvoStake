import Ai from "../../components/Ai";
import Navbar from "../Navbar";
import Intro from "../Intro";

export default function Home() {
	return (
		<>
			<main className="bg-black p-8 text-white">
				<Navbar />
				<Intro />
				<Ai />
			</main>
		</>
	);
}
