export default function Navbar() {
	return (
		<>
			<div className="w-full flex justify-between ">
				<div className="flex w-fit border-2 border-neon-green rounded-full p-2">
					<div className=" py-2 px-4 2 bg-transparent   border-r-2 border-neon-green">Home</div>
					<div className=" py-2 px-4 bg-transparent  border-r-2 border-neon-green">Features</div>
					<div className=" py-2 px-4 bg-transparent ">Docs</div>
				</div>
				<div className="rounded-full py-2 px-4 bg-transparent  border-2 border-neon-green ">Wait list</div>
			</div>
		</>
	);
}
