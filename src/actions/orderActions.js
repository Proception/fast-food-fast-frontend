import axios from 'axios';
import { basePath } from '../utils/basePath';
import setHeader from '../utils/setHeader';
import {
    ADD_TO_CART,
    UPDATE_CART_TOTAL,
    REMOVE_FROM_CART,
    UPDATE_ITEM_QUANTITY,
    GET_ORDERS,
    GET_USER_ORDERS,
    PREPARE_ORDER_REQUEST,
    COMPLETE_ORDER_REQUEST
    } from '../constants/action-types';
import Notify from '../utils/Notify';

const instance = axios.create(setHeader());

export const addItemToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
});

export const updateCartTotal = () => ({
  type: UPDATE_CART_TOTAL,
});


export const removeItemFromCart = (payload) => ({
    type: REMOVE_FROM_CART,
    payload
});

export const updateItemQuantity = (payload) => ({
    type: UPDATE_ITEM_QUANTITY,
    payload
});

export const makeOrderRequest = () => ({
  type: PREPARE_ORDER_REQUEST
});

export const getOrderRequest = (payload) => ({
  type: GET_ORDERS,
  payload
});

export const getUserOrder = (payload) => ({
  type: GET_USER_ORDERS,
  payload
})

export const completeOrderRequest = () => ({
  type: COMPLETE_ORDER_REQUEST
});

const handleOrderSuccessResponse = (response, dispatch) => {
  const { code, messages, data } = response.data;
  if (code === 201) {
    Notify.notifySuccess(`${messages}`);
    window.location.reload();
    dispatch(completeOrderRequest());
  }
}

const handleOrderErrorResponse = (error, dispatch) => {
  const { code, messages } =  error.response.data;
  if (code > 399) {
    Notify.notifyError(`${messages}`);
    dispatch(completeOrderRequest());
  }
}

export const makeOrder = (data) => async (dispatch) => {
  const setHeader = () => {
    return { 
        headers: {
        "x-access-token": `${global.localStorage.getItem('authToken')}`
        }
    }
  };
  const instanc = axios.create(setHeader());
  dispatch(makeOrderRequest());
  let res;
    try {
      res = await instanc.post(`${basePath}/orders`, data);
      handleOrderSuccessResponse(res, dispatch);
    } catch (error) {
      handleOrderErrorResponse(error, dispatch);
    }
  }
  
export const getOrders = () => async (dispatch) => {
  const setHeader = () => {
    return { 
        headers: {
        "x-access-token": `${global.localStorage.getItem('authToken')}`
        }
    }
  };
  const instanc = axios.create(setHeader());
  let res;
    try {
      res = await instanc.get(`${basePath}/orders`);
      const { data } = res.data;
      dispatch(getOrderRequest(data));
      handleOrderSuccessResponse(res, dispatch);
    } catch (error) {
      handleOrderErrorResponse(error, dispatch);
    }
  }
export const getUserOrders = () => async (dispatch) => {
  const setHeader = () => {
    return { 
        headers: {
        "x-access-token": `${global.localStorage.getItem('authToken')}`
        }
    }
  };
  const instanc = axios.create(setHeader());
  let res;
    try {
      res = await instanc.get(`${basePath}/orders/user`);
      const { data } = res.data;
      dispatch(getUserOrder(data));
      handleOrderSuccessResponse(res, dispatch);
    } catch (error) {
      handleOrderErrorResponse(error, dispatch);
    }
  }