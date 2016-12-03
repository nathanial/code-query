import React from 'react';
import {Button} from '@blueprintjs/core';
import {createContainer} from 'meteor/react-meteor-data';
import {Repositories} from '../api/repositories';
import _ from 'lodash';

class RepositoryOverview extends React.Component {

	static propTypes = {
		id: React.PropTypes.number
	};

	overviewStyle = {
		height: 800
	};

	render(){
		const name = _.get(this.props, 'repository.name');
		return (
			<div className="repository-overview">
				<div className="pt-card" style={this.overviewStyle}>
					<h3>Overview of {name}</h3>
				</div>
			</div>
		);
	}
}

export const RepositoryOverviewContainer = createContainer((props) => {
	return {
		repository: Repositories.findOne({_id: props.params.id})
	};
}, RepositoryOverview);

class NavbarContent extends React.Component {

	static propTypes = {
		repository: React.PropTypes.object
	}

	render(){
		const overviewStyle = {
			position: 'relative',
			top: 15,
			marginLeft: 100,
			display: 'inline-block'
		};

		const name = _.get(this.props, 'repository.name', 'N/A');

		return (
			<div>
				<div style={overviewStyle}>
					<div className="pt-navbar-heading">Repository Overview - {name}</div>
				</div>
				<div className="pt-navbar-group pt-align-right">
					<Button iconName="trash" className="delete-btn pt-intent-danger" text="Delete" />
				</div>
			</div>
		);
	}
}

export const RepositoryOverviewNavbar = createContainer((props) => {
	return {
		repository: Repositories.findOne({_id: props.params.id})
	};
}, NavbarContent);
