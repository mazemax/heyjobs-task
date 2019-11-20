/* eslint-env jest */

import { makeActionCreator, createReducer } from '../store/util';

describe('Testing Util functions', () => {
    test('When a new action is created', async () => {
        const ACTION_TEST = 'ACTION_TEST';
        const actionFn = makeActionCreator(ACTION_TEST, ['payload']);

        const action = actionFn('argName1');
        expect(action).toMatchSnapshot();
    });

    test('When a new reducer is created', async () => {
        const ACTION_TEST = 'ACTION_TEST';
        const initialState = {
            argName1: 'argName1'
        };
        const actionObject = {
            type: 'ACTION_TEST',
            payload: 'argName2'
        };

        const reducerFn = createReducer(initialState, {
            [ACTION_TEST]: (state, action) => {
                return {
                    ...state,
                    argName1: action.payload.argName1
                };
            }
        });

        const reducerResult = reducerFn.call(initialState, actionObject);
        expect(reducerResult).toMatchSnapshot();
    });
});
