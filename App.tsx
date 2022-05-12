import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();
  console.log(data);
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // // Create a Firebase credential with the AccessToken
  // const facebookCredential = auth.FacebookAuthProvider.credential(
  //   data.accessToken,
  // );
  //
  // // Sign-in the user with the credential
  // return auth().signInWithCredential(facebookCredential);
}

export const App = () => {
  return (
    <View style={styles.main}>
      <Text>init</Text>
      <Button
        title="Facebook Sign-In"
        onPress={() =>
          onFacebookButtonPress().then(() =>
            console.log('Signed in with Facebook!'),
          )
        }
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
