/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';

import Nav from '../components/Nav';

describe('Testing Nav component', () => {
    test('When a user clicks on Drawer, the sideBar should have Home option', async () => {
        const component = mount(
            <Nav />
        );
        await component.find('button').simulate('click');
        const sideMenuItemText = component.find('a .MuiTypography-root').text();
        expect(sideMenuItemText).toEqual('Home');
    });
});
