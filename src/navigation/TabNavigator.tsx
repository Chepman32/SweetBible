import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CountriesScreen from '../screens/CountriesScreen';
import StoreScreen from '../screens/StoreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { theme } from '../theme/theme';
import { TabHome, TabStore, TabSettings, TabSweet } from '../components/Icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: { backgroundColor: theme.colors.surface, borderTopColor: '#E8E6E3' },
        tabBarLabelStyle: { fontWeight: '700' },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => <TabHome color={color} /> }}
      />
      <Tab.Screen
        name="CountriesTab"
        component={CountriesScreen}
        options={{ tabBarLabel: 'Countries', tabBarIcon: ({ color }) => <TabSweet color={color} /> }}
      />
      <Tab.Screen
        name="StoreTab"
        component={StoreScreen}
        options={{ tabBarLabel: 'Store', tabBarIcon: ({ color }) => <TabStore color={color} /> }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings', tabBarIcon: ({ color }) => <TabSettings color={color} /> }}
      />
    </Tab.Navigator>
  );
}


