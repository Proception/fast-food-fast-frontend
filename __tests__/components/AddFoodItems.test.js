import React from 'react';
import { shallow } from 'enzyme';
import AddFoodItems from '../../src/components/AddFoodItems.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<AddFoodItems/>);
});
describe('AddFoodItems Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
