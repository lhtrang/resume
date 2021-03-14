import React from 'react';
import { InputSwitch } from 'primereact/inputswitch';

import './AboutMe.scss';
import { Card } from '../../components/card/Card';
import { Header } from '../../components/header/Header';
import { Education } from '../../components/education/Education';
import { Skills } from '../../components/skills/Skills';
import { Experiences } from '../../components/experiences/Experiences';

export class AboutMe extends React.Component<{}, { isDark: boolean }>  {

	LIGHT_THEME = 'bootstrap4-light-blue';
	DARK_THEME = 'bootstrap4-dark-blue';

	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.state = {
			isDark: false
		};
	}

	onThemeChange(e: any) {
		const isDark = e.value;
		const themeElement = document.getElementById('theme-link');

		if (themeElement) {
			let newTheme = '';
			if (isDark) {
				newTheme = themeElement.getAttribute('href')?.replace(this.LIGHT_THEME, this.DARK_THEME) || '';
			} else {
				newTheme = themeElement.getAttribute('href')?.replace(this.DARK_THEME, this.LIGHT_THEME) || '';
			}
			themeElement.setAttribute('href', newTheme);
		}
		this.setState({isDark});
	}

	render() {
		return (
			<div className="about-me-page">
				<div className="theme-switcher">
					<div className="theme-switcher__content p-grid p-nogutter p-justify-end">
						<i className="theme-switcher__icon pi pi-sun"/>
						<InputSwitch checked={this.state.isDark} onChange={this.onThemeChange.bind(this)}/>
						<i className="theme-switcher__icon pi pi-moon"/>
					</div>
				</div>
				<Card>
					<Header/>
					<Education/>
				</Card>
				<Card title="Skills">
					<Skills/>
				</Card>
				<Card title="Experiences">
					<Experiences/>
				</Card>
			</div>
		);
	}
}