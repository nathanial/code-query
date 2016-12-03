import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App.jsx';
import {RepositoryOverview, RepositoryOverviewNavbar} from './RepositoryOverview';
import {
	RepositoryListContainer,
	RepositoryListNavbarButtons
} from './RepositoryList';
import '@blueprintjs/core/dist/blueprint.css';

Meteor.startup(() => {
  render(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute components={{content: RepositoryListContainer, navbar: RepositoryListNavbarButtons}} />
				<Route path="repos/:id" components={{content: RepositoryOverview, navbar: RepositoryOverviewNavbar}}></Route>
			</Route>
		</Router>
		, document.getElementById('render-target'));
});
