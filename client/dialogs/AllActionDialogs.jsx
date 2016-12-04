import React from 'react';
import _ from 'lodash';
import {Button, Intent, Dialog} from '@blueprintjs/core';
import {RepositoryForm} from '../RepositoryForm';
import {
	createRepo,
	hideNewRepositoryDialog
} from '../appState';
import {observer} from "mobx-react";

@observer
export default class AllActionDialogs extends React.Component {

	static propTypes = {
		appState: React.PropTypes.object
	}

	render(){
		console.log("App State", this.props.appState);
		const showNewRepositoryDialog = _.get(this.props.appState, 'showNewRepositoryDialog', false);
		return (
			<div>
				<Dialog	iconName="inbox"
								isOpen={showNewRepositoryDialog}
								onClose={this.toggleDialog}
								title="Dialog Header">
						<div className="pt-dialog-body">
							<RepositoryForm onCreateRepo={createRepo} onCancel={hideNewRepositoryDialog} />
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
