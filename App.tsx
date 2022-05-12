import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const App = () => {
  return (
    <View style={styles.main}>
      <Text>init</Text>
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
