// *****************************************************************************
// Sample Actions File
// *****************************************************************************
/*
 * CREDIT Milo Mordaunts - Tutorial on medium.com
 *
 * In Redux action creators are just functions that
 * return consistently formatted objects.
 */

import ACTION from '../baseActions';

export function createUser(id, firstName, lastName) {
    return {
        type: ACTION.CREATE_USER,
        id,
        firstName,
        lastName
    };
}
