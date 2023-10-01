import { Text, View, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import LogoLoa from '../../components/Logo.js'
import { Footer } from "../../components/Footer/Footer.js";
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ContactScreen({route}) {
    const phoneNumber = '123-456-7890';
    const instagramLink = 'https://www.instagram.com/loa.pratas_';

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
            <ScrollView showsVerticalScrollIndicator={false} >
            
            <Text style={styles.title}>Sobre Nossa Loja</Text>
            
            <Text style={styles.text}>
                Obrigado por escolher a Lôa Pratas. 
                Estamos ansiosos para fazer parte dos momentos mais importantes de sua vida 
                e ajudá-lo a celebrar o amor, 
                a beleza e a eternidade. Explore nossa coleção 
                e permita-nos ser parte da sua história.
            </Text>
            
            

            <TouchableOpacity onPress={handleInstagramPress}>
                <View style={styles.instagramContainer}>
                    <Icon name="instagram" size={60} color="#E1306C" />
                    <Text style={styles.text}>@loa.pratas_</Text>
                </View>
            </TouchableOpacity>


            <Footer />
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    
    );
}

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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: "#FFF"
    },
    text: {
        fontSize: 16,
        marginBottom: 12,
        color: "#FFF"
    },
});