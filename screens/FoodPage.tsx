import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleCategory = (category: string) => {
    setSelectedCategory(prevCategory => (prevCategory === category ? null : category));
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Total Dishes: 22</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="menu" size={30} color="#000" />
        </TouchableOpacity>
        {showMenu && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => navigation.navigate('menupage')}>
              <Text style={styles.dropdownItem}>Menu Page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Logout')}>
              <Text style={styles.dropdownItem}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        {['Starters', 'Main Course', 'Dessert', 'All'].map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.navButton, selectedCategory === category && styles.activeNavButton]}
            onPress={() => toggleCategory(category)}
          >
            <Text style={styles.navButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Scrollable Category Container */}
      <ScrollView style={styles.categoryContainer}>
        {/* Starters */}
        {selectedCategory === 'Starters' && (
          <>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Tomato Bread Salsa</Text>
              <Text style={styles.priceText}>R50.50</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Shrimp Cocktails</Text>
              <Text style={styles.priceText}>R48.95</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Rosemary Salted Meat Ball</Text>
              <Text style={styles.priceText}>R65.30</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Hot Veg</Text>
              <Text style={styles.priceText}>R55.72</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Kiwi Cold Teaser</Text>
              <Text style={styles.priceText}>R39.50</Text>
            </View>
          </>
        )}

        {/* Main Course */}
        {selectedCategory === 'Main Course' && (
          <>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Big King Beef Burger</Text>
              <Text style={styles.priceText}>R79.99</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Big King Beef Burger XXL</Text>
              <Text style={styles.priceText}>R120.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Margherita Pizza</Text>
              <Text style={styles.priceText}>R57.75</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Fetaroni Pizza</Text>
              <Text style={styles.priceText}>R72.85</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Arrabiatta Pasta</Text>
              <Text style={styles.priceText}>R95.69</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Alfredo Pasta</Text>
              <Text style={styles.priceText}>R112.25</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Sweet Chilli Twister Wrap</Text>
              <Text style={styles.priceText}>R45.65</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Wrapsta Wrap</Text>
              <Text style={styles.priceText}>R72.99</Text>
            </View>
          </>
        )}

        {/* Dessert */}
        {selectedCategory === 'Dessert' && (
          <>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Chocolate Cupcake</Text>
              <Text style={styles.priceText}>R25.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Red Velvet Muffin</Text>
              <Text style={styles.priceText}>R19.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Carrot Cake</Text>
              <Text style={styles.priceText}>R35.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Blueberry Croissant</Text>
              <Text style={styles.priceText}>R20.00</Text>
            </View>
          </>
        )}

        {/* All */}
        {selectedCategory === 'All' && (
          <>
          <View style={styles.box}>
              <Text style={styles.subItemText}>Chocolate Cupcake</Text>
              <Text style={styles.priceText}>R25.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Red Velvet Muffin</Text>
              <Text style={styles.priceText}>R19.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Carrot Cake</Text>
              <Text style={styles.priceText}>R35.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Blueberry Croissant</Text>
              <Text style={styles.priceText}>R20.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Big King Beef Burger</Text>
              <Text style={styles.priceText}>R79.99</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Big King Beef Burger XXL</Text>
              <Text style={styles.priceText}>R120.00</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Margherita Pizza</Text>
              <Text style={styles.priceText}>R57.75</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Fetaroni Pizza</Text>
              <Text style={styles.priceText}>R72.85</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Arrabiatta Pasta</Text>
              <Text style={styles.priceText}>R95.69</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Alfredo Pasta</Text>
              <Text style={styles.priceText}>R112.25</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Sweet Chilli Twister Wrap</Text>
              <Text style={styles.priceText}>R45.65</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Wrapsta Wrap</Text>
              <Text style={styles.priceText}>R72.99</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Tomato Bread Salsa</Text>
              <Text style={styles.priceText}>R50.50</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Shrimp Cocktails</Text>
              <Text style={styles.priceText}>R48.95</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Rosemary Salted Meat Ball</Text>
              <Text style={styles.priceText}>R65.30</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Hot Veg</Text>
              <Text style={styles.priceText}>R55.72</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.subItemText}>Kiwi Cold Teaser</Text>
              <Text style={styles.priceText}>R39.50</Text>
            </View>
          </>
        )}

        {/* Chef Button */}
        <TouchableOpacity style={styles.chefButton} onPress={() => navigation.navigate('loginpage')}>
          <Text style={styles.chefButtonText}>Chef</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E5D8',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#C5CBC5',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#FFF3E0',
    borderRadius: 5,
    elevation: 1,
  },
  dropdownItem: {
    padding: 10,
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '342D31',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  activeNavButton: {
    backgroundColor: '#393739',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryContainer: {
    padding: 20,
  },
  box: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#FFF3E0',
    borderRadius: 5,
    elevation: 1, // Adds a shadow effect
  },
  subItemText: {
    fontSize: 18, // Increased text size
    color: '#333',
  },
  priceText: {
    fontSize: 16, // Increased text size
    color: 'green',
  },
  chefButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#373737',
    borderRadius: 5,
    alignItems: 'center',
  },
  chefButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MenuScreen;