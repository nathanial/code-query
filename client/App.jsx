import React, { Component } from 'react';
import {Button, Tree, Tooltip} from '@blueprintjs/core';
import _ from 'lodash';
import { browserHistory } from 'react-router'

let id = 1;

export default class App extends Component {

	state = {
		repositories: []
	}

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
					{React.Children.map(this.props.children, (child) => React.cloneElement(child, {
						repositories: this.state.repositories
					}))}
				</div>
			</div>
		);
	}


	_onAddRepository(){
		this.setState({
			repositories: this.state.repositories.concat([{
				id: id++,
				name: "Repo " + Math.random()
			}])
		});
	}


}
