/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './action';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = () => {
    axios
      .get(`http://itunes.apple.com/search?term=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddToFavorites = (item) => {
    dispatch(addToFavorites(item));
  };

  const handleDetails = (item) => {
    setSelectedItem(item);
    navigation.navigate('Details', { item });
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: style='http://logowik.com/content/uploads/images/589_itunes.jpg'}}style={{width:400, height:100}}/>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.trackId}
        renderItem={({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.artworkUrl100 }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text>{item.trackName}</Text>
        <TouchableOpacity onPress={() => handleAddToFavorites(item)}>
          <Text>Add to Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDetails(item)}>
          <Text style={styles.detailsButton}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
/>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Favorites')}
      >
        <Text style={styles.navButtonText}>Go to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.artworkUrl100 }} style={styles.itemImage} />
      <Text style={styles.detailsHeader}>{item.trackName} Details:</Text>
      <Text>Artist: {item.artistName}</Text>
      <Text>Album: {item.collectionName}</Text>
      <Text>Price: {item.collectionPrice} {item.currency}</Text>
      {/* Diğer detay bilgilerini buraya ekleyebilirsiniz */}
    </View>
  );
};

const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const handleRemoveFromFavorites = (trackId) => {
    dispatch(removeFromFavorites(trackId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.favoritesHeader}>Favorites:</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.trackId.toString()}
        renderItem={({ item }) =>  (
          <View style={styles.favoriteItem}>
            <Text>{item.trackName}</Text>
            <View style={styles.detailsContainer}>
              <Image source={{ uri: item.artworkUrl100 }} style={styles.itemImage} />
              <Text style={styles.detailsHeader}>{item.trackName} Details:</Text>
              <Text>Artist: {item.artistName}</Text>
              <Text>Album: {item.collectionName}</Text>
              <Text>Price: {item.collectionPrice} {item.currency}</Text>
              <TouchableOpacity
                onPress={() => handleRemoveFromFavorites(item.trackId)}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  searchInput: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  detailsButton: {
    color: 'blue',
  },
  favoritesHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  favoriteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;




