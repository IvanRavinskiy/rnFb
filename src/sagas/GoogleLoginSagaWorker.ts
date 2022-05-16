import {call, put} from 'redux-saga/effects';
import {isAuthProfileSuccess, setAvaImg} from '../reducers/fbSlice';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type AuthCredential = FirebaseAuthTypes.AuthCredential;

export function* GoogleLoginSagaWorker() {
  const signInWithCredential = (credential: AuthCredential) => {
    return auth().signInWithCredential(credential);
  };
  try {
    yield call(GoogleSignin.configure, {
      webClientId: '1000664849388-hjlfirisvgc9k7habs4idc5es11fr10d',
    });
    yield call(GoogleSignin.hasPlayServices);
    const userInfo: User = yield call(GoogleSignin.signIn);
    const googleCredential: AuthCredential = yield call(
      auth.GoogleAuthProvider.credential,
      userInfo.idToken,
    );
    yield call(signInWithCredential, googleCredential);
    yield put(setAvaImg(userInfo.user.photo));
    yield put(isAuthProfileSuccess(true));
  } catch (e) {
    yield call(console.log, `GoogleLoginSagaWorker error: ${e}`);
  }
}
