import axios from 'axios';
import { token } from '../../__mocks__/navMenuMocks'

/**
 * @method setHeader
 * @description sets authorization header with user's token
 * @param {object} response The HTTP response
 *
 * @returns {void}
 */
const setHeader = () => {
    return { 
        headers: {
        "x-access-token": `${window.localStorage.getItem('authToken')}`
        }
    }
};

export default setHeader;
