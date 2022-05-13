import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {LoginScreen} from './src/screens/LoginScreen';

export const App = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};
