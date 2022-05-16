import {takeLatest} from 'redux-saga/effects';
import {SagaPattern} from '../enums';
import {FbLoginSagaWorker} from './FbLoginSagaWorker';
import {FbLogoutSagaWorker} from './FbLogoutSagaWorker';
import {GoogleLoginSagaWorker} from './GoogleLoginSagaWorker';
import {GoogleLogoutSagaWorker} from './GoogleLogoutSagaWorker';

export function* FbRootSaga() {
  yield takeLatest(SagaPattern.fbLogin, FbLoginSagaWorker);
  yield takeLatest(SagaPattern.fbLogout, FbLogoutSagaWorker);
  yield takeLatest(SagaPattern.googleLogin, GoogleLoginSagaWorker);
  yield takeLatest(SagaPattern.googleLogout, GoogleLogoutSagaWorker);
}
