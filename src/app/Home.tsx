// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Favoritas: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const playlists = [
  { id: '1', name: 'As melhores BR', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Rock de leve', image: 'https://via.placeholder.com/100' },
];

const artists = [
  { id: '1', name: 'Grafith', image: 'https://via.placeholder.com/80' },
  { id: '2', name: 'Wesley Safadão', image: 'https://via.placeholder.com/80' },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState(''); 

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Busca"
          placeholderTextColor="#ccc"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Ionicons name="search" size={24} color="white" />
      </View>

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => navigation.navigate('Favoritas')}
      >
        <Ionicons name="heart" size={24} color="white" />
        <Text style={styles.favoriteText}>Favoritos</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Playlists</Text>
      <FlatList
        horizontal
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.playlistItem}>
            <Image source={{ uri: item.image }} style={styles.playlistImage} />
            <Text style={styles.playlistText}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Artistas</Text>
      <FlatList
        horizontal
        data={artists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.artistItem}>
            <Image source={{ uri: item.image }} style={styles.artistImage} />
            <Text style={styles.artistText}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.controls}>
        <Ionicons name="play-skip-back" size={30} color="white" />
        <Ionicons name="play" size={30} color="white" />
        <Ionicons name="play-skip-forward" size={30} color="white" />
        <Ionicons name="volume-high" size={30} color="white" />
      </View>

      <View style={styles.navbar}>
        <Ionicons name="home" size={30} color="white" />
        <Ionicons name="images" size={30} color="white" />
        <Ionicons name="person" size={30} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#370B1E',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4C0C2A',
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 18,
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B1062C',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  favoriteText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 18,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    marginVertical: 12,
  },
  playlistItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  playlistImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  playlistText: {
    color: 'white',
    fontSize: 16,
  },
  artistItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  artistText: {
    color: 'white',
    fontSize: 16,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
