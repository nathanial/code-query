import React, { Component } from 'react';
import {Button, Tree, Tooltip} from '@blueprintjs/core';

// App component - represents the whole app
export default class App extends Component {

	state = {
		repositoryTree: [
			{
				hasCaret: true,
				iconName: "folder-close",
				label: "Folder 0",
			},
			{
				iconName: "folder-close",
				isExpanded: true,
				label: <Tooltip content="I'm a folder <3">Folder 1</Tooltip>,
				childNodes: [
					{ iconName: "document", label: "Item 0", secondaryLabel: "Funtimes" },
					{ iconName: "pt-icon-tag", label: "Super Fun Times" },
					{
						hasCaret: true,
						iconName: "pt-icon-folder-close",
						label: <Tooltip content="foo">Folder 2</Tooltip>,
						childNodes: [
							{ label: "No-Icon Item" },
							{ iconName: "pt-icon-tag", label: "Item 1" },
							{
								hasCaret: true, iconName: "pt-icon-folder-close", label: "Folder 3",
								childNodes:  [
									{ iconName: "document", label: "Item 0" },
									{ iconName: "pt-icon-tag", label: "Item 1" },
								],
							},
						],
					},
				],
			}
		]
	};

	render() {
		return (
			<div className="container">
				<nav className="pt-navbar pt-dark">
					<div className="pt-navbar-group pt-align-left">
						<div className="pt-navbar-heading">Code Query</div>
					</div>
					<div className="pt-navbar-group pt-align-right">
						<Button iconName="pt-icon-plus" text="Add Repository" />
					</div>
				</nav>
				<div className="content">
					<Tree contents={this.state.repositoryTree}>
					</Tree>
				</div>
			</div>
		);
	}
}
