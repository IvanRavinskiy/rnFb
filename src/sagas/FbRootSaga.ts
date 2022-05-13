import {takeLatest} from 'redux-saga/effects';
import {SagaPattern} from '../enums';
import {FbLoginSagaWorker} from './FbLoginSagaWorker';
import {FbLogoutSagaWorker} from './FbLogoutSagaWorker';

export function* FbRootSaga() {
  yield takeLatest(SagaPattern.fbLogin, FbLoginSagaWorker);
  yield takeLatest(SagaPattern.fbLogout, FbLogoutSagaWorker);
}
