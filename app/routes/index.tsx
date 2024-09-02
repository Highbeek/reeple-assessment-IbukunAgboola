import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabBarNavigator from './AppNavigator';
import WalletStack from '../screens/finance';
import WelcomeScreen from '../screens/auth/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<any> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="TabScreens"
        component={BottomTabBarNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={WalletStack}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
