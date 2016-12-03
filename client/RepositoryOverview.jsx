import React from 'react';
import {Button, Dialog, Intent} from '@blueprintjs/core';
import {createContainer} from 'meteor/react-meteor-data';
import {Repositories} from '../api/repositories';
import _ from 'lodash';
import { browserHistory } from 'react-router'

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

	state = {
		showDeleteDialog: false
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
					<Button style={{marginRight:10}} onClick={this._goBack}>Back</Button>
					<Button iconName="trash" className="delete-btn pt-intent-danger" text="Delete" onClick={this._onShowDeleteDialog}/>
				</div>

				<Dialog iconName="trash" isOpen={this.state.showDeleteDialog} title="Confirm Delete" onClose={this._closeDeleteDialog}>
					<div className="pt-dialog-body">
							 Are you sure you want to delete this repository?
					</div>
					<div className="pt-dialog-footer">
						<div className="pt-dialog-footer-actions">
							<Button text="Cancel" onClick={this._closeDeleteDialog} />
							<Button intent={Intent.DANGER} onClick={this._onDelete} text="Delete Repository" />
						</div>
					</div>
				</Dialog>
			</div>
		);
	}

	_onShowDeleteDialog = () => {
		this.setState({
			showDeleteDialog: true
		});
	};

	_closeDeleteDialog = () => {
		this.setState({
			showDeleteDialog: false
		});
	};

	_onDelete = () => {
		Repositories.remove(this.props.repository._id);
		browserHistory.push('/');
	};

	_goBack = () => {
		browserHistory.push('/');
	}
}

export const RepositoryOverviewNavbar = createContainer((props) => {
	return {
		repository: Repositories.findOne({_id: props.params.id})
	};
}, NavbarContent);
