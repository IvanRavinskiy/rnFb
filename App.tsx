import React from 'react';
import {Provider} from 'react-redux';
import {LoginScreen} from './src/screens/LoginScreen';
import {store} from './src/store';

export const App = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};
