import { setToken } from '../src/actions/authActions';

const stateGuest = {
    data: [],
    auth: {
        isAuthenticated: false,
    }
  };
  const stateUser = {
    data: [],
    auth: {
        isAuthenticated: true,
        user: {
          email: "omasan.esimaje@gmail.com",
          // full_name: "benedict"
      }
    },
    setToken: setToken,
    order: {
      cart: [1,2]
    }
  };
  const stateUserEmptyCart = {
    data: [],
    auth: {
        isAuthenticated: true,
        user: {
          email: "omasan.esimaje@gmail.com",
          // full_name: "benedict"
          role_id: 200
      }
    },
    setToken: setToken,
    order: {
      cart: []
    }
  };
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbF9uYW1lIjoiQmVuZWRpY3QiLCJyb2xlX2lkIjoyMDAsImlhdCI6MTU1MTg3NzMyNSwiZXhwIjoxNTUxOTYzNzI1fQ.DwFFvZskGl9JeBnLD1CCnBSpYA1i0KgK1btUY1eLc9c'
  export { stateGuest, stateUser, token, stateUserEmptyCart };