import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { BiteIntoBliss } from '../navigation';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

type NavigationProp = NativeStackNavigationProp<BiteIntoBliss, 'menupage'>;

const Menupage = () => {
  const navigation = useNavigation<NavigationProp>();

  // State for selected option
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // State for dish details
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishes, setDishes] = useState<Array<{ name: string; price: string; description: string; type: string | null }>>([]);

  // Function to handle form submission
  const handleSubmit = () => {
    if (!dishName || !dishPrice || !dishDescription || !selectedOption) {
      alert('Please fill out all fields and select an option.');
      return;
    }

    // Add the new dish to the dishes array, including the selectedOption as the type
    const newDish = { name: dishName, price: dishPrice, description: dishDescription, type: selectedOption };
    setDishes([...dishes, newDish]);

    // Reset the input fields
    setDishName('');
    setDishPrice('');
    setDishDescription('');
    setSelectedOption(null);
  };

  // Function to handle form reset (clearing all added dishes)
  const handleResetAll = () => {
    setDishes([]); // Clear all dishes
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.pagecontainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('menupage')}>
            <Icon name="arrow-back" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.nameheader}>Bite Into Bliss</Text>
          {/* Placeholder for the right side (can be an icon or anything) */}
          <View style={{ width: 30 }} />
        </View>
      </SafeAreaView>

      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedOption(value)}
          items={[
            { label: 'Starter', value: 'Starter' },
            { label: 'Main Course', value: 'Main Course' },
            { label: 'Dessert and Drinks', value: 'Dessert and Drinks' },
          ]}
          placeholder={{ label: 'Please select an Option...', value: null }}
          value={selectedOption}
        />
      </View>

      <View style={styles.card}>
        {/* Dish Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dishName}
          onChangeText={setDishName}
        />

        {/* Dish Price Input */}
        <TextInput
          style={styles.input}
          placeholder="Dish Price"
          value={dishPrice}
          onChangeText={setDishPrice}
          keyboardType="numeric"
        />

        {/* Dish Description Input */}
        <TextInput
          style={styles.input}
          placeholder="Dish Description"
          value={dishDescription}
          onChangeText={setDishDescription}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>

        {/* Reset All Dishes Button */}
        <TouchableOpacity style={styles.button} onPress={handleResetAll}>
          <Text style={styles.buttonText}>Remove All Dishes</Text>
        </TouchableOpacity>

        {/* Display all added dishes */}
        {dishes.length > 0 && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultHeader}>Dishes Added:</Text>
            {dishes.map((dish, index) => (
              <View key={index} style={styles.dishItem}>
                <Text style={styles.resultText}>
                  {index + 1}. {dish.name}
                </Text>
                <Text style={styles.resultText}>Price: R{dish.price}</Text>
                <Text style={styles.resultText}>Description: {dish.description}</Text>
                <Text style={styles.resultText}>Type: {dish.type}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

     
        
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
  },
  pagecontainer: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameheader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    padding: 20,
    backgroundColor: 'silver',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  viewFullMenuButton: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '80%',
  },
});

export default Menupage;
