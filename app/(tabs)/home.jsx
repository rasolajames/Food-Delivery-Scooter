import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, title: 'Meat Pizza', image: require('../../assets/images/veg.jpg') },
    { id: 2, title: 'Veg Pizza', image: require('../../assets/images/pizza.jpg') },
    { id: 3, title: 'Ham Pizza', image: require('../../assets/images/ham.jpg') },
    { id: 4, title: 'Sprite', image: require('../../assets/images/sprite.jpg') },
    { id: 5, title: 'Fanta', image: require('../../assets/images/fanta.jpg') },
  ];

  const popularItems = [
    { id: 1, title: 'King Crab', image: require('../../assets/images/kingcrab.jpg') },
    { id: 2, title: 'Deluxe Burger', image: require('../../assets/images/best.jpg') },
    { id: 3, title: 'Nachos', image: require('../../assets/images/nac.jpg') },
  ];

  const specialOffers = [
    { id: 1, title: '50% Off on Pizza', image: require('../../assets/images/pizza.jpg') },
    { id: 2, title: 'Buy 1 Get 1 Free', image: require('../../assets/images/burgerr.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
     
      

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for food..."
          placeholderTextColor="#aaa"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <TouchableOpacity>
          <Image source={require('../../assets/images/search.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Delicious Meals, Fast Delivery!</Text>
        <Image source={require('../../assets/images/fods.jpg')} style={styles.bannerImage} />
      </View>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Popular Items Section */}
      <Text style={styles.sectionTitle}>Popular Picks</Text>
      <View style={styles.popularContainer}>
        {popularItems.map((item) => (
          <View key={item.id} style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularItemTitle}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* Special Offers Section */}
      <Text style={styles.sectionTitle}>Special Offers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.offersScrollView}>
        {specialOffers.map((offer) => (
          <TouchableOpacity key={offer.id} style={styles.offerItem}>
            <Image source={offer.image} style={styles.offerImage} />
            <Text style={styles.offerText}>{offer.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 4,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  bannerContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ff6f61',
    borderRadius: 15,
    margin: 20,
  },
  bannerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 20,
  },
  categoryItem: {
    width: 100,
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  popularContainer: {
    marginHorizontal: 20,
  },
  popularItem: {
    marginBottom: 20,
  },
  popularImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  popularItemTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  offersScrollView: {
    marginTop: 10,
  },
  offerItem: {
    marginRight: 15,
  },
  offerImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  offerText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
