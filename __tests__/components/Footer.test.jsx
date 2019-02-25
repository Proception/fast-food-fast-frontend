import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/components/Menus/Footer.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Footer/>);
});
describe('Footer Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
