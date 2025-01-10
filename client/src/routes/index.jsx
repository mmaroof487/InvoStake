import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";

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
]);

export default function AppRoutes() {
	return <RouterProvider router={router} />;
}
