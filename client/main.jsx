import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './App.jsx';
import '@blueprintjs/core/dist/blueprint.css';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
