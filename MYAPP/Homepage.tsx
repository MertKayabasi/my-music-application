/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import NavigateScreen from "./NavigateScreen";
import axios from "axios";
const Homepage = props => {
  return (
  
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Favorites')}>
        <Text>Go to favorites</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
  },
});

export default Homepage;
