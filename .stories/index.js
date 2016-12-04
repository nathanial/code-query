import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {RepositoryList} from '../client/RepositoryList';
import {RepositoryOverview} from '../client/RepositoryOverview';
import {RepositoryForm} from '../client/RepositoryForm';
import {AddRepositoryDialog} from '../client/dialogs/AddRepositoryDialog';
import {RepositoryDownloadProgressPage} from '../client/RepositoryDownloadProgressPage';
import '@blueprintjs/core/dist/blueprint.css';

storiesOf('RepositoryList', module)
	.add('with default entries', () => {
		const repositories = [
			{url: 'http://github.com/nathanial/code-query.git'},
			{url: 'http://github.com/makethunder/placelocal.git'},
			{url: 'http://github.com/makethunder/thunder-js-libs.git'}
		];
		return (
			<RepositoryList repositories={repositories} onNavigateToRepo={action('Navigate To Repo')} />
		);
	});

storiesOf('Repository Overview', module)
	.add('with example', () => {
		const repository = {url: 'http://github.com/makethunder/placelocal.git'};
		return (
			<RepositoryOverview repository={repository}/>
		);
	});

storiesOf('Repository Form', module)
	.add('default', () => {
		const info = {url: 'http://github.com/nathanial/placelocal.git'};
		return (
			<RepositoryForm repositoryInfo={info} onChange={action("Repository Changed")} />
		);
	});

storiesOf('Repository Download Progress Page', module)
	.add('default', () => {
		return (
			<RepositoryDownloadProgressPage repository={{name: 'Code Query'}} progress={50} />
		);
	});

storiesOf('AddRepositoryDialog', module)
	.add('default', () => {
		return (
			<AddRepositoryDialog 	isOpen={true}
														onCreateRepo={action("Create Repo")}
														onCancel={action("Cancel")}/>
		);
	});
