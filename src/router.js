import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Producer from "src/views/Producer";
import Consumer from "src/views/Consumer";
import Front from "src/views/Front";
import LiveSession from "src/views/LiveSession";
import Register from 'src/views/Register'
import Login from 'src/views/Login'


function Router() {
	return (
		<Routes>
			<Route exact path="/register" element={<Register />} />
			<Route exact path="/login" element={<Login />} />

			<Route exact path="/" element={<Front />} />
			<Route exact path="/:username" element={<LiveSession />} />
			<Route exact path="/producer" element={<Producer />} />
			<Route exact path="/consumer/:username" element={<Consumer />} />
		</Routes>
	);
}

export default Router;
