import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HistoryScreen from './HistoryScreen';

const Stack = createNativeStackNavigator();

export default function HistoryStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
    </Stack.Navigator>
  );
}
