import axios from 'axios';
import {
  PREPARE_SIGNUP_REQUEST, COMPLETE_SIGNUP_REQUEST, SET_TOKEN
} from '../constants/action-types';
import Notify from '../utils/Notify';
import { basePath } from '../utils/basePath';

export const makeSignupRequest = () => ({
  type: PREPARE_SIGNUP_REQUEST
});

export const completeSignupRequest = () => ({
  type: COMPLETE_SIGNUP_REQUEST
});

export const setToken = (payload) => ({
  type: SET_TOKEN,
  payload,
})

export const signUpUser = userData => async (dispatch) => {
  const { name, email, password, pnumber, cpassword } = userData;

  const signupData = {
    email: email,
    fullName: name,
    phoneNo: pnumber,
    password: password,
    cpassword: cpassword,
  }

  try {
    dispatch(makeSignupRequest());
    const res = await axios.post(`${basePath}/auth/signup`, signupData);
    const { code, data } = res.data;

    if (code === 201) {
      Notify.notifySuccess(`${email} has successfully been registered`);
      dispatch(completeSignupRequest());

      localStorage.setItem('authToken', data);

      window.location.replace('/');
    } else {
      Notify.notifySuccess(`${email} has successfully registered`);
      dispatch(completeSignupRequest());
    }
  } catch (error) {
    const { code } =  error.response.data;
    if (code === 409) {
      Notify.notifyError(`${email} exists on the platform`);
      dispatch(completeSignupRequest());
    }else{
      Notify.notifyError(`There was an error registering ${name}, please try again`);
      dispatch(completeSignupRequest());
    }
   
  }
}


export const loginUser = loginData => async (dispatch) => {

  try {
    dispatch(makeSignupRequest());
    const res = await axios.post(`${basePath}/auth/login`, loginData);
    const { code, messages, data } = res.data;

    if (code === 200) {
      Notify.notifySuccess(`${messages}`);
      localStorage.setItem('authToken', data);
      window.location.replace('/');
      dispatch(completeSignupRequest());
    }
  } catch (error) {
    const { code, messages } =  error.response.data;
    if (code > 399) {
      Notify.notifyError(`${messages}`);
      dispatch(completeSignupRequest());
    }
  }
}