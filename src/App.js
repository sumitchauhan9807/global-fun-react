import Navigation from "src/components/Navigation";
import { BrowserRouter } from "react-router-dom";
import Router from "src/router";

function App() {
	return (
		<div className="App">
			{/* <Navigation /> */}
			<div >
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
