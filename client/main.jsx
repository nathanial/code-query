import {State, Actions, Component, Render} from 'jumpsuit'
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App.jsx';
import {
	RepositoryOverview, RepositoryOverviewNavbar} from './RepositoryOverview';
import {
	RepositoryList,
	RepositoryListNavbarButtons
} from './RepositoryList';
import '@blueprintjs/core/dist/blueprint.css';
import {createContainer} from 'meteor/react-meteor-data';
import {Repositories}  from '../api/repositories';
import {AppState} from './appState';

const RepositoryListContainer = createContainer(() => {
	return {
		repositories: Repositories.find({}).fetch(),
		onNavigateToRepo: Actions.navigateToRepo
	};
}, RepositoryList);

const RepositoryOverviewContainer = createContainer((props) => {
	return {
		repository: Repositories.findOne({_id: props.params.id})
	};
}, RepositoryOverview);


const RepositoryOverviewNavbarContainer = createContainer((props) => {
	return {
		repository: Repositories.findOne({_id: props.params.id}),
		onGoBack: Actions.goBackToRepositoryList,
		onDelete: Actions.removeRepository
	};
}, RepositoryOverviewNavbar);

const RepositoryListNavbarButtonsContainer = () => {
	return (
		<RepositoryListNavbarButtons onAddRepository={Actions.addRepository} />
	);
};

const state = {
	app: AppState
};

const routes = (
	<Route path="/" component={App}>
		<IndexRoute components={{content: RepositoryListContainer, navbar: RepositoryListNavbarButtonsContainer}} />
		<Route path="repos/:id" components={{content: RepositoryOverviewContainer, navbar: RepositoryOverviewNavbarContainer}}></Route>
	</Route>
);

const RootComponent = Component({

	render(){
		const createElement = (Element, props) => {
			return <Element {...props} appState={this.props.app} />;
		};
		return (
			<Router history={browserHistory} createElement={createElement} routes={routes}>
			</Router>
		);
	}

}, (state) => {
	return {
		app: state.app
	};
})

Meteor.startup(() => {
	Render(state, <RootComponent />);
});
