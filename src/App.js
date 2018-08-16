import React, {Component} from 'react';
import './App.css';
import AppRouter from "./appRouter/AppRouter";
import Header from "./components/header/Header";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>

				<AppRouter/>
			</div>
		);
	}
}

export default App;
