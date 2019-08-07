import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss';
import { Tabs, Tab } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Header = withRouter(props => {
    const getDefaultPathName = () => {
        const currentPathName = props.location.pathname;
        const availablePathNames = ['/dashboard', '/settings'];
        return availablePathNames.indexOf(currentPathName) === -1
            ? availablePathNames[0]
            : currentPathName;
    };

    const [value, setValue] = React.useState(getDefaultPathName());

    function handleChange(event, newValue) {
        setValue(newValue);
        props.history.push(newValue);
    }

    return (
        <div className="Header">
            <header className="app-header">
                <Tabs
                    className="tabs"
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab
                        label="Dashboard"
                        value="/dashboard"
                        className="navigation-item"
                    />
                    <Tab
                        label="Settings"
                        value="/settings"
                        className="navigation-item"
                    />
                </Tabs>

                <div className="logo-wrapper">
                    <img src={logo} className="app-logo" alt="logo" />
                    <span className="app-title">React App</span>
                </div>
            </header>
        </div>
    );
});

export default Header;
