// *****************************************************************************
// Main Application Entry Point
// *****************************************************************************
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import { fromJS } from 'immutable';
import { Router, browserHistory } from 'react-router';

// Routes defined here!
import routes from './routes/routes.js';

// Import styling here
require('./scss/main.scss');

// Get our Initial State from our server
var initialState = window.__INITIAL_STATE__;

// Transform the state into Immutable.js collections,
// But leave top level keys untouched for Redux.
if (initialState) {
    Object.keys(initialState).forEach((key) => {
        initialState[key] = fromJS(initialState[key]);
    });
}

const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState);

const Application = (
    <Provider store={store}>
        <Router history={browserHistory}>
            { routes }
        </Router>
    </Provider>
)

// App Rendering Here!
const mountNode = document.getElementById('app');
render(Application, mountNode);
