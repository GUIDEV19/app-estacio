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
    const navigation = useNavigation();
    const onClickRedirectProductInfo = () => {
        navigation.navigate("Info")
    };
    const onClickRedirectContact = () => {
        navigation.navigate("Contact")
    }

    useEffect(() => {
        const produtosRef = collection(FIRESTORE_DB, 'produtos');
        const subscriber = onSnapshot(produtosRef, {
            next: (snapshot) => {
                productList = [];
                snapshot.docs.forEach(doc => {
                    productList.push({ id: doc.id, ...doc.data() });
                });
                setProductList(productList);
            },
        });
        return () => subscriber();
    }, []);


    return (
        <View style={styles.container}>
            <LogoLoa />

            <View style={styles.category} >
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Novidades</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Mais vendidos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setTimeout(() => {
                            onClickRedirectContact();
                        }, 200)
                    }}
                >
                    <Text style={styles.categoryText} >Contato</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>

                <Text style={styles.movieText}>Aneis</Text>
                <FlatList
                    data={productList}
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


                <Text style={styles.movieText}>Pulseiras</Text>
                <FlatList
                    data={productList}
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


                <Text style={styles.movieText}>Cordões</Text>
                <FlatList
                    data={productList}
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

                <Text style={styles.movieText}>Brincos</Text>
                <FlatList
                    data={productList}
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

    amazonLogoImg: {
        width: "100%",
        height: "100%"

    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 0,
        marginBottom: 15,
    },

    categoryText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF"
    },

    movieText:{
        fontSize: 18,
        fontWeight: "700",
        color: "#FFF",
        padding: 15
    },

    movieImageThumbnail: {
        width: "100%",
        alignItems: "center"
    },

    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },

    contentMovies: {

    }
});

export default HomeScreen;