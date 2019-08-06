import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.scss';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<Fragment>
					<header className="app-header">
						<NavLink to="/dashboard"><div className="navigation-item">Dashboard</div></NavLink>
						<NavLink to="/settings"><div className="navigation-item">Settings</div></NavLink>

						<img src={logo} className="app-logo" alt="logo"/>
						<span className="app-title">React App</span>
					</header>
				</Fragment>
			</div>
		);
	}
}

export default Header;