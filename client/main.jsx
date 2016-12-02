import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App.jsx';
import RepositoryOverview from './RepositoryOverview';
import RepositoryList from './RepositoryList';
import '@blueprintjs/core/dist/blueprint.css';

Meteor.startup(() => {
  render(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={ RepositoryList } />
				<Route path="repos/:id" component={RepositoryOverview}></Route>
			</Route>
		</Router>
		, document.getElementById('render-target'));
});
