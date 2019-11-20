import { createReducer } from '../util';
import {
    SET_JOB,
    RESET_JOB
} from './action';

/**
 * Initial State at Home page
 * @type {{employmentType: string, description: string, id: number, title: string}}
 */
const initialState = {
    id: '0',
    title: '',
    description: '',
    employmentType: ''
};

/**
 * Reducers for Home page
 */
export default createReducer(initialState, {
    [SET_JOB]: (state, action) => {
        return {
            ...state,
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            employmentType: action.payload.employment_type
        };
    },
    [RESET_JOB]: (state) => {
        return {
            ...state,
            id: initialState.id,
            title: initialState.title,
            description: initialState.description,
            employmentType: initialState.employmentType
        };
    }
});
