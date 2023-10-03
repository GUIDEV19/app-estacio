import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button, ScrollView, Alert, StyleSheet } from 'react-native';
import { Footer } from "../../components/Footer/Footer.js";
import LogoLoa from '../../components/Logo.js'

export default function ProductInfo({
    route
}) {
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <LogoLoa />
            <ScrollView>
                <View>
                    <View style={styles.containerImage}>
                        <Image source={{ uri: product.url }} style={styles.image} />
                    </View>
                    <View style={styles.containerInfoProduct}>
                        <Text style={styles.textTitleProduct}>{product.name}</Text>
                        <Text style={styles.textValueProduct}>R$: {product.value}</Text>

                        <Button
                            style={styles.buttonRedirectWhats}
                            title="Fale Conosco"
                            color="green"
                            onPress={() => Alert.alert('Direcionamento para whats')}
                        />
                        {
                            product.productInfo.additionalInfo.map((item, index) => (
                                <Text style={styles.textValueProduct} key={index}>
                                    {item}
                                </Text>
                            ))
                        }
                    </View>
                    <Footer />
                </View>
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
        borderRadius: 20
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
    }
});