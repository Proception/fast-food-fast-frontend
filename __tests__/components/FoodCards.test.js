import React from 'react';
import { shallow } from 'enzyme';
import FoodCards from '../../src/components/FoodCards.jsx';
import props from '../../__mocks__/foodCardsMock';

let wrapper;
beforeEach(() => {
  const { menu } = props;
  wrapper = shallow(<FoodCards menu={menu}/>);
});
describe('FoodCards Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
