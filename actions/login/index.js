import * as actionTypes from '../actionTypes/login';
import axios from 'axios'

export const loginrequest = () => {
  
    return { type: actionTypes.LOGIN_REQUEST };
}

export const loginResponse = (payload) => {
    return { type: actionTypes.LOGIN_RESPONSE, payload }
}
export const loginrequestfail = () => {
    return { type: actionTypes.LOGIN_REQUEST_FAIL };
}
