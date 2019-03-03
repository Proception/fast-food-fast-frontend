import React from 'react';
import { Login } from '../../src/components/Login.jsx';
import { props,
  state,
  propsIsLoading,
  preventDefault,
  correctEventEmail,
  correctEventPass,
  wrongEventEmail

} from '../../__mocks__/loginMocks';

let wrapper;
describe('Login Component', () => {
  beforeEach(() => {
    wrapper = shallow(<Login state={ state } {...props} />);
  });
  it('should render login', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render login with isLoading true', () => {
    const  wrapper = shallow(<Login state={ state } {...propsIsLoading} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls handleInput(e) with email', () => {
    sinon.spy(wrapper.instance(), 'handleInput');

    wrapper.instance().handleInput(correctEventEmail);
    wrapper.instance().handleInput(correctEventPass);

    expect(wrapper.instance().handleInput.calledTwice)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(correctEventEmail));
    expect(wrapper.instance().handleInput.calledWith(correctEventPass));
  });
  it('calls handleFormSubmit(e)', () => {
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    wrapper.instance().handleFormSubmit(preventDefault);

    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault));
  });
  it('calls handleFormSubmit(e) with validation error', () => {
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    wrapper.instance().handleInput(wrongEventEmail);
    wrapper.instance().handleInput(correctEventPass);

    expect(wrapper.instance().handleInput.calledTwice)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(wrongEventEmail));
    expect(wrapper.instance().handleInput.calledWith(correctEventPass));

    wrapper.instance().handleFormSubmit(preventDefault);

    expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault));
    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);

  });
  it('calls handleFormSubmit(e) without validation error', () => {
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    wrapper.instance().handleInput(correctEventEmail);
    wrapper.instance().handleInput(correctEventPass);

    expect(wrapper.instance().handleInput.calledTwice)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(correctEventEmail));
    expect(wrapper.instance().handleInput.calledWith(correctEventPass));

    wrapper.instance().handleFormSubmit(preventDefault);

    expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault));
    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);
  });
});
