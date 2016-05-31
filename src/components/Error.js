// *****************************************************************************
// ERROR 404 Page Not Found
// *****************************************************************************
/*
 * The generic 404 error page for when a component is not found
 */
import React, { Component } from 'react';

export default class Error extends Component {

    render() {
        return (
            <div>
                <h2>ERROR: 404 Page Not Found</h2>
                <div>Is this definitely where you planted the SEED?</div>
            </div>
        );
    }
}
