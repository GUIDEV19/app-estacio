import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import ProductItem from './components/ProdutoComponent';

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




export default function App() {
  return (
    <View style={styles.container}>
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
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
