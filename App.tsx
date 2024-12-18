import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import loginpage from './screens/loginpage';
import menupage from './screens/menupage';
import FoodPage from './screens/FoodPage';
import Addpage from './screens/Addpage';
import Reservation from './screens/Reservation';
import Payment from './screens/Payment';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='menupage'>
        <Stack.Screen name='loginpage' component={loginpage}/>
        <Stack.Screen name='menupage' component={menupage} options={{headerShown: false}}/>
        <Stack.Screen name='food' component={FoodPage}/>
        <Stack.Screen name='Addpage' component={Addpage}/>
        <Stack.Screen name='Reservation' component={Reservation}/>
        <Stack.Screen name='Payment' component={Payment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});