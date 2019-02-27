import React from 'react';
import { shallow } from 'enzyme';
import OrderHistory from '../../src/components/OrderHistory.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<OrderHistory />);
});
describe('OrderHistory Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
