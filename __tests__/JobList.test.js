/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import JobList from '../components/JobList';
import { jobs } from '../jobData';

jest.mock('next/link', () => {
    return ({children}) => {
        return children;
    }
});

const initialState = {
    home: {
        id: '0',
        title: '',
        description: '',
        employmentType: ''
    }
};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('Testing JobList component', () => {
    test('Should trigger SET_JOB action in redux store correctly', async () => {
        const props = {
            data: jobs
        };
        const component = mount(
            <Provider store={store}>
                <JobList {...props} />
            </Provider>
        );

        await component.find('a').first().simulate('click');
        expect(store.getActions()).toMatchSnapshot();
    });
});
