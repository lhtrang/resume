import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.scss';
import { AboutMe } from './pages/about-me/AboutMe';

export class App extends React.Component {

	render() {
		return (
			<div className="app">
				<main>
					<Route exact path="/" component={AboutMe}/>
					<Redirect to="/"/>
				</main>
			</div>
		);
	}
}
