import React from 'react';
import { shallow } from 'enzyme';
import OrderHistoryCards from '../../src/components/OrderHistoryCards.jsx';
import props from '../../__mocks__/orderCardsMock.js';

let wrapper;
beforeEach(() => {
  const { orders } = props;
  wrapper = shallow(<OrderHistoryCards orders={orders}/>);
});
describe('OrderHistoryCards Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
