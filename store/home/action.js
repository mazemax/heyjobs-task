import { makeActionCreator } from '../util';

/**
 * Actions for Home page
 */
export const SET_JOB = 'SET_JOB';
export const RESET_JOB = 'RESET_JOB';

export const setJob = makeActionCreator(SET_JOB);
export const resetJob = makeActionCreator(RESET_JOB);
