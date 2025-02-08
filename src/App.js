import Navigation from "src/components/Navigation";
import { BrowserRouter } from "react-router-dom";
import Router from "src/router";
import { usePublicId } from "src/Hooks/Helpers";
import { useEffect } from "react";
import {useSubscribe} from 'src/Hooks/PubNub'



function App() {
	usePublicId();
	// const [ subscription ,unSubscribe ] = useSubscribe('hello_world')
	
	// useEffect(()=>{
	// 	subscription.onMessage = (messageEvent) => {
	// 		console.log("Message event: ", messageEvent);
	// 	};

		
	// },[])
	
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
