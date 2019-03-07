import React from 'react';
import { shallow } from 'enzyme';
import { OrderHistory } from '../../src/components/OrderHistory.jsx';
import {props, emptyOrderProps} from '../../__mocks__/orderCardsMock';

let wrapper;
describe('OrderHistory Component', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<OrderHistory {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    wrapper = shallow(<OrderHistory {...emptyOrderProps}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
