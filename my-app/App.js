import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

//funcao do navegation
const Stack = createStackNavigator();

const App = () => {
  return (
    //recipiente para as telas
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        {/* telas para navegacao */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
