import {call} from 'redux-saga/effects';

export function* FbSagaWorker() {
  try {
    yield call(console.log, 'FbSagaWorker start');
  } catch (e) {
    yield call(console.log, `FbSagaWorker error ${e}`);
  }
}
