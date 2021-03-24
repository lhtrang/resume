import React from 'react';
import './Education.scss';
import hcmusLogo from '../../assets/images/hcmus_logo.png';
import { Divider } from 'primereact/divider';

export class Education extends React.Component {
	render() {
		return (
			<section className="education">
				<Divider align="left">
					<div className="education__title">Education</div>
				</Divider>
				<div className="education__content p-grid p-nogutter">
					<div className="p-col-fixed">
						<img alt="university logo" className="education__logo" src={hcmusLogo}/>
					</div>
					<div className="education__university-name p-col-fixed p-mr-4">
						Ho Chi Minh University of Science
					</div>
					<div className="p-col">
						<div>Bachelor of Information Technology Major in Software Engineering.</div>
						<div>Year 2011 – 2015</div>
					</div>
					<div className="p-col-fixed p-text-bold">
						GPA 8.12/10
					</div>
				</div>
			</section>
		);
	}
}
