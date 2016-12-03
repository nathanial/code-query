import {Repositories} from '../api/repositories';
import {State, Actions, Component, Render} from 'jumpsuit'

export const AppState = State({
	initial: {
		showNewRepositoryDialog: false
	},
	addRepository(){
		return {
			showNewRepositoryDialog: true
		};
	}
});
