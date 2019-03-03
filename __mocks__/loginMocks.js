import { loginUser } from '../src/actions/authActions';
import { preventDefault } from './userMocks';

const props = {
    loginUser,
    auth: {
        isLoading: false,
    },
  };
  const propsIsLoading = {
    loginUser,
    auth: {
        isLoading: true,
    },
  };
  const state = {
    loginData: {
        email: 'omasan.esimaje',
        password: 'pass',
    }
  };

const correctEventEmail = {
  ...preventDefault,
  target: {
    name: "email",
    value: "omasan.esimaje@gmail.com"
  }
}
const correctEventPass = {
  ...preventDefault,
  target: {
    name: "password",
    value: "pass"
  },
}

const wrongEventEmail = {
  ...preventDefault,
  target: {
    name: "email",
    value: "omasan.esimajegmail.com"
  }
}


export { props, state, propsIsLoading, preventDefault, correctEventEmail, correctEventPass, wrongEventEmail };

