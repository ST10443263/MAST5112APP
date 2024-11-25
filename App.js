import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './FoodPage'; // Make sure this path is correct
import Reservation from './Reservation'; // Make sure this path is correct

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Food">
        <Stack.Screen name="FoodPage" component={FoodPage} />
        <Stack.Screen name="Reservation" component={Reservation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
