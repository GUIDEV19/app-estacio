import { View,Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import AmazonLogo from '../assets/loa.png';
import ProductItem from './ProdutoComponent';



const productList = [
    {
      id: '1',
      name: 'Produto 1',
      price: 19.99,
      imageUrl: 'https://static.wixstatic.com/media/fc9aa0_eeaa8cb6482141f585acedeb1db7e95a~mv2.jpg/v1/fill/w_276,h_490,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fc9aa0_eeaa8cb6482141f585acedeb1db7e95a~mv2.jpg',
    },
    {
      id: '2',
      name: 'Produto 2',
      price: 29.99,
      imageUrl: 'https://static.wixstatic.com/media/fc9aa0_44cdf0fe24234de9a5e4567bebbb475c~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc9aa0_44cdf0fe24234de9a5e4567bebbb475c~mv2.jpg',
    },
    {
      id: '3',
      name: 'Produto 3',
      price: 14.99,
      imageUrl: 'https://static.wixstatic.com/media/fc9aa0_37914445dd7045868a44c5fedadab22d~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc9aa0_37914445dd7045868a44c5fedadab22d~mv2.jpg',
    },
    {
      id: '4',
      name: 'Produto 4',
      price: 39.99,
      imageUrl: 'https://static.wixstatic.com/media/fc9aa0_2a4a5c9aad834a7799385987127c0749~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc9aa0_2a4a5c9aad834a7799385987127c0749~mv2.jpg',
    },
    {
      id: '5',
      name: 'Produto 5',
      price: 24.99,
      imageUrl: 'https://static.wixstatic.com/media/fc9aa0_4fcafa840a204c76aa2e3276af0be793~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fc9aa0_4fcafa840a204c76aa2e3276af0be793~mv2.jpg',
    },
    {
      id: '6',
      name: 'Produto 6',
      price: 49.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '7',
      name: 'Produto 7',
      price: 9.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '8',
      name: 'Produto 8',
      price: 34.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '9',
      name: 'Produto 9',
      price: 19.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '10',
      name: 'Produto 10',
      price: 29.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '11',
      name: 'Produto 11',
      price: 14.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '12',
      name: 'Produto 12',
      price: 39.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '13',
      name: 'Produto 13',
      price: 24.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '14',
      name: 'Produto 14',
      price: 49.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '15',
      name: 'Produto 15',
      price: 9.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ];

  
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image resizeMode="contain" style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>

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
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Contato</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>


                
                <Text style={styles.movieText}>Aneis</Text>
                <FlatList
                        data={productList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                        <ProductItem
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
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
                        <ProductItem
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
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
                        <ProductItem
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
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
                        <ProductItem
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
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