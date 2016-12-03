import React from 'react';
import {browserHistory} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data';
import {Repositories} from '../api/repositories';
import {Button, Intent, Dialog} from '@blueprintjs/core';

class RepositoryList extends React.Component {

	static propTypes = {
		repositories: React.PropTypes.array
	}

	state = {
		dialogIsOpen: false
	}

	render(){
		return (
			<div className="repository-list">
				<ul className="repositories pt-list pt-list-unstyled">
					{_.map(this.props.repositories, (repository, i) => {
						return (
							<li className="repository" key={i} onClick={() => this._onNavigateToRepository(repository)}>
								<div className="pt-card pt-elevation-0 pt-interactive">
									<h5><a href="#">{repository.name}</a></h5>
									<p>Code repository</p>
								</div>
							</li>
						);
					})}
				</ul>
				<Dialog
						iconName="inbox"
						isOpen={this.state.dialogIsOpen}
						onClose={this.toggleDialog}
						title="Dialog Header">
						<div className="pt-dialog-body">
								Some content
						</div>
						<div className="pt-dialog-footer">
								<div className="pt-dialog-footer-actions">
										<Button text="Secondary" />
										<Button intent={Intent.PRIMARY} onClick={this.toggleDialog} text="Primary" />
								</div>
						</div>
				</Dialog>
			</div>
		);
	}

	_onNavigateToRepository(repository){
		browserHistory.push(`/repos/${repository._id}`);
	}
}

export const RepositoryListContainer = createContainer(() => {
	return {
		repositories: Repositories.find({}).fetch()
	};
}, RepositoryList);

export const RepositoryNavbarButtons = () => {
	function addRepository(){
		Repositories.insert({
			name: 'Repo ' + new Date()
		});
	}
	return (
		<Button iconName="pt-icon-plus" text="Add Repository" onClick={addRepository} />
	);
};
