import React from 'react';
import { shallow } from 'enzyme';
import RestaurantControls from '../../src/components/RestaurantControls.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<RestaurantControls/>);
});
describe('RestaurantControls Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
