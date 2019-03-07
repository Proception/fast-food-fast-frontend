import React from 'react';
import axios from 'axios';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {
  loginUser,
} from '../../src/actions/authActions.js'
import {
    addItemToCart,
    updateCartTotal,
    removeItemFromCart,
    updateItemQuantity,
    makeOrderRequest,
    getOrderRequest,
    getUserOrder,
    completeOrderRequest,
    makeOrder,
    getOrders,
    getUserOrders
    } from '../../src/actions/orderActions.js';
import {
    ADD_TO_CART,
    UPDATE_CART_TOTAL,
    REMOVE_FROM_CART,
    UPDATE_ITEM_QUANTITY,
    GET_ORDERS,
    GET_USER_ORDERS,
    PREPARE_ORDER_REQUEST,
    COMPLETE_ORDER_REQUEST
    } from '../../src/constants/action-types.js';
import { basePath } from '../../src/utils/basePath.js';
import { okResponse } from '../../__mocks__/responseMocks.js';
import { token } from '../../__mocks__/navMenuMocks.js';
import mockLocalStorage from '../../__mocks__/mockLocalStorage.js';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
let initialState = {};
let store = mockStore(initialState);
window.localStorage = mockLocalStorage;
localStorage.setItem('authToken', token);

const setHeader = () => {
  return { 
      headers: {
      "x-access-token": `${token}`
      }
  }
};
const instance = axios.create(setHeader());



describe('Test Actions', () => {
  beforeEach(() => {
      moxios.install(instance);
      jest.setTimeout(20000);
      initialState = {};
      store = mockStore(initialState);
  });
  afterEach(() => moxios.uninstall(instance));
  it('should dispatch ADD_TO_CART Action', () => {
    const cart= {
      id: 1,
    }
    // Dispatch the action
    store.dispatch(addItemToCart(cart));
    
    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: ADD_TO_CART, payload: cart }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch UPDATE_CART_TOTAL Action', () => {
    // Dispatch the action
    store.dispatch(updateCartTotal());
    
    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: UPDATE_CART_TOTAL }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch REMOVE_FROM_CART Action', () => {
    const cart = {
      id: 1
    }
    // Dispatch the action
    store.dispatch(removeItemFromCart(cart));
    
    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: REMOVE_FROM_CART, payload: cart }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch UPDATE_ITEM_QUANTITY Action', () => {
    const cart = {
      id: 1
    }
    // Dispatch the action
    store.dispatch(updateItemQuantity(cart));
    
    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: UPDATE_ITEM_QUANTITY, payload: cart }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch PREPARE_ORDER_REQUEST Action', () => {
    // Dispatch the action
    store.dispatch(makeOrderRequest());
    
    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: PREPARE_ORDER_REQUEST }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch COMPLETE_ORDER_REQUEST Action', () => {
    // Dispatch the action
    store.dispatch(completeOrderRequest());
    
    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: COMPLETE_ORDER_REQUEST }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch GET_ORDERS Action', () => {
    const orders = [{
      id: 1
    },];
    // Dispatch the action
    store.dispatch(getOrderRequest(orders));
    
    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: GET_ORDERS, payload: orders }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch GET_USER_ORDERS Action', () => {
    const orders = [{
      id: 1
    },];
    // Dispatch the action
    store.dispatch(getUserOrder(orders));
    
    // Test if your store dispatched the expected actions
    const actions = store.getActions()

    const expectedPayload = { type: GET_USER_ORDERS, payload: orders }
    expect(actions).toEqual([expectedPayload])
  })
  it('should dispatch loginUser Action with success', async (done) => {
    moxios.stubRequest(`${basePath}/auth/login`, { ...okResponse });

    // Dispatch the action
    await store.dispatch(loginUser({
      email: "omasan.test@gmail.com",
      password: "test"
  }))

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    const expectedPayload = [{ "type": "PREPARE_SIGNUP_REQUEST" }, { "type": "COMPLETE_SIGNUP_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
  it('should dispatch makeOrder Action with success', async (done) => {
    moxios.stubRequest(`${basePath}/orders`, { response: {
        data: {
          code: 201,
          status: 'Created',
          messages: 'User signed up in successfully',
          data: 'fdfdf'
        }
      }
    });
    const orderData = {
      id: 1
    }

    // Dispatch the action
    await store.dispatch(makeOrder(orderData));

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    console.log('eweewe', actions );

    const expectedPayload = [{ "type": "PREPARE_ORDER_REQUEST" }, { "type": "COMPLETE_ORDER_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
  it('should dispatch makeOrder Action with failure', async (done) => {
    moxios.stubRequest(`${basePath}/orders`, { response: {
        data: {
          code: 400,
          status: 'Bad Request',
        }
      }
    });
    const orderData = {
    }

    // Dispatch the action
    await store.dispatch(makeOrder(orderData));

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    console.log('eweewe', actions );

    const expectedPayload = [{ "type": "PREPARE_ORDER_REQUEST" }, { "type": "COMPLETE_ORDER_REQUEST" }];
    expect(actions).toEqual(expectedPayload)
    done();
  })
  it('should dispatch getOrder Action with success', async (done) => {
    moxios.stubRequest(`${basePath}/orders`, { response: {
        data: {
          code: 200,
          status: 'Ok',
        }
      }
    });

    // Dispatch the action
    await store.dispatch(getOrders());

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    expect(actions[0].type).toEqual("GET_ORDERS")
    done();
  })
  it('should dispatch getUserOrder Action with success', async (done) => {
    moxios.stubRequest(`${basePath}/orders/user`, { response: {
        data: {
          code: 200,
          status: 'Ok',
        }
      }
    });

    // Dispatch the action
    await store.dispatch(getUserOrders());

    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const state = store.getState();

    expect(actions[0].type).toEqual("GET_USER_ORDERS")
    done();
  })
});