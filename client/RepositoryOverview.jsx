import React from 'react';
import {Button, Dialog, Intent} from '@blueprintjs/core';
import _ from 'lodash';

export class RepositoryOverview extends React.Component {

	static propTypes = {
		id: React.PropTypes.number
	};

	overviewStyle = {
		height: 800
	};

	render(){
		const name = _.get(this.props, 'repository.url');
		return (
			<div className="repository-overview">
				<div className="pt-card" style={this.overviewStyle}>
					<h3>Overview of {name}</h3>
				</div>
			</div>
		);
	}
}

export class RepositoryOverviewNavbar extends React.Component {

	static propTypes = {
		repository: React.PropTypes.object,
		onDelete: React.PropTypes.func.isRequired,
		onGoBack: React.PropTypes.func.isRequired
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
		this.props.onDelete(this.props.repository);
	};

	_goBack = () => {
		this.props.onGoBack();
	}
}
