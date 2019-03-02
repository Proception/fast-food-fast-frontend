import { loginUser } from '../src/actions/authActions'

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
export { props, state, propsIsLoading };

