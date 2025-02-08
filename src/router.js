import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Producer from "src/views/Producer";
import Consumer from "src/views/Consumer";
import Front from "src/views/Front";
import Page from "src/views/Page";


function Router() {
	return (
		<Routes>
			<Route exact path="/" element={<Front />} />
			<Route exact path="/:username" element={<Page />} />
			<Route exact path="/producer" element={<Producer />} />
			<Route exact path="/consumer/:username" element={<Consumer />} />
		</Routes>
	);
}

export default Router;
