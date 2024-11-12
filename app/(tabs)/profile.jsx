import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Profile = () => {
  const user = {
    name: 'Rico',
    email: 'JamesBryleRico@gmail.com',
    phone: '123-456-7890',
    profileImage: require('../../assets/images/prof.jpg'), // Replace with your image
  };

  const deliveryHistory = [
    { id: 1, date: '2024-01-15', order: 'Burger & Fries', status: 'Delivered' },
    { id: 2, date: '2024-01-10', order: 'Pizza', status: 'Delivered' },
    { id: 3, date: '2024-01-05', order: 'Sushi', status: 'Cancelled' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
        <Text style={styles.profilePhone}>{user.phone}</Text>
      </View>

      {/* Delivery History Section */}
      <View style={styles.historySection}>
        <Text style={styles.historyTitle}>Delivery History</Text>
        {deliveryHistory.map((item) => (
          <View key={item.id} style={styles.historyItem}>
            <Text style={styles.historyDate}>{item.date}</Text>
            <Text style={styles.historyOrder}>{item.order}</Text>
            <Text style={styles.historyStatus}>{item.status}</Text>
          </View>
        ))}
      </View>

      {/* Settings Button */}
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsButtonText}>Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
  },
  profilePhone: {
    fontSize: 16,
    color: '#777',
  },
  historySection: {
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  historyDate: {
    fontSize: 14,
    color: '#999',
  },
  historyOrder: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyStatus: {
    fontSize: 14,
    color: '#4CAF50', // Green for delivered, can change based on status
  },
  settingsButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ff6347',
    alignItems: 'center',
  },
  settingsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile;


