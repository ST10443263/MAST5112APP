// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BiteIntoBliss } from '../navigation'; // Adjust your navigation import

type NavigationProp = NativeStackNavigationProp<BiteIntoBliss, 'loginpage'>;

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    // Automatically navigate to the next page after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('loginpage'); // Navigate to your home page or another page
    }, 3000); // 3 seconds delay

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Background color for the splash screen
  },
  content: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
