import { signUpUser } from '../src/actions/authActions'

const props = {
    signUpUser,
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
    newUser: {
        name: 'Ben',
        email: 'ben@gmail.com',
        pnumber: '07062257273',
        password: 'pass',
        cpassword: 'pass',
    }
  };
export { props, state, propsIsLoading };