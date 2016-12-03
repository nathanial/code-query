import React from 'react';
import {Button, Tree, Tooltip} from '@blueprintjs/core';
import _ from 'lodash';
import { browserHistory } from 'react-router'
import { Repositories } from '../api/repositories';
import {createContainer} from 'meteor/react-meteor-data';
import {State, Actions, Component, Render} from 'jumpsuit'
import AllActionDialogs from './dialogs/AllActionDialogs';

let id = 1;

export default class App extends React.Component {

	render() {
		return (
			<div className="container">
				<nav className="pt-navbar pt-dark">
					<div className="pt-navbar-group pt-align-left">
						<div className="pt-navbar-heading">
							<a onClick={this._onHomeClick} style={{color: 'white', textDecoration: 'none'}}>Code Query</a>
						</div>
					</div>
					{React.Children.map(this.props.navbar, (child) => {
						return React.cloneElement(child, {
								appState: this.props.appState
						});
					})}
				</nav>
				<div className="content">
					{React.Children.map(this.props.content, (child) => {
						return React.cloneElement(child, {
								appState: this.props.appState
						});
					})}
				</div>
				<AllActionDialogs appState={this.props.appState}/>
			</div>
		);
	}

	_onHomeClick = () => {
		Actions.gotoHome();
	};

}
