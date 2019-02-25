import React from 'react';
import { shallow } from 'enzyme';
import RestaurantMenu from '../../src/components/RestaurantMenu.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<RestaurantMenu/>);
});
describe('RestaurantMenu Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
