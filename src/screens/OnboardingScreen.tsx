import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, ScrollView } from 'react-native';
import { theme } from '../theme/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useAppStore } from '../store/useAppStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  const setCompleted = useAppStore(s => s.setCompletedOnboarding);

  const onContinue = () => {
    setCompleted(true);
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <View style={styles.page}><Text style={styles.h1}>Welcome to SweetBible</Text><Text style={styles.sub}>Your pocket guide to the world's greatest sweets.</Text></View>
        <View style={styles.page}><Text style={styles.h1}>Explore Anywhere</Text><Text style={styles.sub}>All content is 100% offline.</Text></View>
        <View style={styles.page}>
          <Text style={styles.h1}>Unlock the Full Library</Text>
          <Text style={styles.sub}>Go Pro to access everything.</Text>
          <Pressable onPress={onContinue} style={styles.cta}><Text style={styles.ctaText}>Continue</Text></Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  page: {
    width,
    padding: theme.spacing(3),
    justifyContent: 'center',
  },
  h1: { fontSize: 24, fontWeight: '800', color: theme.colors.textPrimary, marginBottom: theme.spacing(1) },
  sub: { fontSize: 16, color: theme.colors.textSecondary },
  cta: { marginTop: theme.spacing(3), backgroundColor: theme.colors.primary, padding: theme.spacing(2), borderRadius: theme.radius.button, alignSelf: 'flex-start' },
  ctaText: { color: 'white', fontWeight: '700' },
});

