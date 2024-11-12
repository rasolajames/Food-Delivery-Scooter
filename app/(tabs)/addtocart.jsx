import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { styled } from 'nativewind';
import React, { useState } from 'react';

const StyledImageBackground = styled(ImageBackground);

const HomePage = () => {
  const [cart, setCart] = useState([]); // State for managing cart items
  const router = useRouter(); // Initialize the router for navigation

  const addToCart = (item) => {
    setCart([...cart, item]); // Add item to cart
    Alert.alert("Added to Cart", `${item.title} has been added to your cart.`);
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      Alert.alert("Cart is Empty", "Please add items to your cart before proceeding to checkout.");
    } else {
      // Navigate to checkout page with the cart items
      router.push({
        pathname: '/checkout', 
        params: { cart: JSON.stringify(cart) } // Pass the cart as a parameter
      });
    }
  };

  return (
    <StyledImageBackground
      source={require('../../assets/images/fods.jpg')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Favorite Items</Text>

        <ScrollView style={styles.menuContainer} contentContainerStyle={styles.scrollContainer}>
          {/* Menu Items */}
          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/nac.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Special Nachos</Text>
            <Text style={styles.itemPrice}>₱100</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Special Nachos', price: 100 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/pizza.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Pepperoni Pizza</Text>
            <Text style={styles.itemPrice}>₱150</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Pepperoni Pizza', price: 150 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/kingcrab.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>King Crab</Text>
            <Text style={styles.itemPrice}>₱20,000</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'King Crab', price: 20000 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/coke.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Coke</Text>
            <Text style={styles.itemPrice}>₱100</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Coke', price: 100 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/sprite.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Sprite</Text>
            <Text style={styles.itemPrice}>₱100</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Sprite', price: 100 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <Image source={require('../../assets/images/fanta.jpg')} style={styles.image} />
            <Text style={styles.itemTitle}>Fanta</Text>
            <Text style={styles.itemPrice}>₱100</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => addToCart({ title: 'Fanta', price: 100 })}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Proceed to Checkout Button */}
        <TouchableOpacity 
          style={styles.checkoutButton} 
          onPress={proceedToCheckout}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </StyledImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Softer white background with slight transparency
    padding: 20,
    borderRadius: 30, // Rounded corners for a softer look
    alignItems: 'center',
    width: '90%',
    height: '90%',
  },
  title: {
    fontSize: 28, // Slightly smaller title
    fontWeight: '600', // Semi-bold font
    color: '#333', // Darker color for readability
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center', // Center items within scroll
  },
  menuContainer: {
    width: '100%',
  },
  menuItem: {
    backgroundColor: '#f7f7f7', // Light gray for a clean, modern look
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '90%', // Narrower for a centered look
    alignItems: 'center',
    shadowColor: '#ccc', // Soft shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18, // Smaller font for titles
    fontWeight: '500',
    color: '#555', // Muted dark color for text
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#007BFF', // Use a soft blue for price to contrast
  },
  button: {
    backgroundColor: '#FF6F61', // Soft coral color for a friendly feel
    padding: 10,
    borderRadius: 20, // Fully rounded button for a modern touch
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  checkoutButton: {
    backgroundColor: '#28a745', // Soft green for checkout button
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomePage;
