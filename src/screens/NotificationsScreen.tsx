import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Circle } from 'react-native-svg';
import { theme } from '../theme/theme';

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.card}>
        <Svg width={100} height={100} viewBox="0 0 100 100">
          <Path d="M20 70h60l-6-10V44a24 24 0 10-48 0v16l-6 10z" fill="#C7C3BC" />
          <Circle cx={50} cy={76} r={8} fill="#C7C3BC" />
        </Svg>
        <Text style={styles.empty}>No notifications</Text>
        <Text style={styles.sub}>You’re all up to date!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  title: { fontSize: 34, fontWeight: '900', color: theme.colors.textPrimary, padding: theme.spacing(2) },
  card: {
    margin: theme.spacing(2),
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.card,
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  empty: { marginTop: theme.spacing(2), color: theme.colors.textPrimary, fontSize: 18, fontWeight: '700' },
  sub: { color: theme.colors.textSecondary, marginTop: 6, fontSize: 18 },
});


