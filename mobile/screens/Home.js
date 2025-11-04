import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const PRODUCTS = [
  { id: '1', name: 'Camiseta', price: 'R$ 49,90', description: 'Camiseta 100% algodão, confortável.' },
  { id: '2', name: 'Calça Jeans', price: 'R$ 129,90', description: 'Calça jeans com bom caimento.' },
  { id: '3', name: 'Tênis', price: 'R$ 199,90', description: 'Tênis leve para uso diário.' },
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details', { product: item })}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Produtos</Text>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
  item: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
