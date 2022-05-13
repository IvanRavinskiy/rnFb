import {Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {isAuthProfile} from '../../reducers/fbSlice';
import {LoginStyles} from './styles';
import {LoginButton} from 'react-native-fbsdk-next';

export const LoginScreen = () => {
  // const [] = useState(false);

  const dispatch = useDispatch();

  const onFacebookButtonPress = async () => {
    console.log('click');
    dispatch(isAuthProfile());
  };

  return (
    <View style={LoginStyles.main}>
      <Text>init</Text>
      <LoginButton
        onLoginFinished={onFacebookButtonPress}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
};
