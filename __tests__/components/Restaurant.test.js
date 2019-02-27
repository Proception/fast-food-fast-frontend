import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from '../../src/components/Restaurant.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Restaurant/>);
});
describe('Restaurant Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
