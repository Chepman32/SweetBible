import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import data from '../data/sweets_db.json';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Countries'>;

export default function CountriesScreen({ navigation }: Props) {
  const countries = useMemo(() => {
    const set = new Set<string>();
    (data.sweets as any[]).forEach(s => {
      if (s?.quickFacts?.origin) set.add(s.quickFacts.origin as string);
    });
    return Array.from(set).sort();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Countries</Text>
      <FlatList
        data={countries}
        keyExtractor={i => i}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('CountryDetail', { country: item })} style={styles.row}>
            <Text style={styles.rowText}>{item}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { fontSize: 28, fontWeight: '900', color: theme.colors.textPrimary, padding: theme.spacing(2) },
  row: {
    backgroundColor: theme.colors.surface,
    paddingVertical: theme.spacing(2),
    paddingHorizontal: theme.spacing(2),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.divider,
  },
  rowText: { color: theme.colors.textPrimary, fontWeight: '600' },
});


