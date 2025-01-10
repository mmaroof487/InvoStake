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
				<div className="flex justify-evenly">
					<Market name="BTCUSD" num="7" notional="2782" size="0.01 BTC" eprice="94722" mprice="94725" elprice="100348" rcf="3" mamount="30" />
					<Market name="BTCUSD" num="5" notional="638" size="0.1 BTC" eprice="94430" mprice="94439" elprice="98380" rcf="4" mamount="42" />
					<Market name="ETHUSD" num="-4" notional="798" size="0.9 ETH" eprice="3278" mprice="3271" elprice="3689" rcf="5" mamount="51" />
				</div>
			</main>
		</>
	);
}
