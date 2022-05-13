import {takeLatest} from 'redux-saga/effects';
import {SagaPattern} from '../enums';
import {FbLoginSagaWorker} from './FbLoginSagaWorker';

export function* FbRootSaga() {
  yield takeLatest(SagaPattern.fb, FbLoginSagaWorker);
}
