import React from 'react';
import { Login } from '../../src/components/Login.jsx';
import { props, state, propsIsLoading } from '../../__mocks__/loginMocks';

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
    const e1 = {
      preventDefault: ()=>{},
      target: {
        name: "email",
        value: "omasan.esimaje@gmail.com"
      },
    }
    
    sinon.spy(wrapper.instance(), 'handleInput');
    wrapper.instance().handleInput(e1);
    const e2 = {
      preventDefault: ()=>{},
      target: {
        name: "password",
        value: "pass"
      },
    }
    wrapper.instance().handleInput(e2);
    expect(wrapper.instance().handleInput.calledTwice)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(e1));
    expect(wrapper.instance().handleInput.calledWith(e2));
  });
  it('calls handleFormSubmit(e)', () => {
    const e = {
      preventDefault: ()=>{}
    }
    
    sinon.spy(wrapper.instance(), 'handleFormSubmit');
    wrapper.instance().handleFormSubmit(e);
    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleFormSubmit.calledWith(e));
  });
  it('calls handleFormSubmit(e) with validation error', () => {
    const e = {
      preventDefault: ()=>{}
    }
    const e1 = {
      preventDefault: ()=>{},
      target: {
        name: "email",
        value: "omasan.esimajegmail.com"
      },
    }
    
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');
    wrapper.instance().handleInput(e1);
    const e2 = {
      preventDefault: ()=>{},
      target: {
        name: "password",
        value: "pass"
      },
    }
    wrapper.instance().handleInput(e2);
    expect(wrapper.instance().handleInput.calledTwice)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(e1));
    expect(wrapper.instance().handleInput.calledWith(e2));

    wrapper.instance().handleFormSubmit(e);
    expect(wrapper.instance().handleFormSubmit.calledWith(e));
    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);

  });
  it('calls handleFormSubmit(e) without validation error', () => {
    const e = {
      preventDefault: ()=>{}
    }
    const e1 = {
      preventDefault: ()=>{},
      target: {
        name: "email",
        value: "omasan.esimaje@gmail.com"
      },
    }
    
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');
    wrapper.instance().handleInput(e1);
    const e2 = {
      preventDefault: ()=>{},
      target: {
        name: "password",
        value: "pass"
      },
    }
    wrapper.instance().handleInput(e2);
    expect(wrapper.instance().handleInput.calledTwice)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(e1));
    expect(wrapper.instance().handleInput.calledWith(e2));

    wrapper.instance().handleFormSubmit(e);
    expect(wrapper.instance().handleFormSubmit.calledWith(e));
    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);
  });
});
