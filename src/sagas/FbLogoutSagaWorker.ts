import {call} from 'redux-saga/effects';

export function* FbLogoutSagaWorker() {
  try {
    yield call(console.log, 'FbLogoutSagaWorker start');
  } catch (e) {
    yield call(console.log, `FbLogoutSagaWorker error: ${e}`);
  }
}
