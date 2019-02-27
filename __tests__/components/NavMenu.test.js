import React from 'react';
import { NavMenu } from '../../src/components/Menus/NavMenu.jsx';
import { shallow } from 'enzyme';
import { stateGuest, stateUser } from '../../__mocks__/navMenuMocks.js';

describe('NavMenu Component', () => {
  it('should return guest menu', () => {
    const wrapper = shallow(<NavMenu { ...stateGuest }/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return guest menu', () => {
    const wrapper = shallow(<NavMenu { ...stateUser }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
