/* eslint-disable react/jsx-no-undef */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from './Favorites';
import Homepage from './Homepage';
const Stack = createStackNavigator();

const NavigateScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Homepage"}>
        <Stack.Screen 
          name="Favorites"
          component={Favorites}
        />
        <Stack.Screen
        name="Homepage"
        component={Homepage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigateScreen;
