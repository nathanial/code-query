import React from 'react';
import _ from 'lodash';
import {Button, Intent, Dialog} from '@blueprintjs/core';
import {State, Actions, Component, Render} from 'jumpsuit'
import {NewRepositoryForm} from '../NewRepositoryForm';

export default class AllActionDialogs extends React.Component {

	static propTypes = {
		appState: React.PropTypes.object
	}

	render(){
		const showNewRepositoryDialog = _.get(this.props.appState, 'showNewRepositoryDialog', false);
		return (
			<div>
				<Dialog	iconName="inbox"
								isOpen={showNewRepositoryDialog}
								onClose={this.toggleDialog}
								title="Dialog Header">
						<div className="pt-dialog-body">
							<NewRepositoryForm onCreateRepo={Actions.createRepo} onCancel={Actions.hideNewRepositoryDialog} />
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
}
