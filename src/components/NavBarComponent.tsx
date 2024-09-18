import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const NavBarComponent = () => {
    return ( 
        <View style={styles.navbar}>
            <TouchableOpacity><Link href={"/Home" as any}><Ionicons name="home" size={30} color="white" /></Link></TouchableOpacity>
            <TouchableOpacity><Ionicons name="images" size={30} color="white" /></TouchableOpacity>
            <TouchableOpacity><Ionicons name="person" size={30} color="white" /></TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    navbar: {
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'black',
    },
})
export default NavBarComponent;