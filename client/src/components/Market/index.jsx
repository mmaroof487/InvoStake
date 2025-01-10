import { useEffect, useState } from "react";

export default function Market() {
	const [pl, setPl] = useState(100);
	const [random, setRandom] = useState();

	useEffect(() => {
		const intervalId = setInterval(() => {
			setRandom(Math.random() * 100);
		}, 1000);
		setPl();

		return () => clearInterval(intervalId);
	}, []);
	console.log(pl + random);

	return (
		<>
			<div> equity price</div>
			<div>liability</div>
			<div>profit loss: {random}</div>
			<div>+ / -</div>
		</>
	);
}
