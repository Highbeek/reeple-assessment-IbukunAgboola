import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExchangeScreen from './ExchangeScreen';

const Stack = createNativeStackNavigator();

export default function ExchangeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ExchangeScreen" component={ExchangeScreen} />
    </Stack.Navigator>
  );
}
