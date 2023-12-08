/* eslint-disable prettier/prettier */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers'; // Root reducer'ın yolunu doğru şekilde ayarlayın
import App from './App';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    // Diğer slice'larınızı buraya ekleyebilirsiniz
  },
});

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
