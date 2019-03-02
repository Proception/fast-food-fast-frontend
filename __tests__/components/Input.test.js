import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../src/components/Forms/Input.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Input />);
});
describe('Input Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
