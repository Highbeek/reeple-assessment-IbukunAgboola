import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalletScreen from './WalletScreen';

const Stack = createNativeStackNavigator();

export default function WalletStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
    </Stack.Navigator>
  );
}
