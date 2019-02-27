import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../src/components/NotFound.jsx';

let wrapper;
beforeEach(() => {
  const path = { pathname: 'wrongroute' };
  wrapper = shallow(<NotFound location={path}/>);
});
describe('NotFound Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
