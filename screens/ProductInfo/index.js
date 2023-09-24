import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button, ScrollView, Alert, FlatList } from 'react-native';
import { styles } from "./style";

export default function ProductInfo({
    route
}) {
    const { idProduct } = route.params;
    const productList = [
        {
            id: '1',
            name: 'Produto 1',
            price: 19.99,
            imageUrl: 'https://static.wixstatic.com/media/fc9aa0_eeaa8cb6482141f585acedeb1db7e95a~mv2.jpg/v1/fill/w_276,h_490,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fc9aa0_eeaa8cb6482141f585acedeb1db7e95a~mv2.jpg',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '2',
            name: 'Produto 2',
            price: 29.99,
            imageUrl: 'https://static.wixstatic.com/media/fc9aa0_44cdf0fe24234de9a5e4567bebbb475c~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc9aa0_44cdf0fe24234de9a5e4567bebbb475c~mv2.jpg',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '3',
            name: 'Produto 3',
            price: 14.99,
            imageUrl: 'https://static.wixstatic.com/media/fc9aa0_37914445dd7045868a44c5fedadab22d~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc9aa0_37914445dd7045868a44c5fedadab22d~mv2.jpg',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '4',
            name: 'Produto 4',
            price: 39.99,
            imageUrl: 'https://static.wixstatic.com/media/fc9aa0_2a4a5c9aad834a7799385987127c0749~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc9aa0_2a4a5c9aad834a7799385987127c0749~mv2.jpg',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '5',
            name: 'Produto 5',
            price: 24.99,
            imageUrl: 'https://static.wixstatic.com/media/fc9aa0_4fcafa840a204c76aa2e3276af0be793~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc9aa0_4fcafa840a204c76aa2e3276af0be793~mv2.jpg',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '6',
            name: 'Produto 6',
            price: 49.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '7',
            name: 'Produto 7',
            price: 9.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '8',
            name: 'Produto 8',
            price: 34.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '9',
            name: 'Produto 9',
            price: 19.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '10',
            name: 'Produto 10',
            price: 29.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '11',
            name: 'Produto 11',
            price: 14.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '12',
            name: 'Produto 12',
            price: 39.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '13',
            name: 'Produto 13',
            price: 24.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '14',
            name: 'Produto 14',
            price: 49.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
        {
            id: '15',
            name: 'Produto 15',
            price: 9.99,
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
            productInfo: {
                description: "Peça em prata 925",
                additionalInfo: [
                    "Leia as informações abaixo:",
                    "- Todas as peças em prata 925 e banhadas em ouro ou prata são Hipoalergênicas.",
                    "- GARANTIA: a garantia pode variar de 0 a 1 ano, dependendo do material da peça. Favor observar essa característica ao realizar sua compra.",
                    "Prata 925: garantia eterna;",
                    "Banhada a ouro: Garantia de 6 meses a 1 ano no banho (cor).",
                    "Folheados: esse possui menor quantidade de camadas de ouro do que as semijoias. Portanto, não possui garantia.",
                    "Obs: A garantia não cobre peças com sinais de mau uso (arranhadas, quebradas). Não cobre perda de pingentes e pedras.",
                    "Para sanar mais dúvidas entre em contato conosco",
                    "62 98128-6023"
                ]
            }
        },
    ];

    return (
        <ScrollView>
            <View style={styles.container}>

                <View>
                    <Text style={styles.textHeader}>LÔA BRAND</Text>
                    <Text style={styles.textHeaderSecundary}>Joias em prata, semijoias e folheados</Text>
                </View>

                {
                    productList.map((itemList, indexList) => {
                        if (itemList.id == idProduct) {
                            return (
                                <View key={indexList}>
                                    <View style={styles.containerImage}>
                                        <Image source={require("../../assets/imgs/fc9aa0_eeaa8cb6482141f585acedeb1db7e95a~mv2.webp")} style={styles.image} />
                                    </View>
                                    <View style={styles.containerInfoProduct}>
                                        <Text style={styles.textTitleProduct}>{itemList.name}</Text>
                                        <Text style={styles.textValueProduct}>R$: {itemList.price}</Text>

                                        <Button
                                            style={styles.buttonRedirectWhats}
                                            title="Fale Conosco"
                                            color="green"
                                            onPress={() => Alert.alert('Direcionamento para whats')}
                                        />
                                        {
                                            itemList.productInfo.additionalInfo.map((item, index) => (
                                                <Text style={styles.textValueProduct} key={index}>
                                                    {item}
                                                </Text>
                                            ))
                                        }
                                    </View>
                                </View>
                            )
                        }
                    })
                }
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

