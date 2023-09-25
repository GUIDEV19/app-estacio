import { View,Text, StyleSheet, Image } from "react-native";
import LoaLogo from '../assets/loa.png';


const LogoLoa = () => {
    return (
            <View style={styles.header}>
                <Image resizeMode="contain" style={styles.loaLogoImg} source={LoaLogo}/>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#141414",
        alignItems: "flex-start",
    },

    header: {
        width: "100%",
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },

    loaLogoImg: {
        width: "100%",
        height: "100%"

    },

});

export default LogoLoa;