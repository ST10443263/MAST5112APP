import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import WheelPickerExpo from 'react-native-wheel-picker-expo';

const MainPage = ({ navigation }: any) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');

  const categories = ['Starter', 'Main meal', 'Dessert'];

  const handleAddDish = () => {
    // Validate inputs
    if (!dishName || !dishDescription || !dishPrice) {
      Alert.alert('Error', 'Please fill in all fields before submitting.');
      return;
    }

    // Navigate to AddPage with data
    navigation.navigate('Addpage', {
      category: categories[selectedCategory],
      dishName,
      dishDescription,
      dishPrice,
    });
  };

  return (
    <View style={styles.container}>
      {/* Add the Heading */}
      <Text style={styles.heading}>BiteIntoBliss</Text>

      <Text style={styles.title}>Select a Category</Text>
      <WheelPickerExpo
        height={150}
        width={200}
        items={categories.map((item, index) => ({ label: item, value: index }))}
        selectedValue={selectedCategory}
        onChange={(value) => setSelectedCategory(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        value={dishDescription}
        onChangeText={setDishDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Price"
        value={dishPrice}
        onChangeText={setDishPrice}
        keyboardType="numeric"
      />

      {/* Custom Button */}
      <TouchableOpacity style={styles.button} onPress={handleAddDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080', // Set background color
  },
  heading: {
    fontSize: 28, // Larger font size for the heading
    fontWeight: 'bold', // Make it bold
    color: '#000', // Black color
    marginBottom: 68, // Add space below the heading
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000', // Text color black
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#171717',
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#cccccc', // Input background gray (#cccccc)
  },
  button: {
    backgroundColor: '#000', // Black button
    paddingVertical: 15, // Increase button height
    paddingHorizontal: 30, // Increase button width
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 18, // Slightly larger text
    fontWeight: 'bold',
  },
});

export default MainPage;
