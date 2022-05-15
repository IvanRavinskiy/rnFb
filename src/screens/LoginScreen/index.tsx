import {Image, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isAuthLogin, isAuthLogout} from '../../reducers/fbSlice';
import {LoginStyles} from './styles';
import {LoginButton} from 'react-native-fbsdk-next';
import {selectAvaImg, selectIsAuthSuccess} from '../../selectors';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const avaImg = useSelector(selectAvaImg);
  const isAuthSuccess = useSelector(selectIsAuthSuccess);
  console.log('!!!!!!!!!!!!! isAuthSuccess ', isAuthSuccess);

  const onFacebookButtonLogin = () => {
    dispatch(isAuthLogin());
  };

  const onFacebookButtonLogout = () => {
    dispatch(isAuthLogout());
  };

  const onGoogleButtonPress = async () => {
    console.log('google login');
  };

  return (
    <View style={LoginStyles.main}>
      <Image source={{uri: avaImg}} style={LoginStyles.avatarImage} />
      <LoginButton
        style={LoginStyles.btn}
        onLoginFinished={onFacebookButtonLogin}
        onLogoutFinished={onFacebookButtonLogout}
      />
      <GoogleSigninButton
        style={LoginStyles.btn}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Dark}
        onPress={onGoogleButtonPress}
      />
    </View>
  );
};
