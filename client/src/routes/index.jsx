import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";

export default function AppRoutes() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/basket" element={<Basket />} />
			</Routes>
		</HashRouter>
	);
}
