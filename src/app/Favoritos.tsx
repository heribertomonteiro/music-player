import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Favoritas: undefined;
};

type FavoritasScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Favoritas'>;

interface FavoritasScreenProps {
  navigation: FavoritasScreenNavigationProp;
}

const favoritas = [
  { id: '1', name: 'musica 1', image: 'https://via.placeholder.com/50' },
  { id: '2', name: 'musica 2', image: 'https://via.placeholder.com/50' },
  { id: '3', name: 'musica 3', image: 'https://via.placeholder.com/50' },
  { id: '4', name: 'musica 4', image: 'https://via.placeholder.com/50' },
  { id: '5', name: 'musica 5', image: 'https://via.placeholder.com/50' },
];

const FavoritasScreen: React.FC<FavoritasScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Título Favoritas */}
      <Text style={styles.title}>Favoritos</Text>

      {/* Lista de músicas favoritas */}
      <FlatList
        data={favoritas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.favoritaItem}>
            <Image source={{ uri: item.image }} style={styles.favoritaImage} />
            <Text style={styles.favoritaText}>{item.name}</Text>
            <TouchableOpacity>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#370B1E',
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginVertical: 12,
    textAlign: 'center',
  },
  favoritaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: '#555',
    borderBottomWidth: 1,
  },
  favoritaImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 12,
  },
  favoritaText: {
    flex: 1,
    color: 'white',
    fontSize: 18,
  },
});

export default FavoritasScreen;