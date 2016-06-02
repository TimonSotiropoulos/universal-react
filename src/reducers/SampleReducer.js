// *****************************************************************************
// Sample Reducers File
// *****************************************************************************
/*
 * CREDIT Milo Mordaunts - Tutorial on medium.com
 *
 * 1) The reducer has the signature (state, action) => newState.
 * 2) The reducer does not mutate the state it is given, but returns a new one
 *
 */

import Immutable from 'immutable';
import ACTION from '../baseActions';

// const defaultState = new Immutable.List();
const defaultState = {
    users: [
        {name: 'Timon'},
        {name: 'Chris'}
    ]
};

export default function sampleReducer(state = defaultState, action) {
    switch(action.type) {
        case ACTION.CREATE_USER:
            return state.concat(action.id);
        // Other Declarations would slide in here eg:
        // case ACTION.EDIT_USER:
        // return state.set(action.id, action.firstName, action.lastName);
        default:
            return state;
    }
}
