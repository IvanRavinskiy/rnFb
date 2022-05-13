import {call, put} from 'redux-saga/effects';
import {isAuthProfileSuccess} from '../reducers/fbSlice';

export function* FbLogoutSagaWorker() {
  try {
    yield call(console.log, 'FbLogoutSagaWorker start');
    yield put(isAuthProfileSuccess(false));
  } catch (e) {
    yield call(console.log, `FbLogoutSagaWorker error: ${e}`);
  }
}
