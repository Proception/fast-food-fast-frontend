import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../src/components/Routes.jsx';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Routes/>);
});
describe('Routes Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
