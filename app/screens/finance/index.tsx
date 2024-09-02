import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FinanceNewsScreen from './FinanceNewsScreen';

const Stack = createNativeStackNavigator();

export default function WalletStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FinanceNews" component={FinanceNewsScreen} />
    </Stack.Navigator>
  );
}
