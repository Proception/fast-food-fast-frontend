import React from 'react';
import { shallow } from 'enzyme';
import { Orders } from '../../src/components/Orders.jsx';
import {props, emptyOrderProps} from '../../__mocks__/orderCardsMock';

let wrapper;

describe('Orders Component', () => {
  it('should match snapshot', () => {
    wrapper = shallow(<Orders { ...props }/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    wrapper = shallow(<Orders { ...emptyOrderProps }/>);
    expect(wrapper).toMatchSnapshot();
  });
});
