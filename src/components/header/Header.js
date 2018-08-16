import React, {Component, Fragment} from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<BrowserRouter>
					<Fragment>
						<header className="app-header">
							<NavLink to="/dashboard">Dashboard</NavLink>
							<NavLink to="/settings">Settings</NavLink>

							<img src={logo} className="app-logo" alt="logo"/>
							<span className="app-title">React App</span>
						</header>
					</Fragment>
				</BrowserRouter>
			</div>
		);
	}
}

export default Header;