import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const toggleCategory = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSelectDish = (dish) => {
    setSelectedDishes((prevDishes) =>
      prevDishes.includes(dish)
        ? prevDishes.filter((item) => item !== dish)
        : [...prevDishes, dish]
    );
  };

  const handleReserve = () => {
    if (selectedDishes.length === 0) {
      Alert.alert('Error', 'You must select at least one dish to proceed!');
    } else {
      navigation.navigate('Reservation', { selectedDishes });
    }
  };

  const dishes = {
    Starters: [
      { name: 'Tomato Bread Salsa', price: 50.5, image: require('../assets/images/1Tomato.jpg') },
      { name: 'Shrimp Cocktails', price: 48.95, image: require('../assets/images/2Shrimp.jpg') },
      { name: 'Rosemary Salted Meat Ball', price: 65.3, image: require('../assets/images/3Rosemary.jpg') },
      { name: 'Hot Veg', price: 55.72, image: require('../assets/images/4Hot veg.jpg') },
      { name: 'Kiwi Cold Teaser', price: 39.5, image: require('../assets/images/5Kiwi.jpg') },
    ],
    'Main Course': [
      { name: 'Big King Beef Burger', price: 79.99, image: require('../assets/images/1Big king.jpg') },
      { name: 'Big King Beef Burger XXL', price: 120.0, image: require('../assets/images/2BigKing.jpg') },
      { name: 'Margherita Pizza', price: 57.75, image: require('../assets/images/3Magaritha.jpg') },
      { name: 'Fetaroni Pizza', price: 72.85, image: require('../assets/images/4Feteroni.jpg') },
      { name: 'Arrabiatta Pasta', price: 95.69, image: require('../assets/images/5Arabiata.jpg') },
      { name: 'Alfredo Pasta', price: 112.25, image: require('../assets/images/6Alfredo.jpg') },
      { name: 'Sweet Chilli Twister Wrap', price: 45.65, image: require('../assets/images/7Sweet.jpg') },
      { name: 'Wrapsta Wrap', price: 72.99, image: require('../assets/images/8Hot.jpg') },
    ],
    Dessert: [
      { name: 'Chocolate Cupcake', price: 25.0, image: require('../assets/images/1Chocolate.jpg') },
      { name: 'Red Velvet Muffin', price: 19.0, image: require('../assets/images/2Red.jpg') },
      { name: 'Carrot Cake', price: 35.0, image: require('../assets/images/3Carrot.jpg') },
      { name: 'Blueberry Croissant', price: 20.0, image: require('../assets/images/4Blue.jpg') },
    ],
  };

  const renderDishes = () => {
    const filteredDishes = selectedCategory
      ? dishes[selectedCategory] || []
      : Object.values(dishes).flat();

    return filteredDishes.map((dish, index) => (
      <View key={index} style={styles.card}>
        <ImageBackground source={dish.image} style={styles.image} imageStyle={{ borderRadius: 10 }}>
          <View style={styles.cardOverlay}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishPrice}>R{dish.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={[styles.selectButton, selectedDishes.includes(dish.name) && styles.selected]}
              onPress={() => handleSelectDish(dish.name)}
            >
              <Text style={styles.buttonText}>
                {selectedDishes.includes(dish.name) ? 'Selected' : 'Select'}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    ));
  };

  const totalItems = Object.values(dishes).flat().length;
  const averagePrice = (
    Object.values(dishes).flat().reduce((sum, dish) => sum + dish.price, 0) / totalItems
  ).toFixed(2);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Total Items: {totalItems} | Avg Price: R{averagePrice}
        </Text>
      </View>

      {/* Category Selector */}
      <ScrollView horizontal style={styles.categorySelector} showsHorizontalScrollIndicator={false}>
        {['Starters', 'Main Course', 'Dessert', 'All'].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonActive]}
            onPress={() => toggleCategory(category === 'All' ? null : category)}
          >
            <Text style={[styles.categoryButtonText, selectedCategory === category && styles.categoryButtonTextActive]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Dish List */}
      <ScrollView contentContainerStyle={styles.dishesContainer}>
        {renderDishes()}
      </ScrollView>

      {/* Reserve Button */}
      <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
        <Text style={styles.reserveButtonText}>Reserve ({selectedDishes.length})</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 15,
    backgroundColor: '#292929',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categorySelector: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    backgroundColor: '#171717',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  categoryButtonActive: {
    backgroundColor: '#666666',
  },
  categoryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  dishesContainer: {
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    justifyContent: 'flex-end',
  },
  cardOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  dishName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  dishPrice: {
    fontSize: 16,
    color: 'white',
    marginVertical: 5,
  },
  selectButton: {
    backgroundColor: '#292929',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  selected: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  reserveButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#000',
    paddingVertical: 15,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
