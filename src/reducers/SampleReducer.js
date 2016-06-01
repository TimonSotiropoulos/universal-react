// *****************************************************************************
// Sample Reducers File
// *****************************************************************************
/*
 * CREDIT Milo Mordaunts - Tutorial on medium.com
 *
 * In Redux action creators are just functions that
 * return consistently formatted objects.
 */

import Immutable from 'immutable';
import ACTION from '../baseActions';

const defaultState = new Immutable.List();

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
