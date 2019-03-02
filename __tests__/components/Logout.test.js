import React from 'react';
import { shallow } from 'enzyme';
import Logout from '../../src/components/Logout.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Logout />);
});
describe('Logout Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
