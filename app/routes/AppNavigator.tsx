import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import {Image, Text, View} from 'react-native';
import {s} from 'react-native-size-matters';
import {wallet, history, exchange, settings, x} from '../assets/icons';
import {MainNavParamList} from '../types';
import ExchangeScreen from '../screens/exchange/ExchangeScreen';

import SettingsScreen from '../screens/settings/SettingsScreen';
import FinanceNewsScreen from '../screens/finance/FinanceNewsScreen';

const MainNav = createBottomTabNavigator<MainNavParamList>();

const TabBarLabel = ({focused, label}: {focused: boolean; label: string}) => (
  <Text
    style={{
      fontFamily: focused ? 'Trap-Bold' : 'Trap-Regular',
      color: focused ? '#061237' : '#ABAAAA',
      fontWeight: focused ? '600' : '400',
      fontSize: s(12),
      marginTop: s(20),
    }}>
    {label}
  </Text>
);

const TabBarIcon = ({focused, icon}: {focused: boolean; icon: any}) => (
  <Image
    source={icon}
    style={{
      width: 24,
      height: 24,
      tintColor: focused ? '##061237' : '#ABAAAA',
    }}
  />
);

const BottomNavigator = () => {
  return (
    <MainNav.Navigator
      initialRouteName="ExchangeTab"
      screenOptions={{
        tabBarStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          paddingTop: s(16),
          height: s(80),
        },
        tabBarShowLabel: true,
        headerShown: false,
      }}>
      <MainNav.Screen
        name="FinanceTab"
        component={FinanceNewsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Finance" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={wallet} />
          ),
        }}
      />

      <MainNav.Screen
        name="ExchangeTab"
        component={ExchangeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Exchange" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={exchange} />
          ),
        }}
      />

      <MainNav.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <TabBarLabel label="Settings" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={settings} />
          ),
        }}
      />
    </MainNav.Navigator>
  );
};

export default memo(BottomNavigator);
