import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
import './Header.scss';
import { Tooltip } from 'primereact/tooltip';

export class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="header__cover">
					<div className="header__slogan">
						<span className="header__slogan--strong1">Enthusiast</span> build
						<span className="header__slogan--strong2"> high-value</span> software
					</div>
				</div>
				<div className="p-grid p-nogutter header__content">
					<div className="header__avatar">
						<img alt="avatar" className="header__avatar-image" src={avatar}/>
					</div>
					<div className="p-col">
						<h2 className="header__full-name">LE HUNG TRANG</h2>
						<div className="p-grid p-nogutter">
							<div>
								<div className="header__info-line">
									<i className="header__info-icon pi pi-home" />
									Tan Binh District, Ho Chi Minh City, Viet Nam
								</div>
								<div className="header__info-line">
									<i className="header__info-icon pi pi-envelope" />
									1112334.lhtrang@gmail.com
								</div>
								<div className="header__info-line">
									<Tooltip target="#icon-linkedin" position="bottom" content="LinkedIn" />
									<a id="icon-linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tranglh93">
										<i className="header__info-icon pi pi-linkedin" />
									</a>

									<Tooltip target="#icon-medium" position="bottom" content="Medium" />
									<a id="icon-medium" target="_blank" rel="noopener noreferrer" href="https://tranglh.medium.com">
										<i className="header__info-icon pi icon-medium">
											<span>M</span>
										</i>
									</a>

									<Tooltip target="#icon-website" position="bottom" content="Website" />
									<a id="icon-website" target="_blank" rel="noopener noreferrer" href="https://lhtrang.github.io/resume">
										<i className="header__info-icon pi pi-globe"/>
									</a>
								</div>
							</div>
							<div className="header__about-me p-col">
								Frontend specialist, tend to be Full stack
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
