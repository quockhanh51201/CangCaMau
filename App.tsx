/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import Index from './src/screens';

import {store} from './src/redux/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
