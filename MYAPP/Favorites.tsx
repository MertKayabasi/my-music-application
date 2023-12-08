/* eslint-disable prettier/prettier */
const Stack = createStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
const Favorites = () => {
  return (
    <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Favorites')}
      >
        <Text style={styles.navButtonText}>Go to Favorites</Text>
      </TouchableOpacity>
  );
};

export default Favorites;

