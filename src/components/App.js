// *****************************************************************************
// Application Main Page
// *****************************************************************************
/*
 * The is the root component of our Single Page Application (SPA). It houses all
 * the inner components within it.
 */
import React, { Component } from 'react';

// Default Redux Setup Here
import { bindActionCreators } from 'redux';
import * as SampleActions from '../actions/SampleActions';
import { connect } from 'react-redux';

@connect(state => ({users: state.users}))
export default class App extends Component {

    componentDidMount() {
        console.log("Component Has Mounted");
        console.log(this);
        // This line here unhides the main content of the application once the
        // bundle.js file has been successfully loaded. This is the Point
        // in which the client side code takes over from the server side rendered
        // template
        document.body.className='';
    }

    render() {
        return (
            <div>
                <h1>Reach Universal Baby</h1>
                {/* START SUB COMPONENTS INJECTION */}
                {/* The Code Below is where we are inserting our subroute components */}
                { this.props.children }
                {/* END SUB COMPONENT INJECTION */}
            </div>
        );
    }
}
