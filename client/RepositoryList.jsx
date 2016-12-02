import React from 'react';
import {browserHistory} from 'react-router';

export default class RepositoryList extends React.Component {

	static propTypes = {
		repositories: React.PropTypes.array
	}

	render(){
		return (
			<ul className="repositories pt-list pt-list-unstyled">
				{_.map(this.props.repositories, (repository, i) => {
					return (
						<li className="repository" key={i} onClick={() => this._onNavigateToRepository(repository)}>
							<div className="pt-card pt-elevation-0 pt-interactive">
								<h5><a href="#">{repository.name}</a></h5>
								<p>Overview of employee activity, including risk model, scores and scenario alert history.</p>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}

	_onNavigateToRepository(repository){
		browserHistory.push(`/repos/${repository.id}`);
	}
}
