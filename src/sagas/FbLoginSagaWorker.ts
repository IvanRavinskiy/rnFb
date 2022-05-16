import {call, put} from 'redux-saga/effects';
import {AccessToken, Profile} from 'react-native-fbsdk-next';
import {isAuthProfileSuccess, setAvaImg} from '../reducers/fbSlice';
import FBProfile from 'react-native-fbsdk-next/lib/typescript/src/FBProfile';
import FBAccessToken from 'react-native-fbsdk-next/lib/typescript/src/FBAccessToken';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type AuthCredential = FirebaseAuthTypes.AuthCredential;

export function* FbLoginSagaWorker() {
  const signInWithCredential = (credential: AuthCredential) => {
    return auth().signInWithCredential(credential);
  };
  try {
    const data: FBAccessToken = yield call(AccessToken.getCurrentAccessToken);
    const facebookCredential: AuthCredential = yield call(
      auth.FacebookAuthProvider.credential,
      data.accessToken,
    );
    yield call(signInWithCredential, facebookCredential);
    const profile: FBProfile = yield call(Profile.getCurrentProfile);
    yield put(setAvaImg(profile.imageURL));
    yield put(isAuthProfileSuccess(true));
  } catch (e) {
    yield call(console.log, `FbLoginSagaWorker error: ${e}`);
  }
}
