/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers'; // Root reducer'ın yolunu doğru şekilde ayarlayın

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    // Diğer slice'larınızı buraya ekleyebilirsiniz
  },
});

export default store;
