import { isEmpty } from 'lodash';

/**
 * Creates an action
 * @param type
 * @param argNames
 * @returns {function(...[*]): {type: *}}
 */
export function makeActionCreator(type, ...argNames) {
    return function(...args) {
        const action = { type };
        argNames = isEmpty(argNames) ? ['payload'] : argNames;
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    };
}

/**
 * Creates a reducer
 * @param initialState
 * @param handlers
 * @returns {reducer}
 */
export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action = {}) {
        if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}
