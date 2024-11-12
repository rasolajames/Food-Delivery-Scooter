import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const AboutUs = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>About Us</Text>
      </View>

      {/* Company Overview */}
      <View style={styles.section}>
        <Image source={require('../../assets/images/company.png')} style={styles.sectionImage} />
        <Text style={styles.title}>Who We Are</Text>
        <Text style={styles.description}>
          At Foodie, we’re passionate about delivering more than just food. We aim to provide a seamless, fast, and delicious experience that brings people closer to the flavors they love, right from local restaurants to their doorstep.
        </Text>
      </View>

      {/* Mission Section */}
      <View style={styles.sectionAlt}>
        <Text style={styles.title}>Our Mission</Text>
        <Text style={styles.description}>
          Our mission is simple: to deliver the best food from local eateries to your door, all while ensuring speed, safety, and a delightful customer experience. We believe that food delivery should be as enjoyable as dining in your favorite restaurant.
        </Text>
      </View>

      {/* Delivery Driver Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Meet Our Drivers</Text>
        <Image source={require('../../assets/images/company.png')} style={styles.sectionImage} />
        <Text style={styles.description}>
          Our drivers are the heart of our business, ensuring every meal arrives fresh and on time. Trained with the best practices in safety and customer service, they go the extra mile to bring you a smile with every delivery.
        </Text>
      </View>

      {/* Our Values */}
      <View style={styles.sectionAlt}>
        <Text style={styles.title}>Our Core Values</Text>
        <Text style={styles.description}>
          At the core of everything we do are values that reflect our commitment to quality:
        </Text>
        <Text style={styles.bulletPoint}>• Freshness: We prioritize fresh, locally sourced ingredients.</Text>
        <Text style={styles.bulletPoint}>• Reliability: We deliver on time, every time.</Text>
        <Text style={styles.bulletPoint}>• Customer Focus: Your satisfaction drives our efforts.</Text>
      </View>

      {/* Join Us */}
      <View style={styles.section}>
        <Text style={styles.title}>Join Our Team</Text>
        <Text style={styles.description}>
          We’re always looking for passionate individuals who share our love for food and service. If you’re interested in being a part of the Foodie family, we’d love to hear from you!
        </Text>
        <Image source={require('../../assets/images/company.png')} style={styles.sectionImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 25,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionAlt: {
    marginBottom: 25,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff5e6',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6f61',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 10,
    color: '#333',
  },
  sectionImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default AboutUs;
