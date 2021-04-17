// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import homeReducer from './home';
import loginReducer from './login'

// Redux: Root Reducer
const rootReducer = combineReducers({
  home: homeReducer,
  login:loginReducer,
});

// Exports
export default rootReducer;