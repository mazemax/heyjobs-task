/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Detail from '../pages/detail.js';

const mockStore = configureStore();
const initialState = {
    home: {
        id: '1',
        title: 'Frontend Developer',
        description: 'Comfortable with modern JS stack, experience with React.',
        employmentType: 'full_time'
    }
};
const store = mockStore(initialState);

describe('Testing Detail page', () => {
    test('Should render Full time employment Detail page correctly', () => {
        const props = {
            id: '1',
            title: 'Frontend Developer',
            description: 'Comfortable with modern JS stack, experience with React.',
            employmentType: 'full_time'
        };

        const component = renderer.create(
            <Detail {...props} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should render Part time employment Detail page correctly', () => {
        const props = {
            id: '1',
            title: 'Frontend Developer',
            description: 'Comfortable with modern JS stack, experience with React.',
            employmentType: 'part_time'
        };

        const component = renderer.create(
            <Detail {...props} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should get Detail page data correctly', async () => {
        const result = await Detail.getInitialProps({store});
        const { id, title, description, employmentType } = result;

        expect(id).not.toBe('0');
        expect(title).not.toBe('');
        expect(description).not.toBe('');
        expect(employmentType).not.toBe('');

        expect(id).not.toBeNull();
        expect(id).not.toBeUndefined();
        expect(id).toBeTruthy();

        expect(title).not.toBeNull();
        expect(title).not.toBeUndefined();
        expect(title).toBeTruthy();

        expect(description).not.toBeNull();
        expect(description).not.toBeUndefined();
        expect(description).toBeTruthy();

        expect(employmentType).not.toBeNull();
        expect(employmentType).not.toBeUndefined();
        expect(employmentType).toBeTruthy();
    });

    test('Should get Detail page data correctly, when store is empty', async () => {
        const emptyState = {
            home: {
            }
        };
        const emptyStore = mockStore(emptyState);

        const result = await Detail.getInitialProps({store: emptyStore});
        const { id, title, description, employmentType } = result;

        expect(title).not.toBe('');
        expect(description).not.toBe('');
        expect(employmentType).not.toBe('');

        expect(id).not.toBeNull();
        expect(id).not.toBeUndefined();
        expect(id).toBeTruthy();

        expect(title).not.toBeNull();
        expect(title).not.toBeUndefined();
        expect(title).toBeTruthy();

        expect(description).not.toBeNull();
        expect(description).not.toBeUndefined();
        expect(description).toBeTruthy();

        expect(employmentType).not.toBeNull();
        expect(employmentType).not.toBeUndefined();
        expect(employmentType).toBeTruthy();

        expect(id).toBe('0');
        expect(title).toBe('Job Title');
        expect(description).toBe('No description');
        expect(employmentType).toBe('Full time');
    });
});