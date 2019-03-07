import React from 'react';
import { shallow } from 'enzyme';
import CheckoutCards from '../../src/components/CheckoutCards.jsx';
import { props }  from '../../__mocks__/cartCardsMock.js';

let wrapper;
beforeEach(() => {
  const { item } = props;
  wrapper = shallow(<CheckoutCards item={item}/>);
});
describe('CheckoutCards Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
