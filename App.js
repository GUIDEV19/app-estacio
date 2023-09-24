import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Lista from './components/Lista';
import FormProduto from './components/FormProduto';


export default function App() {
  return (
    <>
      <HomeScreen/>
    </>
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
