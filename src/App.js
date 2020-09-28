import React from "react";
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";
import theme from "./components/Theme";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Trucks from "./pages/Trucks";
import Compare from "./pages/Compare";
// import OldHeader from './components/OldHeader'
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import WhyEV from "./pages/WhyEV";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about/" component={About} />
					<Route exact path="/cars/" component={Cars} />
					<Route exact path="/trucks/" component={Trucks} />
					<Route exact path="/why-ev/" component={WhyEV} />
					<Route exact path="/compare/" component={Compare} />
				</Switch>
			</ThemeProvider>
		</div>
	);
}

export default App;
