import React from 'react';
import { shallow } from 'enzyme';
import OrderControls from '../../src/components/OrderControls.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<OrderControls />);
});
describe('OrderControls Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
