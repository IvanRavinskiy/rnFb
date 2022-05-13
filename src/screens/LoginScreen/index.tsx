import {Image, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isAuthLogin, isAuthLogout} from '../../reducers/fbSlice';
import {LoginStyles} from './styles';
import {LoginButton} from 'react-native-fbsdk-next';
import {selectAvaImg} from '../../selectors';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const avaImg = useSelector(selectAvaImg);

  const onFacebookButtonLogin = () => {
    console.log('login click');
    dispatch(isAuthLogin());
  };

  const onFacebookButtonLogout = () => {
    console.log('click logout.');
    dispatch(isAuthLogout());
  };

  return (
    <View style={LoginStyles.main}>
      <Image source={{uri: avaImg}} style={LoginStyles.avatarImage} />
      <LoginButton
        onLoginFinished={onFacebookButtonLogin}
        onLogoutFinished={onFacebookButtonLogout}
      />
    </View>
  );
};
