import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../src/components/Signup.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Signup />);
});
describe('Signup Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
