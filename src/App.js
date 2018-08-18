import React, {Component, Fragment} from 'react';
import './App.css';
import AppRouter from "./appRouter/AppRouter";
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Fragment>
						<Header></Header>
						<AppRouter></AppRouter>
					</Fragment>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
