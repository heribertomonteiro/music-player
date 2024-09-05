import { StyleSheet, TextInput, View } from 'react-native';
import { Link } from 'expo-router';

export default function SearchComponent() {
  return (
    <View className='flex-1 justify-start  items-center pt-20'>
      <TextInput style={styles.input} className='border-laranja text-white' placeholder="Buscar" placeholderTextColor={'white'}/>
      <Link href={"/" as any}>Home</Link>
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