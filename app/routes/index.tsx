import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabBarNavigator from './AppNavigator';
import WalletStack from '../screens/wallet';
import WelcomeScreen from '../screens/auth/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<any> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="welcome">
      <Stack.Screen
        name="TabScreens"
        component={BottomTabBarNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
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
