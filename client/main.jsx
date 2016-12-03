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

const RepositoryListContainer = createContainer(() => {
	return {
		repositories: Repositories.find({}).fetch(),
		onNavigateToRepo: (repo) => {
			browserHistory.push(`/repos/${repo._id}`)
		}
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
		onGoBack: () => {
			browserHistory.push('/')
		},
		onDelete: (repo) => {
			Repositories.remove(repo._id);
			browserHistory.push('/')
		}
	};
}, RepositoryOverviewNavbar);

Meteor.startup(() => {
  render(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute components={{content: RepositoryListContainer, navbar: RepositoryListNavbarButtons}} />
				<Route path="repos/:id" components={{content: RepositoryOverviewContainer, navbar: RepositoryOverviewNavbarContainer}}></Route>
			</Route>
		</Router>
		, document.getElementById('render-target'));
});
