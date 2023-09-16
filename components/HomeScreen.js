import { View,Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import AmazonLogo from '../assets/loa.png';
import ProductItem from './ProdutoComponent';
import MovieTheWhell from '../assets/the_wheel_of_time.png';


const productList = [
    {
      id: '1',
      name: 'Produto 1',
      price: 19.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '2',
      name: 'Produto 2',
      price: 29.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '3',
      name: 'Produto 3',
      price: 14.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '4',
      name: 'Produto 4',
      price: 39.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '5',
      name: 'Produto 5',
      price: 24.99,
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
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
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>

            <View style={styles.category} >
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Contato</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Blablabla</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Blablabla</Text>
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
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    header: {
        width: "100%",
        padding: 80,
        marginTop: -210,
        alignItems: "center",
        justifyContent: "center",
    },

    amazonLogoImg: {
        marginTop: 80,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: -70,
        marginBottom: 15,
    },

    categoryText: {
        fontSize: 14,
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