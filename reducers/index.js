// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import homeReducer from './home';

// Redux: Root Reducer
const rootReducer = combineReducers({
  home: homeReducer,
});

// Exports
export default rootReducer;