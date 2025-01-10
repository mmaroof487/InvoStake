import axios from "axios";
import { useState } from "react";

export default function Ai() {
	const [answer, setAnswer] = useState("");

	async function generate() {
		console.log("fetching");
		const response = await axios({
			url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBYggvwrdfIYyAv1GuHuIKMsXDDcqAvzmI",
			method: "post",
			data: {
				contents: [{ parts: [{ text: "what is blockchain" }] }],
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
				className="bg-black p-14 text-white">
				generate
			</div>

			<div>
				<pre>{answer}</pre>
			</div>
		</>
	);
}
