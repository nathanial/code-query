import React from 'react';
import {Button} from '@blueprintjs/core';

export default class RepositoryOverview extends React.Component {

	static propTypes = {
		id: React.PropTypes.number
	}

	render(){
		console.log("ID", this.props.params.id);
		return (
			<div className="repository-overview">
				<h1>{this.props.id}</h1>
				<Button iconName="trash" className="delete-btn pt-intent-danger" text="Delete" />
			</div>
		);
	}

}
