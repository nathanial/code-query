import React from 'react';
import _ from 'lodash';
import {browserHistory} from 'react-router';
import {Button, Intent, Dialog} from '@blueprintjs/core';

export class RepositoryList extends React.Component {

	static propTypes = {
		repositories: React.PropTypes.array,
		onNavigateToRepo: React.PropTypes.func
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
			</div>
		);
	}

	_onNavigateToRepository(repository){
		if(this.props.onNavigateToRepo){
			this.props.onNavigateToRepo(repository);
		}
	}
}

export const RepositoryListNavbarButtons = () => {
	function addRepository(){
		Repositories.insert({
			name: 'Repo ' + new Date()
		});
	}
	return (
		<div className="pt-navbar-group pt-align-right">
			<Button iconName="pt-icon-plus" text="Add Repository" onClick={addRepository} />
		</div>
	);
};
