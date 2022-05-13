import {Button, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {isAuthProfile} from '../../reducers/fbSlice';
import {LoginStyles} from './styles';

export const LoginScreen = () => {
  // const [] = useState(false);

  const dispatch = useDispatch();

  const onFacebookButtonPress = () => {
    dispatch(isAuthProfile());
  };
  return (
    <View style={LoginStyles.main}>
      <Text>init</Text>
      <Button
        title="Facebook Sign-In"
        onPress={() => onFacebookButtonPress()}
      />
    </View>
  );
};
