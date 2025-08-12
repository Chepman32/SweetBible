import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CountriesScreen from '../screens/CountriesScreen';
import StoreScreen from '../screens/StoreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { theme } from '../theme/theme';
import { TabHome, TabStore, TabSettings, TabSweet } from '../components/Icons';
import { useTranslation } from '../hooks/useTranslation';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { t } = useTranslation();
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
        options={{ tabBarLabel: t('navigation.home'), tabBarIcon: ({ color }) => <TabHome color={color} /> }}
      />
      <Tab.Screen
        name="CountriesTab"
        component={CountriesScreen}
        options={{ tabBarLabel: t('navigation.countries'), tabBarIcon: ({ color }) => <TabSweet color={color} /> }}
      />
      <Tab.Screen
        name="StoreTab"
        component={StoreScreen}
        options={{ tabBarLabel: t('navigation.store'), tabBarIcon: ({ color }) => <TabStore color={color} /> }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{ tabBarLabel: t('navigation.settings'), tabBarIcon: ({ color }) => <TabSettings color={color} /> }}
      />
    </Tab.Navigator>
  );
}


