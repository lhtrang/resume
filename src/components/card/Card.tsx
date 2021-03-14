import React from 'react';
import './Card.css';

export class Card extends React.Component<{
	title?: string
}> {

	render() {
		const title = this.props.title && <div className="card-title">{this.props.title}</div>;
		return (
			<div className="card p-shadow-2" >
				{title}
				<div className="card-content">{this.props.children}</div>
			</div>
		);
	}
}
