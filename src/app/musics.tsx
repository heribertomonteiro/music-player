import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import SearchComponent from "../components/searchComponent";
import Modal from "../components/ModalComponent";
import { useState } from "react";
import NavBarComponent from "../components/NavBarComponent";



export default function Musics(){
  const [modal, setModal] = useState(false)
  return (
    <View className="flex-1">
      <SearchComponent/>
      <View className="absolute top-48 left-4">
        <View className=" flex-row items-center gap-10">
          <Image source={require('../assets/images/artist.png')}/>
          <Text className="text-white text-2xl">Grafith</Text>
        </View>
        <View style={styles.container}>
          <Text className="text-white text-2xl mb-10">Musicas</Text>
        </View>
        <ScrollView style={{height: 380}}>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 2</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 3</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 4</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 5</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 6</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 7</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 8</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 9</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 10</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 11</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        <View className="mb-10 flex-1 flex-row items-center justify-between" style={styles.musicas}>
            <View className="flex-row items-center gap-4">
              <Image source={require("../assets/images/retangulo.png")} />
              <Text className="text-white text-center text-1xl">Musica 12</Text> 
            </View>
            <TouchableOpacity onPress={() => setModal(true)}><Image source={require('../assets/images/Frame.png')} className="mr-1"/></TouchableOpacity>
        </View>
        </ScrollView>
      </View>
      <Modal
        show={modal}
        close={() => setModal(false)}
      />
    <NavBarComponent/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  musicas: {
    width: '100%'
  }
});