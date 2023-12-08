/* eslint-disable no-undef */
module.exports = {
  preset: "react-native",
};
// eslint-disable-next-line prettier/prettier
import rootReducer from './reducers'; // Bu dosyayı oluşturacağız

const store = createStore(rootReducer);

export default store;
