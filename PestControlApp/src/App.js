import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './context/UserContext';
import { PropertyProvider } from './context/PropertyContext';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PropertyScreen from './screens/PropertyScreen';
import ServiceScreen from './screens/ServiceScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <PropertyProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Property" component={PropertyScreen} />
            <Stack.Screen name="Service" component={ServiceScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PropertyProvider>
    </UserProvider>
  );
};

export default App;
