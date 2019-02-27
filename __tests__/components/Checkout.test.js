import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../../src/components/Checkout.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Checkout/>);
});
describe('Checkout Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
