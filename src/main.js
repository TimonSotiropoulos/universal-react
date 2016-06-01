// *****************************************************************************
// Main Application Entry Point
// *****************************************************************************
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Routes defined here!
import routes from './routes/routes.js';

// Import styling here
require('./scss/main.scss');

const Routes = (
  <Router history={browserHistory}>
    { routes }
  </Router>
)


// App Rendering Here!
const mountNode = document.getElementById('app');
render(Routes, app);
