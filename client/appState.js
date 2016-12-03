import {Repositories} from '../api/repositories';
import {State, Actions, Component, Render} from 'jumpsuit'
import {browserHistory} from 'react-router';

export const AppState = State({
	initial: {
		showNewRepositoryDialog: false
	},
	addRepository(){
		return {
			showNewRepositoryDialog: true
		};
	},
	hideNewRepositoryDialog(){
		return {
			showNewRepositoryDialog: false
		};
	},
	createRepo(state, repositoryInfo){
		Repositories.insert(repositoryInfo);
		return _.extend({}, state, {
			showNewRepositoryDialog: false
		});
	},
	navigateToRepo(state, repository){
		browserHistory.push(`/repos/${repository._id}`);
		return _.extend({}, state);
	}
});
