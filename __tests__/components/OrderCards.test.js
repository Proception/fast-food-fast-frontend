import React from 'react';
import { shallow } from 'enzyme';
import OrderCards from '../../src/components/OrderCards.jsx';
import { props } from '../../__mocks__/orderCardsMock.js';

let wrapper;
beforeEach(() => {
  const { orders } = props;
  wrapper = shallow(<OrderCards orders={orders}/>);
});
describe('OrderCards Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
