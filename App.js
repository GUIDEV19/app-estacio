import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import  ProductInfo  from './screens/ProductInfo/index.js';
import React, { useEffect, useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Informações do Produto">
        <Stack.Screen name="Informações do Produto" component={ProductInfo} initialParams={{idProduct: 1}}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
