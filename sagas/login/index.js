import * as actionTypes from '../../actions/actionTypes/login';
// Imports: Dependencies
import { takeLatest, put } from 'redux-saga/effects';
import { loginrequest, loginResponse, loginrequestfail } from '../../actions/login/index';
import axios from 'axios'

function* fetchloginrequest() {
    //   const response = {
    //         jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmluLmJAYXhpbXNvZnQuY29tIiwidXNlcklkIjoiNWQ4ZGIxYzliNjQwMmEzNWMwNGY4NWYzIiwiaWF0IjoxNTcwMTEwNjc3LCJleHAiOjE1NzAxMTQyNzd9.VqM-UHDiYT_DZhvoRAhCJ89R7VtalSFN1DQxWdWQxNg',
    //         message: 'Auth successful',
    //         status:loginResponse ? 200  : 400,
    //         status: data.email === 'admin@gmail.com' && data.password === 'admin@123' ? 200 : 400,

    //      };
 

    const response = yield apiCall();

    //    console.warn("response....",response)

        if (response.status === 200) {
            
           yield  put(loginResponse(response));
        
        }
        else {
          yield   put(loginrequestfail(response));


        }
    }


    export function* login() {
        console.log("saga...")
        // Take Last Action
        yield takeLatest(actionTypes.LOGIN_REQUEST, fetchloginrequest);

    }

    const apiCall = async () => {

    const res = await axios.get("http://34.66.149.130/users")
    .then(response => {
        const users = response.data
        console.warn("sucess", users)
        return users
    })
    .catch(error => {
        const errormsg = error.message
        console.warn("error......", errormsg)
    })
    return res;
    }