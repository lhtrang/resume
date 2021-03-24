import React from 'react';
import avatar from '../../assets/images/avatar.jpg';
import './Header.scss';

export class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="header__cover">
					<div className="header__slogan">
						<span className="header__slogan--strong1">Enthusiast</span> build
						<span className="header__slogan--strong2"> high-end</span> software
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
									<i className="header__info-icon pi pi-phone" />
									(84) 98 211 3991
								</div>
							</div>
							<div className="header__about-me p-col">
								Frontend base, tend to be Full stack
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}