import * as actionTypes from '../actions/actionTypes/login';

// Initial State
const initialState = {
  email:"",
  jwt:"",
};

// Redux: Home Screen Reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST: {
     console.warn("reducer...")
      return {
        ...state,
        email: null,
        jwt:null,
      };
    }
    case actionTypes.LOGIN_RESPONSE: {
        
        console.log("reducer.....",action.payload)
        return {
          ...state,
          email: action.payload,
          
        };
      }
      
      case actionTypes.LOGIN_REQUEST_FAIL: {
        return {
          ...state,
          email: null,
          jwt:null,
        };
      }
 
  
    default: {
      return state;
    }
  }
};

// Exports
export default loginReducer;