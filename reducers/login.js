import * as actionTypes from '../actions/actionTypes/login';

// Initial State
const initialState = {
  email:null,
  jwt:null,
  nextScreen:false,
  username:''
};
// Redux: Home Screen Reducer

const loginReducer = (state = initialState, action) => {
   console.warn('inside reducer')
 
  // console.warn('state-',state.email)
 
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST: { 
     console.warn('inside reducer request')
      return {
        ...state,
        email: null,
        jwt:null,
      };
    }
    case actionTypes.LOGIN_RESPONSE: {
      console.warn('inside reducer response',action.payload)
     
      return {
        ...state,
        email:action.payload,
        nextScreen:true,
        // username:action.payload.data.data.username
        
      };
    }
    
      
      case actionTypes.LOGIN_REQUEST_FAIL: {
        console.warn('inside reducer-request failed')
        return {
          ...state,
          email:null,
          jwt:null,
          username:'',
          nextScreen:false
        };
      }
 
  
    default: {
      return state;
    }
  }
};

// Exports
export default loginReducer;