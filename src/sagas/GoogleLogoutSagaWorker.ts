import {call, put} from 'redux-saga/effects';
import {isAuthGoogleLogout, isAuthProfileSuccess} from '../reducers/fbSlice';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export function* GoogleLogoutSagaWorker() {
  try {
    yield call(console.log, 'GoogleLogoutSagaWorker start');
    yield call(GoogleSignin.signOut);
    yield put(isAuthGoogleLogout());
    yield put(isAuthProfileSuccess(false));
  } catch (e) {
    yield call(console.log, `GoogleLogoutSagaWorker error: ${e}`);
  }
}
