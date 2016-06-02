// *****************************************************************************
// Application Routes
// *****************************************************************************

import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

// Import Components Files Here
import App from '../components/App.js';
import Error404 from '../components/Error.js';

var Routes = (
    <Route path="/" component={App}>
        <Route path="*" component={Error404} />
    </Route>
);

export default Routes;
