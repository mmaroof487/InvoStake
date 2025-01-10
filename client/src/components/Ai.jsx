import axios from "axios";
import { useState } from "react";

export default function Ai() {
	const [answer, setAnswer] = useState("");

	async function generate() {
		console.log("fetching");
		const response = await axios({
			url: import.meta.env.VITE_API_KEY,
			method: "post",
			data: {
				contents: [
					{
						parts: [
							{
								text: import.meta.env.VITE_USER_INPUT,
							},
						],
					},
				],
			},
		});
		setAnswer(response.data.candidates[0].content.parts[0].text);
	}
	return (
		<>
			<div
				onClick={() => {
					generate();
				}}
				className="bg-black p-14 text-white cursor-pointer">
				generate
			</div>

			<div>
				<pre>{answer}</pre>
			</div>
		</>
	);
}
