import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import SweetDetailScreen from '../screens/SweetDetailScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StoreScreen from '../screens/StoreScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import PurchaseSuccessScreen from '../screens/PurchaseSuccessScreen';
import { useTranslation } from '../hooks/useTranslation';
import TabNavigator from './TabNavigator';
import CountriesScreen from '../screens/CountriesScreen';
import CountryDetailScreen from '../screens/CountryDetailScreen';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Home: undefined;
  SweetDetail: { id: string };
  Search: undefined;
  Favorites: undefined;
  Settings: undefined;
  Store: undefined;
  Notifications: undefined;
  Success: undefined;
  Countries: undefined;
  CountryDetail: { country: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen
        name="SweetDetail"
        component={SweetDetailScreen}
        options={{ headerShown: true, title: '', headerTransparent: true }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Store" component={StoreScreen} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: true, title: t('settings.notifications') }}
      />
      <Stack.Screen name="Success" component={PurchaseSuccessScreen} />
      <Stack.Screen name="Countries" component={CountriesScreen} />
      <Stack.Screen
        name="CountryDetail"
        component={CountryDetailScreen}
        options={{ headerShown: true, headerTitleAlign: 'left' }}
      />
    </Stack.Navigator>
  );
}

