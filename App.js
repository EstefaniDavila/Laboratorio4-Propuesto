import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import ConexionFetch from './components/conexionFetch/ConexionFetch';
import Detalles from './components/Detalles/Detalles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConexionFetch">
        <Stack.Screen name="CARTELERA" component={ConexionFetch} />
        <Stack.Screen name="Detalles" component={Detalles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;