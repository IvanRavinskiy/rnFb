import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {isAuthProfile} from '../reducers/fbSlice';

export const LoginScreen = () => {
  // const [] = useState(false);

  const dispatch = useDispatch();

  const onFacebookButtonPress = () => {
    dispatch(isAuthProfile());
  };
  return (
    <View style={styles.main}>
      <Text>init</Text>
      <Button
        title="Facebook Sign-In"
        onPress={() => onFacebookButtonPress()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
