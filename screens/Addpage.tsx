import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddPage = ({ route }: any) => {
  const { category, dishName, dishDescription, dishPrice } = route.params;

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.title}>Dish Details</Text>

      {/* Slots for each detail */}
      <View style={styles.slot}>
        <Text style={styles.slotText}>Category: {category}</Text>
      </View>
      <View style={styles.slot}>
        <Text style={styles.slotText}>Dish Name: {dishName}</Text>
      </View>
      <View style={styles.slot}>
        <Text style={styles.slotText}>Dish Description: {dishDescription}</Text>
      </View>
      <View style={styles.slot}>
        <Text style={styles.slotText}>Dish Price: R{dishPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#808080', // Page background color
  },
  title: {
    fontSize: 28, // Larger font for the title
    fontWeight: 'bold', // Bold text
    color: '#000', // Black color
    textAlign: 'center',
    marginBottom: 40,
  },
  slot: {
    width: '100%',
    backgroundColor: '#cccccc', // Slot background color
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
  },
  slotText: {
    fontSize: 18, // Bigger font size
    fontWeight: '500', // Medium font weight
    color: '#000', // Black text
  },
});

export default AddPage;
