import React from 'react';
import { Signup } from '../../src/components/Signup.jsx';
import {
  props,
  state,
  propsIsLoading,
  preventDefault,
  correctEventData,
  invalidEmailEventData,
  invalidNumberEventData,
  invalidPasswordEventData
} from '../../__mocks__/signUpMock';
import { correctEventEmail } from '../../__mocks__/loginMocks';

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
    sinon.spy(wrapper.instance(), 'handleFormSubmit');
    wrapper.instance().handleFormSubmit(preventDefault);
    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault));
  });
  it('calls handleInput(e)', () => {
    sinon.spy(wrapper.instance(), 'handleInput');
    wrapper.instance().handleInput(correctEventEmail);
    expect(wrapper.instance().handleInput.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(correctEventEmail));
  });
  it('calls handleInput(e) without validations', () => {
        
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    correctEventData.forEach(e => {
      const userInputEvent = {
        ...preventDefault,
        target: {
          name: Object.keys(e)[0],
          value: Object.values(e)[0]
        },
      }

      wrapper.instance().handleInput(userInputEvent);
      wrapper.instance().handleFormSubmit(preventDefault);
      expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault));
    });
    expect(wrapper.instance().handleInput.callCount)
      .toEqual(5);
  });
  it('calls handleInput(e) with email validations', () => {
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    invalidEmailEventData.forEach(e => {
      const userInputEvent = {
        ...preventDefault,
        target: {
          name: Object.keys(e)[0],
          value: Object.values(e)[0]
        },
      }
      wrapper.instance().handleInput(userInputEvent);
      wrapper.instance().handleFormSubmit(preventDefault);
      expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault));
    });
    expect(wrapper.instance().handleInput.callCount)
      .toEqual(5);
  });
  it('calls handleInput(e) with phone validations', () => {
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    invalidNumberEventData.forEach(e => {
      const userInputEvent = {
        ...preventDefault,
        target: {
          name: Object.keys(e)[0],
          value: Object.values(e)[0]
        },
      }
      wrapper.instance().handleInput(userInputEvent);
      wrapper.instance().handleFormSubmit(preventDefault);
      expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault));
    });
    expect(wrapper.instance().handleInput.callCount)
      .toEqual(5);
  });
  it('calls handleInput(e) with password validations', () => {
    sinon.spy(wrapper.instance(), 'handleInput');
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    invalidPasswordEventData.forEach(e => {
      const userInputEvent = {
        ...preventDefault,
        target: {
          name: Object.keys(e)[0],
          value: Object.values(e)[0]
        },
      }
      wrapper.instance().handleInput(userInputEvent);
      wrapper.instance().handleFormSubmit(preventDefault);
      expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault));
    });
    expect(wrapper.instance().handleInput.callCount)
      .toEqual(5);
  });
});
