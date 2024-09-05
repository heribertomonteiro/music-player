import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className='justify-center items-center'>
      <Text>Heriberto Gostoso</Text>
      <Link href={"/" as any}>Home</Link>
    </View>
  );
}

