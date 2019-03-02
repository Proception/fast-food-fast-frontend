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
  };
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsImZ1bGxfbmFtZSI6IkJlbmVkaWN0Iiwicm9sZV9pZCI6MjAwLCJpYXQiOjE1NTEzODU0MzAsImV4cCI6MTU1MTQ3MTgzMH0.gjqD02e3nwn58TtlNgUmMNMZCVPrdJZ5AGc4hJUslHs'
  export { stateGuest, stateUser, token };