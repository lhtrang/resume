import React from 'react';
import './Experiences.scss';
import adnLogo from '../../assets/images/adn_logo.png';
import hcmusLogo from '../../assets/images/hcmus_logo.png';
import gcsLogo from '../../assets/images/gcs_logo.png';
import tintmLogo from '../../assets/images/tintm_logo.png';
import allexceedLogo from '../../assets/images/allexceed_logo.png';
import { Timeline } from 'primereact/timeline';

export class Experiences extends React.Component<{}, { events: any }> {

	constructor(props: {} | Readonly<{}>) {
		super(props);
		const events = [
			{
				time: 'Now',
				logo: adnLogo,
				markerClass: 'time-marker--year'
			},
			{
				time: '2021',
				markerClass: 'time-marker--year',
				title: 'Senior software engineer',
				role: 'Frontend expertise',
				project: 'Technology & Innovation',
				description: 'Building application framework & tool'
			},
			{
				time: 'Dec',
				markerClass: 'time-marker--month',
				title: 'Professional Software Engineer',
				role: 'Full Stack',
				project: 'Detokenize Application',
				remark: {
					'Framework': 'Angular, SpringBoot',
					'Language': 'TypeScript, Java',
					'Tool': 'Docker'
				}
			},
			{
				time: 'Jan',
				markerClass: 'time-marker--month',
				title: 'Professional Software Engineer',
				role: 'Frontend module Leader',
				project: 'Approval Workflow',
				remark: {
					'Framework': 'Angular',
					'Language': 'Typescript'
				}
			},
			{
				time: '2020',
				markerClass: 'time-marker--year'
			},
			{
				time: 'Jan',
				markerClass: 'time-marker--month',
				title: 'Professional Software Engineer',
				role: 'Frontend module Leader',
				project: 'Access Management Application',
				remark: {
					'Framework': 'Angular',
					'Language': 'Typescript'
				}
			},
			{
				time: '2019',
				markerClass: 'time-marker--year'
			},
			{
				time: 'Jan',
				markerClass: 'time-marker--month',
				title: 'Professional Software Engineer',
				role: 'Technical Team Leader',
				project: 'Mobile banking app',
				remark: {
					'Framework': 'Cordova',
					'Library': 'JQuery',
					'Language': 'Javascript'
				}
			},
			{
				time: '2018',
				markerClass: 'time-marker--year'
			},
			{
				title: 'Freelancer',
				role: 'Frontend developer',
				project: 'MNS Ordering Web/Mobile App',
				remark: {
					'Framework': 'Cordova, AngularJS, Bootstrap',
					'Language': 'Javascript'
				}
			},
			{
				title: 'Freelancer',
				role: 'Frontend developer',
				project: 'MNS Survey Report mobile app',
				remark: {
					'Framework': 'Cordova, AngularJS, Bootstrap',
					'Language': 'Javascript'
				}
			},
			{
				title: 'Freelancer',
				role: 'Frontend developer',
				project: 'MNS Survey mobile app',
				remark: {
					'Framework': 'Cordova, AngularJS, Bootstrap',
					'Language': 'Javascript'
				}
			},
			{
				time: '2017',
				markerClass: 'time-marker--year'
			},
			{
				time: 'Jun',
				markerClass: 'time-marker--month',
				logo: adnLogo,
				title: 'Junior Software Engineer',
				role: 'Frontend Developer',
				project: 'Mobile banking app',
				remark: {
					'Framework': 'Cordova',
					'Library': 'JQuery',
					'Language': 'Javascript'
				}
			},
			{
				title: 'Freelancer',
				role: 'Frontend Developer',
				project: 'MNS Survey mobile app',
				remark: {
					'Framework': 'Cordova, AngularJS',
					'Language': 'Javascript'
				}
			},
			{
				time: 'Jan',
				markerClass: 'time-marker--month',
				logo: tintmLogo,
				title: 'Freelancer',
				role: 'Full Stack Developer',
				project: 'News Aggregator Website',
				remark: {
					'Framework': 'AngularJS',
					'Language': 'Javascript'
				}
			},
			{
				time: '2016',
				markerClass: 'time-marker--year',
			},
			{
				time: 'Sep',
				markerClass: 'time-marker--month',
				logo: gcsLogo,
				title: 'Junior Software Engineer',
				role: 'Developer',
				project: 'Software Define Networking',
				remark: {
					'Framework': 'Ruby on Rails',
					'Language': 'Ruby'
				}
			},
			{
				time: 'Jan',
				markerClass: 'time-marker--month',
				logo: hcmusLogo,
				title: 'Graduation Thesis',
				role: 'R&D',
				project: 'Refactoring detection',
				description: 'Detect refactoring between 2 code versions',
				remark: {
					'Framework': 'JavaFx',
					'Language': 'Java',
					'Gradle': '9.5/10'
				}
			},
			{
				time: '2015',
				markerClass: 'time-marker--year'
			},
			{
				logo: allexceedLogo,
				title: 'Internship',
				role: 'Mobile Team Leader',
				project: 'ITEL VOIP mobile app',
				description: 'Audio & video call over the internet',
				remark: {
					'Protocol': 'SIP',
					'Platform': 'Android',
					'Language': 'Java'
				}
			},
			{
				time: '2014',
				markerClass: 'time-marker--year'
			},
		];
		this.state = {
			events
		};
	}

	render() {
		const customizedMarker = (item: any) => {
			return (
				<span className={'time-marker p-shadow-2 ' + item.markerClass}>
                    {item.time}
                </span>
			);
		};

		const customizedContent = (item: any) => {
			return (
				<div className="p-grid p-nogutter exp-content">
					<div className="p-col">
						<div className="exp-content__title">{item.title}</div>
						<div className="exp-content__sub-title">{item.role}</div>
					</div>
					<div className="p-col">
						<div className="exp-content__title">{item.project}</div>
						{ item.description && <div>{item.description}</div>}
						{
							item.remark && Object.keys(item.remark)
								.map(key => {
									return (
										<div>
											<span className="exp-content__sub-title">{key}: </span>
											<span>{item.remark[key]}</span>
										</div>
									)
								})
						}
					</div>
				</div>
			);
		};

		const customizeLeftContent = (item: any) => {
			return (
				<div className="left-col">
					{item.logo && <img className="left-col__logo" src={item.logo}/>}
				</div>
			);
		};

		return (
			<section className="experiences">
				<Timeline align="left"
						  value={this.state.events}
						  opposite={customizeLeftContent}
						  marker={customizedMarker}
						  content={customizedContent}/>
			</section>
		);
	}
}