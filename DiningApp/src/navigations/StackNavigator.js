import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FoodScreen, FoodDetails,ProductDetails } from '../screens';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={BottomTabs} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;