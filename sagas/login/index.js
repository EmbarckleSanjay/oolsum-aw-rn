import * as actionTypes from '../../actions/actionTypes/login';
// Imports: Dependencies
import { takeLatest, put } from 'redux-saga/effects';
import { loginrequest, loginResponse, loginrequestfail } from '../../actions/login/index';
import {apiCall} from '../../api'

// console.warn('into sagas')
function* fetchloginrequest(payload) {
    //   const response = {
    //         jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmluLmJAYXhpbXNvZnQuY29tIiwidXNlcklkIjoiNWQ4ZGIxYzliNjQwMmEzNWMwNGY4NWYzIiwiaWF0IjoxNTcwMTEwNjc3LCJleHAiOjE1NzAxMTQyNzd9.VqM-UHDiYT_DZhvoRAhCJ89R7VtalSFN1DQxWdWQxNg',
    //         message: 'Auth successful',
    //         status:loginResponse ? 200  : 400,
    //         status: data.email === 'admin@gmail.com' && data.password === 'admin@123' ? 200 : 400,

    //      };

    // console.warn('inside saga fetch')
  const response = yield apiCall(payload)
  console.warn('res2',response)
//    alert(response.status)
    if (response!==undefined) {
        yield put(loginResponse(response));
    }
    else {
        console.warn('else',response)
        yield put(loginrequestfail(response));
    }
}

export function* login() {
    // console.warn('inside saga login')
    // Take Last Action
    yield takeLatest(actionTypes.LOGIN_REQUEST, fetchloginrequest);

}