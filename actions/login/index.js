import * as actionTypes from '../actionTypes/login';


export const loginrequest = (payload) => {
   console.warn('inside login request',payload)
    return { type: actionTypes.LOGIN_REQUEST,payload };
}

export const loginResponse = (payload) => {
    console.warn('inside login response',payload)
    return { type: actionTypes.LOGIN_RESPONSE, payload }
}
export const loginrequestfail = (payload) => {
    console.warn('inside response fail',payload)
    return { type: actionTypes.LOGIN_REQUEST_FAIL };
}