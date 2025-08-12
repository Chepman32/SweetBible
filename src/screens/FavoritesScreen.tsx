import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { HeartOutlineIcon } from '../components/Icons';
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
      <Text style={styles.bigHeader}>SweetBible{"\n"}<Text style={styles.bigHeaderEm}>Favorites</Text></Text>
      <FlatList
        data={favList}
        keyExtractor={i => i.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: theme.spacing(1) }}
        renderItem={({ item }) => (
          <SweetCard sweet={item as any} proLocked={!isPro && (item as any).isPro} onPress={() => {}} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyText}>Tap the heart on any sweet to add it here!</Text>
            <View style={{ marginTop: theme.spacing(6) }}>
              <HeartOutlineIcon size={120} color={theme.colors.primary} />
            </View>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  bigHeader: { fontSize: 34, lineHeight: 40, fontWeight: '900', color: theme.colors.textPrimary, paddingHorizontal: theme.spacing(2), paddingTop: theme.spacing(2) },
  bigHeaderEm: { fontWeight: '900' },
  emptyWrap: { alignItems: 'center', marginTop: theme.spacing(8) },
  emptyText: { textAlign: 'left', alignSelf: 'flex-start', marginHorizontal: theme.spacing(2), color: theme.colors.textPrimary, fontSize: 22, lineHeight: 30 },
});

