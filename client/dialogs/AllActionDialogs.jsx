import React from 'react';
import _ from 'lodash';
import {Button, Intent, Dialog} from '@blueprintjs/core';
import {RepositoryForm} from '../RepositoryForm';
import {AddRepositoryDialog} from './AddRepositoryDialog';
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
		const showNewRepositoryDialog = _.get(this.props.appState, 'showNewRepositoryDialog', false);
		return (
			<div>
				<AddRepositoryDialog isOpen={showNewRepositoryDialog}
					onCancel={hideNewRepositoryDialog}
					onCreateRepo={createRepo}/>
			</div>
		);
	}
}
