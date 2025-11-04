import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Details({ route, navigation }) {
  const { product } = route.params || {};

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{product.name}</Text>
      <Text style={{ marginVertical: 8 }}>{product.price}</Text>
      <Text style={{ marginBottom: 16 }}>{product.description}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
