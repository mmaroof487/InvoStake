import axios from "axios";

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
console.log(answer);
const answer = response.data.candidates[0].content.parts[0].text;

export default answer;
