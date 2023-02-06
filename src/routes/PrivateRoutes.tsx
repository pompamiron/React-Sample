import { Route, Routes } from "react-router-dom";
import { NotFoundView } from "../views";
import AboutView from "../views/About";
import { HomePage } from "../views/HomePage";
import { TodoList } from "../views/TodoList";
import { Transactions } from "../views/Transactions";

/**
 * List of routes available only for authenticated users
 * Also renders the "Private Layout" composition
 */
const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="transactions" element={<Transactions />} />,
			<Route path="todolist" element={<TodoList />} />,
			<Route path="about" element={<AboutView />} />,
			<Route path="*" element={<NotFoundView />} />
		</Routes>
	);
};

export default PrivateRoutes;
