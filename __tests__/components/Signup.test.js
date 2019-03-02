import React from 'react';
import { Signup } from '../../src/components/Signup.jsx';
import { props, state, propsIsLoading } from '../../__mocks__/loginMocks';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Signup state={ state } {...props} />);
});
describe('Signup Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render signup with isLoading true', () => {
    const  wrapper = shallow(<Signup state={ state } {...propsIsLoading} />);
    expect(wrapper).toMatchSnapshot();
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
  it('calls handleInput(e)', () => {
    const e1 = {
      preventDefault: ()=>{},
      target: {
        name: "email",
        value: "omasan.esimaje@gmail.com"
      },
    }
    
    sinon.spy(wrapper.instance(), 'handleInput');
    wrapper.instance().handleInput(e1);
    expect(wrapper.instance().handleInput.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(e1));
  });
  it('calls handleInput(e) without validations', () => {
    const data = [
      { 
        name: 'Ben',
      },
      {
        email: 'ben@gmail.com',
      },
      {
        pnumber: '07062257273',
      },
      {

        password: 'pass',
      },
      {
        cpassword: 'pass',
      },
    ]
    
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    data.forEach(e => {
      const e1 = {
        preventDefault: e.preventDefault,
        target: {
          name: Object.keys(e)[0],
          value: Object.values(e)[0]
        },
      }
      const event = {
        preventDefault: ()=>{}
      }
      wrapper.instance().handleInput(e1);
      wrapper.instance().handleFormSubmit(event);
      expect(wrapper.instance().handleFormSubmit.calledWith(event));
    });
    expect(wrapper.instance().handleInput.callCount)
      .toEqual(5);
  });
  it('calls handleInput(e) with email validations', () => {
    const data = [
      { 
        name: 'Ben',
      },
      {
        email: 'bengmail.com',
      },
      {
        pnumber: '07062257273',
      },
      {

        password: 'pass',
      },
      {
        cpassword: 'pass',
      },
    ]
    
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    data.forEach(e => {
      const e1 = {
        preventDefault: e.preventDefault,
        target: {
          name: Object.keys(e)[0],
          value: Object.values(e)[0]
        },
      }
      const event = {
        preventDefault: ()=>{}
      }
      wrapper.instance().handleInput(e1);
      wrapper.instance().handleFormSubmit(event);
      expect(wrapper.instance().handleFormSubmit.calledWith(event));
    });
    expect(wrapper.instance().handleInput.callCount)
      .toEqual(5);
  });
  it('calls handleInput(e) with phone validations', () => {
    const data = [
      { 
        name: 'Ben',
      },
      {
        email: 'ben@gmail.com',
      },
      {
        pnumber: 'ererererr',
      },
      {

        password: 'pass',
      },
      {
        cpassword: 'pass',
      },
    ]
    
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    data.forEach(e => {
      const e1 = {
        preventDefault: e.preventDefault,
        target: {
          name: Object.keys(e)[0],
          value: Object.values(e)[0]
        },
      }
      const event = {
        preventDefault: ()=>{}
      }
      wrapper.instance().handleInput(e1);
      wrapper.instance().handleFormSubmit(event);
      expect(wrapper.instance().handleFormSubmit.calledWith(event));
    });
    expect(wrapper.instance().handleInput.callCount)
      .toEqual(5);
  });
  it('calls handleInput(e) with password validations', () => {
    const data = [
      { 
        name: 'Ben',
      },
      {
        email: 'ben@gmail.com',
      },
      {
        pnumber: '07062257273',
      },
      {

        password: 'pass',
      },
      {
        cpassword: 'passs',
      },
    ]
    
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    data.forEach(e => {
      const e1 = {
        preventDefault: e.preventDefault,
        target: {
          name: Object.keys(e)[0],
          value: Object.values(e)[0]
        },
      }
      const event = {
        preventDefault: ()=>{}
      }
      wrapper.instance().handleInput(e1);
      wrapper.instance().handleFormSubmit(event);
      expect(wrapper.instance().handleFormSubmit.calledWith(event));
    });
    expect(wrapper.instance().handleInput.callCount)
      .toEqual(5);
  });
});
