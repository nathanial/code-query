import React, { Component } from 'react';
import {Button, Tree, Tooltip} from '@blueprintjs/core';
import _ from 'lodash';
import { browserHistory } from 'react-router'
import { Repositories } from '../api/repositories';
import {createContainer} from 'meteor/react-meteor-data';

let id = 1;

export default class App extends Component {

	render() {
		return (
			<div className="container">
				<nav className="pt-navbar pt-dark">
					<div className="pt-navbar-group pt-align-left">
						<div className="pt-navbar-heading">Code Query</div>
					</div>
					<div className="pt-navbar-group pt-align-right">
						<Button iconName="pt-icon-plus" text="Add Repository" onClick={() => this._onAddRepository()} />
					</div>
				</nav>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}


	_onAddRepository(){
		Repositories.insert({
			name: "Repo " + new Date()
		});
	}


}
