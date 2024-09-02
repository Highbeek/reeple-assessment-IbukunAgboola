import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './app/routes';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigator />
        <Toast />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
