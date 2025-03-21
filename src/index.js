import React from "react";
import ReactDOM from "react-dom/client";
import "src/assets/css/primary.css";
import "src/assets/css/bootstrap.css";
import "src/assets/css/bootstrap-mobile1.css";
import "./index.css";
import store from "src/redux/store";
import { Provider } from "react-redux";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "src/apollo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ApolloProvider client={ApolloClient}>
		<Provider store={store().store}>
			<App />
		</Provider>
	</ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
