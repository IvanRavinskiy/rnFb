import {call, put} from 'redux-saga/effects';
import {isAuthProfileSuccess, setAvaImg} from '../reducers/fbSlice';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';

export function* GoogleLoginSagaWorker() {
  try {
    yield call(GoogleSignin.configure);
    yield call(GoogleSignin.hasPlayServices);
    const userInfo: User = yield call(GoogleSignin.signIn);
    yield call(console.log, userInfo);
    yield put(setAvaImg(userInfo.user.photo));
    yield put(isAuthProfileSuccess(true));
  } catch (e) {
    yield call(console.log, `GoogleLoginSagaWorker error: ${e}`);
  }
}
