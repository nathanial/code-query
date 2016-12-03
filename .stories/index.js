import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {RepositoryList} from '../client/RepositoryList';
import {RepositoryOverview} from '../client/RepositoryOverview';
import {NewRepositoryForm} from '../client/NewRepositoryForm';
import '@blueprintjs/core/dist/blueprint.css';

storiesOf('RepositoryList', module)
	.add('with default entries', () => {
		const repositories = [
			{name: 'Repo 1'},
			{name: 'Repo 2'},
			{name: 'Repo 3'}
		];
		return (
			<RepositoryList repositories={repositories} onNavigateToRepo={action('Navigate To Repo')} />
		);
	});

storiesOf('Repository Overview', module)
	.add('with example', () => {
		const repository = {
			name: 'placelocal.com'
		};
		return (
			<RepositoryOverview repository={repository}/>
		);
	});

storiesOf('New Repository Form', module)
	.add('default', () => {
		return (
			<NewRepositoryForm onCreateRepo={action('Create Repo')} onCancel={action('Cancel')} />
		);
	});
