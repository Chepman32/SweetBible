import React, { useMemo, useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Pressable } from 'react-native';
import Fuse from 'fuse.js';
import data from '../data/sweets_db.json';
import { theme } from '../theme/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export default function SearchScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');
  const fuse = useMemo(
    () =>
      new Fuse(data.sweets, {
        keys: ['name', 'quickFacts.origin', 'category'],
        threshold: 0.4,
      }),
    [],
  );

  const results = query ? fuse.search(query).map(r => r.item) : [];

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search sweets"
        placeholderTextColor={theme.colors.textSecondary}
        autoFocus
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      <FlatList
        data={results}
        keyExtractor={(i: any) => i.id}
        renderItem={({ item }: any) => (
          <Pressable onPress={() => navigation.navigate('SweetDetail', { id: item.id })} style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>{item.category} • {item.quickFacts.origin}</Text>
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Find your favorite treat</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  input: {
    margin: theme.spacing(2),
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.card,
    paddingHorizontal: theme.spacing(2),
    paddingVertical: 12,
    color: theme.colors.textPrimary,
  },
  row: {
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(1.5),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.divider,
  },
  name: { color: theme.colors.textPrimary, fontWeight: '700' },
  meta: { color: theme.colors.textSecondary },
  empty: { textAlign: 'center', color: theme.colors.textSecondary, marginTop: theme.spacing(4) },
});

