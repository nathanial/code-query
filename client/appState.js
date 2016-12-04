import {Repositories} from '../api/repositories';
import {browserHistory} from 'react-router';
import {action, observable, useStrict} from 'mobx';

export const appState = observable({
	showNewRepositoryDialog: false
});

export const addRepository = action(() => {
	console.log("BONGO DRUM");
	appState.showNewRepositoryDialog = true;
});

export const hideNewRepositoryDialog = action(() => {
	appState.showNewRepositoryDialog = false;
});

export const createRepo = action((repositoryInfo) => {
	Repositories.insert(repositoryInfo);
	appState.showNewRepositoryDialog = false;
});

export const navigateToRepo = action((repository) => {
	browserHistory.push(`/repos/${repository._id}`);
});

export const removeRepository = action((repository) => {
	Repositories.remove(repository._id);
});

export const gotoRepositoryList = action(() => {
	browserHistory.push('/');
});
