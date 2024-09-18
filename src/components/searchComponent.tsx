import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import AntDesign  from '@expo/vector-icons/Ionicons';

export default function SearchComponent() {
  return (
    <View className='flex-1 justify-start  items-center pt-20'>
      <View style={styles.input} className='border-laranja flex-row justify-between'>
      <TextInput placeholder="Buscar" placeholderTextColor={'white'} className=' text-white w-80'/>
      <TouchableOpacity>
        <AntDesign name="search" size={24} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});