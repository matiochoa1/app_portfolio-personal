import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { HomePage } from "./pages/HomePage";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
