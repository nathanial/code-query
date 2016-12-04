import _ from 'lodash';
import React from 'react';
import {Button, Intent} from '@blueprintjs/core';

const formStyle = {
};

export class RepositoryForm extends React.Component {

	static propTypes = {
		repositoryInfo: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired
	}

	state = {
		repo: {
			url: _.get(this.props, 'repositoryInfo.url')
		}
	};

	render(){
		return (
			<div style={formStyle}>
				<label className="pt-label inline">
					<span>Repository URL</span>
					<input ref={(url) => {this.urlInput = url; } }
								className="pt-input"
								style={{width: 400}}
								type="text"
								placeholder="http://github.com/nathanial/code-query.git"
								dir="auto"
								value={this.state.repo.url}
								onChange={this._onChange}/>
				</label>
			</div>
		);
	}

	_onChange = () => {
		this.setState({
			repo: _.extend({}, this.state.repo, {
				url: this.urlInput.value
			})
		});
		this.props.onChange(this.state);
	};
}

export class RepositoryFormButtons extends React.Component {

	static propTypes = {
		onCreateRepo: React.PropTypes.func.isRequired,
		onCancel: React.PropTypes.func.isRequired
	}

	render(){
		return (
			<div>
				<Button iconName="pt-icon-add" text="Create Repo" intent={Intent.SUCCESS}
								style={{marginRight: 10}} onClick={this.props.onCreateRepo} />
				<Button text="Cancel" onClick={this.props.onCancel} />
			</div>
		);
	}
}
