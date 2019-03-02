import React from 'react';
import { NavMenu } from '../../src/components/Menus/NavMenu.jsx';
import { shallow } from 'enzyme';
import { stateGuest, stateUser, token } from '../../__mocks__/navMenuMocks.js';
import mockLocalStorage from '../../__mocks__/mockLocalStorage';


describe('NavMenu Component', () => {
  it('should return guest menu', () => {
    const wrapper = shallow(<NavMenu { ...stateGuest }/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return auth menu', () => {
    global.localStorage = mockLocalStorage;
    localStorage.setItem('authToken', token);
    const wrapper = shallow(<NavMenu { ...stateUser }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
