import { signUpUser } from '../src/actions/authActions';
import { preventDefault } from './userMocks';

const props = {
    signUpUser,
    auth: {
        isLoading: false,
    },
  };
  const propsIsLoading = {
    signUpUser,
    auth: {
        isLoading: true,
    },
  };
  const state = {
    newUser: {
        name: 'Ben',
        email: 'ben@gmail.com',
        pnumber: '07062257273',
        password: 'pass',
        cpassword: 'pass',
    }
  };
  const correctEventData = [
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

  const invalidEmailEventData = [
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
  
  const invalidNumberEventData = [
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

  const invalidPasswordEventData = [
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
  export {
    props,
    state,
    propsIsLoading,
    preventDefault,
    correctEventData,
    invalidEmailEventData,
    invalidNumberEventData,
    invalidPasswordEventData 
  };