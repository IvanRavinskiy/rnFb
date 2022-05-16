import {call, put} from 'redux-saga/effects';
import {isAuthProfileSuccess} from '../reducers/fbSlice';
import auth from '@react-native-firebase/auth';

export function* FbLogoutSagaWorker() {
  const signOut = () => {
    return auth().signOut();
  };
  try {
    yield call(signOut);
    yield put(isAuthProfileSuccess(false));
  } catch (e) {
    yield call(console.log, `FbLogoutSagaWorker error: ${e}`);
  }
}
