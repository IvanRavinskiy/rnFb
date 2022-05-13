import {call, put} from 'redux-saga/effects';
import {AccessToken, Profile} from 'react-native-fbsdk-next';
import {isAuthProfileSuccess, setAvaImg} from '../reducers/fbSlice';
import FBProfile from 'react-native-fbsdk-next/lib/typescript/src/FBProfile';
import FBAccessToken from 'react-native-fbsdk-next/lib/typescript/src/FBAccessToken';
import auth from '@react-native-firebase/auth';

export function* FbLoginSagaWorker(): any {
  try {
    yield call(AccessToken.refreshCurrentAccessTokenAsync);
    const data: FBAccessToken = yield call(AccessToken.getCurrentAccessToken);
    const profile: FBProfile = yield call(Profile.getCurrentProfile);
    const facebookCredential: any = yield call(
      auth.FacebookAuthProvider.credential,
      data.accessToken,
    );
    const signInWithCredential = (credential: any) => {
      return auth().signInWithCredential(credential);
    };
    yield call(signInWithCredential, facebookCredential);
    yield put(setAvaImg(profile.imageURL));
    yield put(isAuthProfileSuccess(true));
  } catch (e) {
    yield call(console.log, `FbLoginSagaWorker error: ${e}`);
  }
}
