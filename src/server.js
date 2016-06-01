// *****************************************************************************
// The Server
// *****************************************************************************
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { match, RoutingContext } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import * as reducers from 'reducers';
import express from 'express';
import nunjucks from 'nunjucks';

// Routes
import routes from './routes/routes.js';

// Express Setup
const app = express();
// Add Nunjucks Templating
nunjucks.configure('./src/views', {
    autoescape: false,
    express: app
});

app.use('/', express.static(__dirname));

app.set('port', (process.env.PORT || 3000))

app.get('*', (req, res) => {
    const location = createLocation(req.url);
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);

    match({routes, location: req.url }, (error, redirectLocation, renderProps) => {

        const reactMarkup = ReactDOMServer.renderToStaticMarkup(
            <Provider store={store}>
                <RoutingContext {...renderProps}/>
            </Provider>
        )

        const initialState = store.getState();

        res.locals.reactMarkup = reactMarkup;

        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            // WE DID IT SEND THAT BAD FOOL BACK!
            res.status(200).render('index.html');
        } else {
            // The route was not found :(
            res.status(404).render('index.html');
        }
    });
});

app.listen(app.get('port'));

console.info('==> Server is listening in ' + process.env.NODE_ENV + ' mode')
console.info('==> Go to http://localhost:%s', app.get('port'))
