import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Heriberto Gostoso</Text>
      <Link href={"/musics" as any}>Musaicas</Link>
    </View>
  );
}
