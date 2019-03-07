import React from 'react';
import { shallow } from 'enzyme';
import FoodCards from '../../src/components/FoodCards.jsx';
import props from '../../__mocks__/foodCardsMock';

let wrapper;
beforeEach(() => {
  const { item } = props;
  wrapper = shallow(<FoodCards item={item}/>);
});
describe('FoodCards Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
