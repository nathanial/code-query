import React from 'react';
import {Button, Intent, Dialog} from '@blueprintjs/core';
import {
	RepositoryForm,
	RepositoryFormButtons
} from '../RepositoryForm';

export class AddRepositoryDialog extends React.Component {

	static propTypes = {
		onCreateRepo: React.PropTypes.func.isRequired,
		isOpen: React.PropTypes.bool.isRequired,
		onCancel: React.PropTypes.func.isRequired
	}

	state = {
		repo: {}
	}

	render(){
		return (
			<Dialog	iconName="add"
							isOpen={this.props.isOpen}
							onClose={() => this.props.onCancel()}
							title="Add Repository">
					<div className="pt-dialog-body">
						<RepositoryForm repositoryInfo={this.state.repo} onChange={this._onChange} />
					</div>
					<div className="pt-dialog-footer">
						<RepositoryFormButtons onCreateRepo={() => this.props.onCreateRepo(this.state.repo)}
																		onCancel={() => this.props.onCancel()} />
					</div>
			</Dialog>
		);
	}

	_onChange = (repoInfo) => {
		this.setState({
			repo: repoInfo
		});
	}
}
