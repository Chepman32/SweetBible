import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import data from '../data/sweets_db.json';
import { theme } from '../theme/theme';
import { useAppStore } from '../store/useAppStore';
import SweetCard from '../components/SweetCard';

export default function FavoritesScreen() {
  const favorites = useAppStore(s => s.favorites);
  const isPro = useAppStore(s => s.isPro);
  const favList = useMemo(() => data.sweets.filter(s => favorites[s.id]), [favorites]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favList}
        keyExtractor={i => i.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: theme.spacing(1) }}
        renderItem={({ item }) => (
          <SweetCard sweet={item as any} proLocked={!isPro && (item as any).isPro} onPress={() => {}} />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Tap the heart on any sweet to add it here!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  title: { fontSize: 22, fontWeight: '800', color: theme.colors.textPrimary, padding: theme.spacing(2) },
  empty: { textAlign: 'center', color: theme.colors.textSecondary, marginTop: theme.spacing(4) },
});

