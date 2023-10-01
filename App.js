import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductInfo from './screens/ProductInfo/ProductInfo';
import ContactScreen from './screens/ContactScreen/ContactScreen';

const Stack = createStackNavigator();

export default function App() {
  const [productInfo, setProductInfo] = useState({});

  const getInfoProduct = (product) => {
    setProductInfo(product);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Info" component={ProductInfo} initialParams={{ product: productInfo }} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} getInfoProduct={getInfoProduct} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
