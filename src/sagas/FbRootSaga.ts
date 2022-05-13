import {takeLatest} from 'redux-saga/effects';
import {SagaPattern} from '../enums';
import {FbSagaWorker} from './FbSagaWorker';

export function* FbRootSaga() {
  yield takeLatest(SagaPattern.fb, FbSagaWorker);
}
