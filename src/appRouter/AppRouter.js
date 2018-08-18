import React, {Component, Fragment} from 'react';
import {Redirect, Route} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Settings from "../pages/settings/Settings";

class AppRouter extends Component {
	render() {
		return (
			<Fragment>
				<Route exact path="/" render={() => (
					<Redirect to="/dashboard"/>
				)}/>

				<Route exact path="/dashboard" component={Dashboard}/>
				<Route path="/settings" component={Settings}/>
			</Fragment>
		);
	}
}

export default AppRouter;

