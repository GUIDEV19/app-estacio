import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native';

export default function ComponentImage() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View>
                    <Text style={styles.textHeader}>LÔA BRAND</Text>
                    <Text style={styles.textHeaderSecundary}>Joias em prata, semijoias e folheados</Text>
                </View>
                <View>
                    <Image style={styles.image} source={require('../assets/imgs/fc9aa0_eeaa8cb6482141f585acedeb1db7e95a~mv2.webp')} />
                </View>
                <View style={styles.containerInfoProduct}>
                    <Text style={styles.textTitleProduct}>Pulseira bolas (5/7mm) intercaladas, em prata 925</Text>
                    <Text style={styles.textValueProduct}>R$: 194,99</Text>

                    <Button
                        style={styles.buttonRedirectWhats}
                        title="Fale Conosco"
                        color="green"
                        onPress={() => Alert.alert('Direcionamento para whats')}
                    />

                    <Text style={styles.textValueProduct}>
                        - Peça em prata 925

                        Leia as informações abaixo:

                        -Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.

                        - GARANTIA: a garantia pode variar 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.

                        Prata 925 : garantia eterna;

                        Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).

                        Folheados: esse possui menor quantidade de camadas de ouro, que as semijoias. Portanto não possui garantia.

                        Obs: A Garantia não cobre peças com sinais de mal uso (arranhadas, quebradas). Não cobre perca de pingentes e pedras.

                        Para sanar mais dúvidas entre em contato conosco

                        62 98128-6023
                    </Text>
                </View>

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 600,
        width: 350
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center'
    },
    textHeaderSecundary: {
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
        fontSize: 20,
        fontWeight: '500'
    },
    textValueProduct: {
        marginVertical: 20,
        fontSize: 15,
    },
    buttonRedirectWhats: {
        marginTop: 30,
    }
});
