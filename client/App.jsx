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
						<div className="pt-navbar-heading">
							<a onClick={this._onHomeClick} style={{color: 'white', textDecoration: 'none'}}>Code Query</a>
						</div>
					</div>
					{this.props.navbar}
				</nav>
				<div className="content">
					{this.props.content}
				</div>
			</div>
		);
	}

	_onHomeClick = () => {
		browserHistory.push('/');
	};

}
