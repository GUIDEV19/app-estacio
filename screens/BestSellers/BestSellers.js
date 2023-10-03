import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import FIRESTORE_DB from '../../firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";
import LogoLoa from "../../components/Logo";
import { Footer } from '../../components/Footer/Footer';
import { useNavigation } from "@react-navigation/native";

export const BestSellers = ({
    getInfoProduct
}) => {
    let [productList, setProductList] = useState([]);
    const navigation = useNavigation();

    const onClickRedirectProductInfo = () => {
        navigation.navigate("Info")
    };

    useEffect(() => {
        const produtosRef = collection(FIRESTORE_DB, 'produtos');
        const subscriber = onSnapshot(produtosRef, {

            next: (snapshot) => {
                const list = [];
                snapshot.docs.forEach(doc => {
                    list.push({ id: doc.id, ...doc.data() });
                });

                list.sort((a, b) => b.qtdVendida - a.qtdVendida);

                const top5Products = list.slice(0, 5);

                setProductList(top5Products);
            },
        });
        return () => subscriber();
    }, []);

    return (
        <View style={styles.container}>
            <LogoLoa />
            <ScrollView>
                <Text>Mais Vendidos</Text>
                {
                    productList.map((product, index) => (
                        <TouchableOpacity
                            onPress={() => {
                                getInfoProduct(product);
                                setTimeout(() => {
                                    onClickRedirectProductInfo();
                                }, 300);
                            }}
                        >
                            <View key={index} style={styles.containerImage}>
                                <Image source={{ uri: product.url }} style={styles.image} />
                                <Text style={styles.textTitleProduct}>{product.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                <Footer />
            </ScrollView>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414",
    },
    containerImage: {
        alignItems: "center",
        marginBottom: 50,
    },
    image: {
        height: 300,
        width: "90%",
        borderRadius: 20,
        marginBottom: 15
    },
    textTitleProduct: {
        color: "#D1D3D4",
        fontSize: 20,
        fontWeight: '500'
    },
});