import Navigation from "src/components/Navigation";
import { BrowserRouter } from "react-router-dom";
import Router from "src/router";
import { usePublicId } from "src/Hooks/Helpers";

function App() {
	usePublicId()
	return (
		<div className="App">
			{/* <Navigation /> */}
			<div>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
