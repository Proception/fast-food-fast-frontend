import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/Login.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Login />);
});
describe('Login Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
