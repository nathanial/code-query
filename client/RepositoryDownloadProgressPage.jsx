import React from 'react';

const pageStyle = {
	display: 'inline-block',
	padding: 50,
	position: 'relative'
};

const progressBarStyle = {
	width: 300,
	marginTop: 50,
	height: 20
};

const textOverlay = {
	position: 'absolute',
	width: 100,
	left: '50%',
	marginLeft: -50,
	bottom: 40,
	color: 'white',
 	'textShadow': `
		 1px 1px 0 #000,
	 -1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		 1px 1px 0 #000
	 `
};

export class RepositoryDownloadProgressPage extends React.Component {

	static propTypes = {
		progress: React.PropTypes.number.isRequired
	}

	render(){
		const progressWidth = this.props.progress + '%';
		return (
			<div className="pt-card pt-elevation-2" style={pageStyle}>
				<h4 style={{textAlign: 'center'}}>Repository Download Progress</h4>
				<div className="pt-progress-bar pt-intent-success" style={progressBarStyle}>
					<div className="pt-progress-meter" style={{width: progressWidth}}></div>
				</div>
				<p style={textOverlay}>
					<span>{this.props.repository.name}</span>
				</p>
			</div>
		);
	}
}
