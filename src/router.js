import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Producer from "src/views/Producer";
import Consumer from "src/views/Consumer";
import Front from "src/views/Front";


function Router() {
	return (
		<Routes>
			<Route exact path="/" element={<Front />} />
			<Route exact path="/producer" element={<Producer />} />
			<Route exact path="/consumer/:id" element={<Consumer />} />
		</Routes>
	);
}

export default Router;
