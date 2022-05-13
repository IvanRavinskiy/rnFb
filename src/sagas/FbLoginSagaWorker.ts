import {call, put} from 'redux-saga/effects';
import {AccessToken, Profile} from 'react-native-fbsdk-next';
import {isAuthProfileSuccess, setAvaImg} from '../reducers/fbSlice';
import FBProfile from 'react-native-fbsdk-next/lib/typescript/src/FBProfile';

export function* FbLoginSagaWorker() {
  try {
    yield call(AccessToken.refreshCurrentAccessTokenAsync);
    yield call(AccessToken.getCurrentAccessToken);
    const profile: FBProfile = yield call(Profile.getCurrentProfile);
    yield put(setAvaImg(profile.imageURL));
    yield put(isAuthProfileSuccess());
  } catch (e) {
    yield call(console.log, `FbLoginSagaWorker error: ${e}`);
  }
}
