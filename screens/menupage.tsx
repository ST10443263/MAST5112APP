import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { BiteIntoBliss } from '../navigation';

const bibImage = require('../assets/images/BIB2.png');
type NavigationProp = NativeStackNavigationProp<BiteIntoBliss, 'menupage' | 'food'>;

const Menupage = () => {
  const navigation = useNavigation<NavigationProp>();

  // State for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // State for error message

  // Function to handle first login button
  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError(null); // Clear any previous error
    navigation.navigate('loginpage');
  };

  // Function to handle second login button (Menu)
  const handleSecondLogin = () => {
    // Navigate to the 'foodpage' where food.tsx will be displayed
    navigation.navigate('food');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.pagecontainer}>
        {/* Add Image on Top */}
        <Image source={bibImage} style={styles.image} />

        <Text style={styles.nameheader}>Bite Into Bliss</Text>
      </SafeAreaView>

      <View style={styles.card}>
        {/* Email Input Field */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input Field */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        {/* Display Error Message */}
        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* First Login Button */}
        <TouchableOpacity style={styles.Login} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Second Button (Menu Button) */}
        <TouchableOpacity style={styles.secondLogin} onPress={handleSecondLogin}>
          <Text style={styles.buttonText}>Food Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  pagecontainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  nameheader: {
    fontSize: 37,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  Login: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10, // Spacing between the buttons
  },
  secondLogin: {
    backgroundColor: '#373737',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Menupage;