import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import ProductItem from '../../components/ProdutoComponent';
import { useEffect, useState } from "react";
import FIRESTORE_DB from '../../firebaseConfig';
import { collection, onSnapshot } from "firebase/firestore";
import LogoLoa from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = ({
    route, getInfoProduct
}) => {
    var [productList, setProductList] = useState([]);
    var [listaAneis, setListaAneis] = useState([]);
    var [listaPulseiras, setListaPulseiras] = useState([]);
    var [listaCordoes, setListaCordoes] = useState([]);
    var [listaBrincos, setListaBrincos] = useState([]);
    const navigation = useNavigation();
    const onClickRedirectProductInfo = () => {
        navigation.navigate("Info")
    };
    const onClickRedirectContact = () => {
        navigation.navigate("Contact")
    }
    
    const onClickRedirectNewProducts = () => {
        navigation.navigate("Produtos Novos")
    };

    const onClickRedirectBestSellers = () => {
        navigation.navigate("Mais Vendidos")
    }

    useEffect(() => {
        const produtosRef = collection(FIRESTORE_DB, 'produtos');
        const subscriber = onSnapshot(produtosRef, {
            next: (snapshot) => {
                productList = [];
                listaAneis = [];
                listaPulseiras = [];
                listaCordoes = [];
                listaBrincos = [];
                snapshot.docs.forEach(doc => {
                    if(doc.data().productInfo.category === "aneis")
                        listaAneis.push({ id: doc.id, ...doc.data() });

                    if(doc.data().productInfo.category === "pulseiras")
                        listaPulseiras.push({ id: doc.id, ...doc.data() });

                    if(doc.data().productInfo.category === "cordoes")
                        listaCordoes.push({ id: doc.id, ...doc.data() });

                    if(doc.data().productInfo.category === "brincos")
                        listaBrincos.push({ id: doc.id, ...doc.data() });

                    productList.push({ id: doc.id, ...doc.data() });
                });
                setProductList(productList);
                setListaAneis(listaAneis);
                setListaPulseiras(listaPulseiras);
                setListaCordoes(listaCordoes);
                setListaBrincos(listaBrincos);
            },
        });
        return () => subscriber();
    }, []);


    return (
        <View style={styles.container}>
            <LogoLoa />

            <View style={styles.category} >
                <TouchableOpacity>
                    <Text style={styles.tabsText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={ () => {
                        setTimeout(() => {
                            onClickRedirectNewProducts()
                        }, 200)
                    }}
                >
                    <Text style={styles.tabsText}>Novidades</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        onClickRedirectBestSellers();
                    }}
                >
                    <Text style={styles.tabsText}>Mais vendidos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setTimeout(() => {
                            onClickRedirectContact();
                        }, 200)
                    }}
                >
                    <Text style={styles.tabsText} >Contato</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >

                <Text style={styles.categoriaText}>Aneis</Text>
                <FlatList
                    data={listaAneis}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                getInfoProduct(item);
                                setTimeout(() => {
                                    onClickRedirectProductInfo();
                                }, 500)
                            }}
                        >
                            <ProductItem
                                name={item.name}
                                price={item.value}
                                imageUrl={item.url}
                                productId={item.id}
                            />
                        </TouchableOpacity>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />


                <Text style={styles.categoriaText}>Pulseiras</Text>
                <FlatList
                    data={listaPulseiras}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                getInfoProduct(item);
                                setTimeout(() => {
                                    onClickRedirectProductInfo();
                                }, 500)
                            }}
                        >
                            <ProductItem
                                name={item.name}
                                price={item.value}
                                imageUrl={item.url}
                                productId={item.id}
                            />
                        </TouchableOpacity>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />


                <Text style={styles.categoriaText}>Cordões</Text>
                <FlatList
                    data={listaCordoes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                getInfoProduct(item);
                                setTimeout(() => {
                                    onClickRedirectProductInfo();
                                }, 500)
                            }}
                        >
                            <ProductItem
                                name={item.name}
                                price={item.value}
                                imageUrl={item.url}
                                productId={item.id}
                            />
                        </TouchableOpacity>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.categoriaText}>Brincos</Text>
                <FlatList
                    data={listaBrincos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                getInfoProduct(item);
                                setTimeout(() => {
                                    onClickRedirectProductInfo();
                                }, 500)
                            }}
                        >
                            <ProductItem
                                name={item.name}
                                price={item.value}
                                imageUrl={item.url}
                                productId={item.id}
                            />
                        </TouchableOpacity>
                    )}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

            </ScrollView>

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


    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 0,
        marginBottom: 15,
    },

    tabsText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF"
    },

    categoriaText:{
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF",
        padding: 15
    },

    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },

});

export default HomeScreen;