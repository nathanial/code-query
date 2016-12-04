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
import {
	appState,
	gotoRepositoryList,
	removeRepository,
	navigateToRepo,
	addRepository
} from './appState';
import {observer} from "mobx-react";

const RepositoryListContainer = createContainer(() => {
	return {
		repositories: Repositories.find({}).fetch(),
		onNavigateToRepo: navigateToRepo
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
		onGoBack: gotoRepositoryList,
		onDelete: (repo) => {
			removeRepository(repo);
			gotoRepositoryList();
		}
	};
}, RepositoryOverviewNavbar);

const RepositoryListNavbarButtonsContainer = () => {
	return (
		<RepositoryListNavbarButtons onAddRepository={addRepository} />
	);
};

const routes = (
	<Route path="/" component={App}>
		<IndexRoute components={{content: RepositoryListContainer, navbar: RepositoryListNavbarButtonsContainer}} />
		<Route path="repos/:id" components={{content: RepositoryOverviewContainer, navbar: RepositoryOverviewNavbarContainer}}></Route>
	</Route>
);


@observer
class RootComponent extends React.Component {
	render(){
		const createElement = (Element, props) => {
			return <Element {...props} appState={this.props.appState} />;
		};
		return (
			<Router history={browserHistory} createElement={createElement} routes={routes}>
			</Router>
		);
	}
}

Meteor.startup(() => {
	render(<RootComponent appState={appState} />, document.getElementById('app'));
});
