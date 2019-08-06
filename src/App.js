import React, { Component, Fragment } from 'react';
import './App.scss';
import AppRouter from './appRouter/AppRouter';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Fragment>
                        <Header />
                        <AppRouter />
                    </Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
