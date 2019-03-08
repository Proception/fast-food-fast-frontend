import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantMenu } from '../../src/components/RestaurantMenu.jsx';
import { props, emptyOrderProps } from '../../__mocks__/foodMenuMocks';
import { preventDefault } from '../../__mocks__/loginMocks';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<RestaurantMenu { ...props }/>);
});
describe('RestaurantMenu Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('calls handleClick(e)', () => {
    wrapper = shallow(<RestaurantMenu { ...props }/>);
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
  it('calls handleClick(e) guest user', () => {
    wrapper = shallow(<RestaurantMenu { ...emptyOrderProps }/>);
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
});
