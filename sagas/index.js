// Imports: Dependencies
import { all, fork } from 'redux-saga/effects';

// Imports: Redux Sagas
import { watchHomeScreen } from './home';
import {login} from './login'


// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchHomeScreen),
    fork(login)
  ]);
};
