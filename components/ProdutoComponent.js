import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductItem = ({ name, price, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>R${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 5,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#FFF"

  },
  price: {
    fontSize: 14,
    color: "#FFF"

  },
});

export default ProductItem;
