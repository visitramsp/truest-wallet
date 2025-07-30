import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const ProductList = ({item }) => {
  console.log(item,"item");
  
  return (
    <View style={styles.card}>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>-15%</Text>
      </View>
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg' }}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart" size={24} color="#555" />
      </TouchableOpacity>
     <View style={{paddingHorizontal: 10,paddingBottom:10}}>
       <View style={styles.ratingContainer}>
        {Array(5).fill(0).map((_, i) => (
          <Icon key={i} name="star" size={16} color="#FFD700" />
        ))}
        <Text style={styles.ratingCount}>(10)</Text>
      </View>
      <Text style={styles.brand}>Sitlly</Text>
      <Text style={styles.title}>Sport Dress</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>22 ₹</Text>
        <Text style={styles.discountedPrice}>19 ₹</Text>
      </View>
     </View>
    </View>
  );
};
export default ProductList;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: '#fff',
    borderRadius: 12,
    // padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    // margin: 10,
    position: 'relative',
  },
  discountBadge: {
    backgroundColor: '#E53935',
    position: 'absolute',
    top: 8,
    left: 8,
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6,
    zIndex: 2,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  heartIcon: {
    position: 'absolute',
    bottom: 80,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingCount: {
    marginLeft: 4,
    color: '#555',
    fontSize: 12,
  },
  brand: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    marginRight: 6,
  },
  discountedPrice: {
    color: '#E53935',
    fontWeight: 'bold',
  },
});




// https://www.figma.com/design/63KIQdBzo10nDdasHmpM8C/E-Commerce-App-Design--Community-?node-id=2-1220&t=hyFZ8kkNHI9n6TrS-0