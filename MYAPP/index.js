/* eslint-disable prettier/prettier */
/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Root reducer'ın yolunu doğru şekilde ayarlayın
import App from './App.tsx';
import { name as appName } from './app.json';
import 'react-native-url-polyfill/auto';

const store = createStore(rootReducer);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
/*import { createStore } from 'redux';
import rootReducer from './reducers'; // Bu dosyayı oluşturacağız

const store = createStore(rootReducer);

export default store;
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';
import 'react-native-url-polyfill/auto';

AppRegistry.registerComponent(appName, () => App);*/
