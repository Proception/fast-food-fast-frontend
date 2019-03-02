import {
  PREPARE_SIGNUP_REQUEST, COMPLETE_SIGNUP_REQUEST, SET_TOKEN
} from '../constants/action-types';


const initialState = {
  data: [],
  auth: {
    isAuthenticated: false,
    user: {}
  },
  isLoading: false,
};
/**
 * @param {object} state
 * @param {object} action
 *  @returns {object} state, user
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case PREPARE_SIGNUP_REQUEST:
      return {
        isLoading: true,
      };
    case COMPLETE_SIGNUP_REQUEST:
      console.log('completing');
      console.log('Checking state: ', state.auth);
      return {
        isLoading: false,
      };
    case SET_TOKEN:
      console.log('calling set token');
      console.log('Token payload : ', action.payload);
      return {
          isAuthenticated: true,
          user: action.payload
      };
    default:
      return state;
  }
}
