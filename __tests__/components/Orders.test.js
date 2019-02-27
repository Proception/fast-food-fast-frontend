import React from 'react';
import { shallow } from 'enzyme';
import Orders from '../../src/components/Orders.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Orders />);
});
describe('Orders Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
