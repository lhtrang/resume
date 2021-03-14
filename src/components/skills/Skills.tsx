import React from 'react';
import './Skills.scss';
import { ProgressBadge } from '../progress-badge/ProgressBadge';
import { Divider } from 'primereact/divider';

export class Skills extends React.Component {
	render() {
		return (
			<section className="skills">
				<div className="p-grid p-nogutter">
					<div className="p-col">
						<div className="p-grid p-nogutter">
							<Divider>Languages</Divider>
							<ProgressBadge value={90} label="HTML"/>
							<ProgressBadge value={90} label="CSS"/>
							<ProgressBadge value={90} label="JavaScript"/>
							<ProgressBadge value={90} label="TypeScript"/>
							<ProgressBadge value={50} label="Java"/>
						</div>
						<div className="p-grid p-nogutter">
							<Divider>Libraries & Frameworks</Divider>
							<ProgressBadge value={80} label="Cypress"/>
							<ProgressBadge value={90} label="Angular"/>
							<ProgressBadge value={50} label="ReactJS"/>
							<ProgressBadge value={80} label="Cordova"/>
							<ProgressBadge value={80} label="Ionic"/>
							<ProgressBadge value={50} label="SpringBoot"/>
							<ProgressBadge value={70} label="Protractor"/>
							<ProgressBadge value={80} label="Cypress"/>
							<ProgressBadge value={80} label="RxJS"/>
						</div>
						<div className="p-grid p-nogutter">
							<Divider>Concepts</Divider>
							<ProgressBadge value={90} label="OOP"/>
							<ProgressBadge value={90} label="FP"/>
							<ProgressBadge value={90} label="State management"/>
							<ProgressBadge value={90} label="MV*"/>
							<ProgressBadge value={80} label="SOLID"/>
							<ProgressBadge value={80} label="Clean Architecture"/>
							<ProgressBadge value={70} label="UI/UX"/>
							<ProgressBadge value={80} label="Reactive programing"/>
							<ProgressBadge value={90} label="OIDC"/>
							<ProgressBadge value={95} label="Testing"/>
						</div>
						<div className="p-grid p-nogutter">
							<Divider>Tools</Divider>
							<ProgressBadge value={90} label="GIT"/>
							<ProgressBadge value={50} label="Docker"/>
							<ProgressBadge value={70} label="ESLint"/>
							<ProgressBadge value={70} label="SonarQube"/>
							<ProgressBadge value={60} label="GoCD"/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}