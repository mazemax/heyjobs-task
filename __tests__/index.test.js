/* eslint-env jest */

import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Home from '../pages/index.js';
import { jobs } from '../jobData';

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

describe('Testing Home page', () => {
    test('Should render Home page correctly', () => {
        const props = {
            data: jobs,
            status: 200
        };
        const component = renderer.create(
            <Provider store={store}>
                <Home {...props} />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should get Home page data correctly', async () => {
        const { data, status } = await Home.getInitialProps({store});

        expect(data.length).toBe(2);
        expect(status).toBe(200);
    });

    test('Should render No Jobs case correctly', () => {
        const props = {
            data: [],
            status: 400
        };
        const component = renderer.create(
            <Provider store={store}>
                <Home {...props} />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});