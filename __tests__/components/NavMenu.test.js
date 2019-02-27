import React from 'react';
import { shallow } from 'enzyme';
import NavMenu from '../../src/components/Menus/NavMenu.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavMenu/>);
});
describe('NavMenu Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
