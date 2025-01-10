import { useState } from "react";

export default function Banner() {
	const [waitlist, setWaitlist] = useState("");

	return (
		<>
			<div className="w-full flex justify-center mt-16">
				<div className="w-1/4 text-center">
					<div className="text-4xl">Automate your crypto diversification </div>
					<div className="text-lg mt-8">Build long-term wealth through , incremental investing into bags that adapt to market trends</div>
				</div>
			</div>
			<div className="w-full flex justify-center mt-8">
				<div className="rounded-full border-2 border-neon-green  w-1/3 flex p-2">
					<input
						type="text"
						className="outline-none bg-transparent  px-4 py-2  w-full focus:outline-none"
						placeholder="name@gmail.com"
						value={waitlist}
						onChange={(e) => {
							setWaitlist(e.target.value);
						}}
					/>
					<input type="button" value="Join Wait list" className="rounded-full bg-neon-green px-4" />
				</div>
			</div>
		</>
	);
}
