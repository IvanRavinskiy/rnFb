import {Button, Image, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LoginStyles} from './styles';
import {LoginButton} from 'react-native-fbsdk-next';
import {selectAvaImg, selectIsAuthSuccess} from '../../selectors';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {
  isAuthFbLogin,
  isAuthFbLogout,
  isAuthGoogleLogin,
  isAuthGoogleLogout,
} from '../../reducers/fbSlice';

export const LoginScreen = () => {
  const [auth, setAuth] = useState(false);

  const dispatch = useDispatch();
  const avaImg = useSelector(selectAvaImg);
  const isAuthSuccess = useSelector(selectIsAuthSuccess);
  console.log('!!!!!!!!!!!!! isAuthSuccess ', isAuthSuccess);

  const onFacebookButtonLogin = () => {
    dispatch(isAuthFbLogin());
  };

  const onFacebookButtonLogout = () => {
    dispatch(isAuthFbLogout());
  };

  const onGoogleButtonLogin = () => {
    dispatch(isAuthGoogleLogin());
    setAuth(true);
  };
  const onGoogleButtonLogout = () => {
    dispatch(isAuthGoogleLogout());
    setAuth(false);
  };

  return (
    <View style={LoginStyles.main}>
      <Image source={{uri: avaImg}} style={LoginStyles.avatarImage} />
      <LoginButton
        style={LoginStyles.btn}
        onLoginFinished={onFacebookButtonLogin}
        onLogoutFinished={onFacebookButtonLogout}
      />
      {!auth && (
        <GoogleSigninButton
          style={LoginStyles.btn}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={onGoogleButtonLogin}
        />
      )}
      {auth && (
        <Button title={'Logout Google'} onPress={onGoogleButtonLogout} />
      )}
    </View>
  );
};
