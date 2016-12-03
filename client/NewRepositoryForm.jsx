import React from 'react';
import {Button, Intent} from '@blueprintjs/core';

const formStyle = {
	height: 300,
	width: 500
};

export class NewRepositoryForm extends React.Component {

	static propTypes = {
		onCreateRepo: React.PropTypes.func.isRequired,
		onCancel: React.PropTypes.func.isRequired
	}

	state = {};

	render(){
		return (
			<div className="pt-card pt-elevation-2" style={formStyle}>
				<h2 style={{marginBottom: 30, textDecoration:'underline'}}>New Repository Form</h2>
				<label className="pt-label inline" style={{marginBottom: 100, marginTop: 50}}>
					<span>Repository URL</span>
					<input ref={(url) => {this.urlInput = url; } }
								className="pt-input"
								style={{width: 400}}
								type="text"
								placeholder="http://github.com/nathanial/code-query.git"
								dir="auto" />
				</label>
				<Button iconName="pt-icon-add" text="Create Repo" intent={Intent.SUCCESS}
								style={{marginRight: 10}} onClick={this._onCreateRepo} />
				<Button text="Cancel" onClick={this.props.onCancel} />
			</div>
		);
	}

	_onCreateRepo = () => {
		this.props.onCreateRepo({
			url: this.urlInput.value
		});
	};
}
