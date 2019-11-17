import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import homeReducer from './home/reducer';

const reducer = combineReducers({
    home: homeReducer
});

/**
 * Initialize Store
 * @param preloadedState
 * @returns {Store, <AnyAction>}
 */
export const initializeStore = (preloadedState) => {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
};