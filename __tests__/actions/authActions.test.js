import React from 'react';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import {
  makeSignupRequest,
  completeSignupRequest,
  setToken,
  loginUser,
  signUpUser
} from "../../src/actions/authActions"
import {
  PREPARE_SIGNUP_REQUEST,
  COMPLETE_SIGNUP_REQUEST,
  SET_TOKEN
} from "../../src/constants/action-types";
import { basePath } from '../../src/utils/basePath';
import { userSignUp, userLogin } from '../../__mocks__/userMocks';
import {
  badRequestResponse, conflictResponse,
  noContentResponse, createdResponse,
  unauthorizedResponse, okResponse
} from '../../__mocks__/responseMocks';


const middlewares = [thunk]
const mockStore = configureStore(middlewares)
let initialState = {};
let store = mockStore(initialState);

describe('Test Actions', () => {
  beforeEach(() => {
    moxios.install();
    jest.setTimeout(5000);
    initialState = {};
    store = mockStore(initialState);
  });
  afterEach(() => moxios.uninstall());
  it('should dispatch PREPARE_SIGNUP_REQUEST Action', () => {
    // Dispatch the action
    store.dispatch(makeSignupRequest())

    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: PREPARE_SIGNUP_REQUEST }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch COMPLETE_SIGNUP_REQUEST Action', () => {
    // Dispatch the action
    store.dispatch(completeSignupRequest())

    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: COMPLETE_SIGNUP_REQUEST }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch SET_TOKEN Action', () => {
    const payload = {
      isAuthenticated: true,
      user: {
        email: "omasan.esimaje@gmail.com"
      }
    };
    // Dispatch the action
    store.dispatch(setToken(payload))

    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: SET_TOKEN, payload }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch loginUser Action with success', async (done) => {
    moxios.stubRequest(`${basePath}/auth/login`, { ...okResponse });

    // Dispatch the action
    await store.dispatch(loginUser(userLogin))

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    const expectedPayload = [{ "type": "PREPARE_SIGNUP_REQUEST" }, { "type": "COMPLETE_SIGNUP_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
  it('should dispatch loginUser Action with unauthorized', async (done) => {
    moxios.stubRequest(`${basePath}/auth/login`, { ...unauthorizedResponse });

    // Dispatch the action
    await store.dispatch(loginUser(userLogin))

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    const expectedPayload = [{ "type": "PREPARE_SIGNUP_REQUEST" }, { "type": "COMPLETE_SIGNUP_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
  it('should dispatch signUpUser Action with success', async (done) => {
    moxios.stubRequest(`${basePath}/auth/signup`, { ...createdResponse });

    // Dispatch the action
    await store.dispatch(signUpUser(userSignUp))

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    const expectedPayload = [{ "type": "PREPARE_SIGNUP_REQUEST" }, { "type": "COMPLETE_SIGNUP_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
  it('should dispatch signUpUser Action with success', async (done) => {
    moxios.stubRequest(`${basePath}/auth/signup`, { ...noContentResponse });

    // Dispatch the action
    await store.dispatch(signUpUser(userSignUp))

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    const expectedPayload = [{ "type": "PREPARE_SIGNUP_REQUEST" }, { "type": "COMPLETE_SIGNUP_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
  it('should dispatch signUpUser Action with conflict', async (done) => {
    moxios.stubRequest(`${basePath}/auth/signup`, { ...conflictResponse });

    // Dispatch the action
    await store.dispatch(signUpUser(userSignUp))

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    const expectedPayload = [{ "type": "PREPARE_SIGNUP_REQUEST" }, { "type": "COMPLETE_SIGNUP_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
  it('should dispatch signUpUser Action with bad request', async (done) => {
    moxios.stubRequest(`${basePath}/auth/signup`, { ...badRequestResponse });

    // Dispatch the action
    await store.dispatch(signUpUser(userSignUp))

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    const expectedPayload = [{ "type": "PREPARE_SIGNUP_REQUEST" }, { "type": "COMPLETE_SIGNUP_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
});
