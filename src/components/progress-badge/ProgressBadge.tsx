import React from 'react';
import './ProgressBadge.scss';

interface Props {
	label: string;
	value: number;
}

export class ProgressBadge extends React.Component<Props> {
	render() {
		return (
			<div className="progress-badge">
				<span className="progress-badge__label">{this.props.label}</span>
				<div className="progress-badge__pipe progress-badge__pipe--progress" style={{right: `${100 - this.props.value}%`}}/>
				<div className="progress-badge__pipe progress-badge__pipe--remain" style={{left: `${this.props.value}%`}}/>
			</div>
		);
	}
}