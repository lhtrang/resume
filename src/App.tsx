import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import { AboutMe } from './pages/about-me/AboutMe';

export class App extends React.Component {

	render() {
		return (
            <main className="App">
                <Switch>
					<Route exact path="/" component={AboutMe} />
					<Redirect to="/" />
                </Switch>
            </main>
		);
	}
}
