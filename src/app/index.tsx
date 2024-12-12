import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Heriberto Gostoso</Text>
      <Link href={"/Musics" as any}>Musaicas</Link>
      <Link href={"/Home" as any}>Home</Link>
      <Link href={"/Favoritos" as any}>Favoritos</Link>
    </View>
  );
}
