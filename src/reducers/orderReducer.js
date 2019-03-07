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
  
  
  const initialState = {
    cart: [],
    cartTotalPrice: '',
    orders: [],
    userOrders: [],
    isLoading: false,
  };
  /**
   * @param {object} state
   * @param {object} action
   *  @returns {object} state, order
   */
  export default function (state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART: {
        const item = state.cart
          .find(item => item.id === action.payload.id);
        if (!item){
          return {
            ...state,
            cart: [
              ...state.cart,
              action.payload
            ]
          };
        }
        
        if (item){
          return state;
        }
      }
      case REMOVE_FROM_CART: {
        const { id } = action.payload;
        
        return {
          ...state,
          cart: state.cart.filter(item => !(item.id === id)),
        };
      }
      case UPDATE_ITEM_QUANTITY: {
        const { id, value } = action.payload;

        const itemIndex = state.cart.findIndex(item => item.id == id);

        const newArray = state.cart.slice(0);
        newArray[itemIndex].quantity = value; 
        return {
          ...state,
          cart: [...newArray],
        };
      }
      case GET_ORDERS: {
        return {
          ...state,
          orders: [ ...action.payload ],
        };
      }
      case GET_USER_ORDERS: {
        return {
          ...state,
          userOrders: [ ...action.payload ],
        };
      }
      case UPDATE_CART_TOTAL: {
        const cartTotal = state.cart.reduce((prev, current) => {
          return prev + (current.price * current.quantity);
        }, 0);
        return {
          ...state,
          cartTotalPrice: cartTotal
        }
      }
      case PREPARE_ORDER_REQUEST: {
        return {
          ...state,
          isLoading: true,
        }
      }
      case COMPLETE_ORDER_REQUEST: {
        return {
          ...state,
          isLoading: false
        }
      }
      default:
        return state;
    }
  }
  