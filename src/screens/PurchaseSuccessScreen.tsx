import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';
import { theme } from '../theme/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Success'>;

export default function PurchaseSuccessScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Svg width={200} height={200} viewBox="0 0 200 200">
          <Circle cx={100} cy={100} r={80} fill={theme.colors.secondary} />
          <Path d="M70 100l20 20 40-40" stroke="#FFD36B" strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </View>
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.sub}>You’ve unlocked SweetBible Pro</Text>
      <Pressable onPress={() => navigation.replace('Home')} style={styles.cta}>
        <Text style={styles.ctaText}>OK</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, alignItems: 'center', justifyContent: 'center', padding: theme.spacing(2) },
  hero: { marginBottom: theme.spacing(3) },
  title: { fontSize: 32, fontWeight: '900', color: theme.colors.primary },
  sub: { marginTop: 6, color: theme.colors.textPrimary },
  cta: { marginTop: theme.spacing(4), backgroundColor: theme.colors.primary, paddingVertical: 14, paddingHorizontal: 36, borderRadius: 28 },
  ctaText: { color: 'white', fontWeight: '800', fontSize: 18 },
});


