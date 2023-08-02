import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import AdminScreen from '../screens/Admin/AdminScreen';
import PropertyScreen from '../screens/Property/PropertyScreen';
import ServiceScreen from '../screens/Service/ServiceScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="Property" component={PropertyScreen} />
      <Stack.Screen name="Service" component={ServiceScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
