import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import { AboutMe } from './pages/about-me/AboutMe';

export class App extends React.Component {

	render() {
		return (
			<main className="App">
				<Route exact path="/" component={AboutMe}/>
				<Redirect to="/"/>
			</main>
		);
	}
}
