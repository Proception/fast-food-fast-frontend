import React from 'react';
import { shallow } from 'enzyme';
import { Checkout } from '../../src/components/Checkout.jsx';
import { props, emptyCartProps } from '../../__mocks__/cartCardsMock';
import {   preventDefault } from '../../__mocks__/loginMocks';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Checkout { ...props }/>);
});
describe('Checkout Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('calls handleClick(e)', () => {
    const data = {
      "id": 1,
      "imageUrl": 'yam',
      "price": 500,
      "title": "Boiled Yam",
    };
    sinon.spy(wrapper.instance(), 'handleClick');

    wrapper.instance().handleClick(preventDefault, data);

    expect(wrapper.instance().handleClick.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleClick.calledWith(preventDefault, data));
  });
  it('calls onChange(e)', () => {
    const data = {
      "id": 1,
      "imageUrl": 'yam',
      "price": 500,
      "title": "Boiled Yam",
    };
    const e = {
      target: {
        id: 1,
        value: 10,
      }
    } 
    sinon.spy(wrapper.instance(), 'onChange');

    wrapper.instance().onChange(e, data);

    expect(wrapper.instance().onChange.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().onChange.calledWith(e, data));
  });
  it('calls handleOrder(e)', () => {
    const cart = [{
      "id": 1,
      "imageUrl": 'yam',
      "price": 500,
      "title": "Boiled Yam",
    },
    {
      "id": 2,
      "imageUrl": 'rice',
      "price": 900,
      "title": "Rice",
    }];
    const totalCost = 500;
    sinon.spy(wrapper.instance(), 'handleOrder');

    wrapper.instance().handleOrder(preventDefault, cart, totalCost);

    expect(wrapper.instance().handleOrder.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleOrder.calledWith(preventDefault, cart, totalCost));
  });
  it('calls handleOrder(e) empty cart', () => {
    wrapper = shallow(<Checkout { ...emptyCartProps }/>);
    sinon.spy(wrapper.instance(), 'handleOrder');

    wrapper.instance().handleOrder();

    expect(wrapper.instance().handleOrder.calledOnce)
      .toEqual(true);
  });
  it('calls generateCart empty cart', () => {
    wrapper = shallow(<Checkout { ...emptyCartProps }/>);
    sinon.spy(wrapper.instance(), 'generateCart');

    wrapper.instance().generateCart();

    expect(wrapper.instance().generateCart.calledOnce)
      .toEqual(true);
  });

});
