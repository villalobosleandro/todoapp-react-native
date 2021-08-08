import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './../screens/HomeScreen'
import { CreateTaskScreen } from './..//screens/CreateTaskScreen'

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
     <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
     >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create" component={CreateTaskScreen} />
      </Stack.Navigator>
   </NavigationContainer>
)