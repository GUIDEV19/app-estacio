import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import LogoLoa from '../../components/Logo.js'
import { Footer } from "../../components/Footer/Footer.js";
import { StatusBar } from 'expo-status-bar';


export default function ContactScreen({route}) {
    const phoneNumber = '123-456-7890';
    const instagramLink = 'https://www.instagram.com/minhaloja';

    const handlePhonePress = () => {
      // Abra o aplicativo de telefone com o número de contato
      Linking.openURL(`tel:${phoneNumber}`);
    };
  
    const handleInstagramPress = () => {
      // Abra o Instagram no navegador ou no aplicativo
      Linking.openURL(instagramLink);
    };
    
    return (
        <View style={styles.container}>
            <LogoLoa />
            
            <TouchableOpacity onPress={handleInstagramPress}>
                <Text style={styles.contactLink}>{instagramLink}</Text>
            </TouchableOpacity>
            
            <Footer />
            <StatusBar style="auto" />
        </View>
    //     <View style={styles.container}>
    //   <Text style={styles.title}>Sobre Nossa Loja</Text>
    //   <Text style={styles.text}>
    //     Bem-vindo à nossa loja! Estamos felizes em atendê-lo e fornecer produtos de qualidade.
    //   </Text>
    //   <Text style={styles.text}>
    //     Entre em contato conosco:
    //   </Text>
    //   <TouchableOpacity onPress={handlePhonePress}>
    //     <Text style={styles.contactLink}>{phoneNumber}</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={handleInstagramPress}>
    //     <Text style={styles.contactLink}>{instagramLink}</Text>
    //   </TouchableOpacity>
    // </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 16,
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 16,
//     },
//     text: {
//       fontSize: 16,
//       marginBottom: 12,
//     },
//     contactLink: {
//       fontSize: 16,
//       color: 'blue',
//       textDecorationLine: 'underline',
//       marginBottom: 8,
//     },
//   });
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
    },
    containerImage: {
        alignItems: "center"
    },
    image: {
        height: 500,
        width: "90%",
    },
    textHeader: {
        color: "#D1D3D4",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center'
    },
    textHeaderSecundary: {
        color: "#D1D3D4",
        marginBottom: 30,
        fontSize: 20,
        width: 200,
        textAlign: 'center'
    },
    containerInfoProduct: {
        marginHorizontal: 15,
        marginVertical: 30,
    },
    textTitleProduct: {
        color: "#D1D3D4",
        fontSize: 20,
        fontWeight: '500'
    },
    textValueProduct: {
        color: "#D1D3D4",
        marginTop: 10,
        paddingBottom: 10,
        fontSize: 15,
    },
    buttonRedirectWhats: {
        marginTop: 30,
    },

    contactLink: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 16,
              marginBottom: 8,
            },
});