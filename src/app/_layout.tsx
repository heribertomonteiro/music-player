import { View, StyleSheet } from "react-native";
import "../styles/global.css";

import { Slot } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Layout(){
  return(
    <View className='flex-1 bg-vinho'>
      <LinearGradient colors={['rgba(0,0,0,1)', 'transparent']} style={styles.background}/>
      <Slot/>
    </View>
  ) 
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
    }
});
