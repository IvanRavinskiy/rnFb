import {Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {isAuthProfile} from '../../reducers/fbSlice';
import {LoginStyles} from './styles';
import {LoginButton} from 'react-native-fbsdk-next';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const onFacebookButtonLogin = () => {
    console.log('login click');
    dispatch(isAuthProfile());
  };

  return (
    <View style={LoginStyles.main}>
      <Text>init</Text>
      <LoginButton
        onLoginFinished={onFacebookButtonLogin}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
};
