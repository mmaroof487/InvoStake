import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import Metamask from "../pages/Navbar/components/Metamask";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/basket",
		element: <Basket />,
	},
	{
		path: "/metamask",
		element: <Metamask />,
	},
]);

export default function AppRoutes() {
	return <RouterProvider router={router} />;
}
