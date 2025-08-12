import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, StatusBar, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import data from '../data/sweets_db.json';
import SweetCard, { Sweet } from '../components/SweetCard';
import { useAppStore } from '../store/useAppStore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const CATEGORIES = ['All', 'Chocolate', 'Gummy', 'Pastry'];

export default function HomeScreen({ navigation }: Props) {
  const [category, setCategory] = React.useState('All');
  const isPro = useAppStore(s => s.isPro);

  const sweets = useMemo(() => {
    return (data.sweets as Sweet[]).filter(s => category === 'All' || s.category === category);
  }, [category]);

  const featured = (data.sweets as Sweet[])[2] || (data.sweets as Sweet[])[0];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />

      {/* One scrollable list with a header that includes search, trending and filters */}
      <FlatList
        data={sweets}
        keyExtractor={i => i.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: theme.spacing(1), paddingBottom: 20 }}
        ListHeaderComponent={
          <>
            {/* Search bar */}
            <Pressable onPress={() => (navigation as any)?.getParent?.()?.navigate('Search')} style={styles.searchBar}>
              <Text style={styles.searchPlaceholder}>Search</Text>
            </Pressable>

            {/* Trending Now */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeader}>Trending Now</Text>
              <Pressable><Text style={styles.seeAll}>See all</Text></Pressable>
            </View>
            <FlatList
              horizontal
              data={[1,2,3].map(i => ({ id: `trend_${i}`, title: 'Macaron', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80', target: featured.id }))}
              keyExtractor={i => i.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: theme.spacing(2) }}
              snapToInterval={336}
              decelerationRate="fast"
              disableIntervalMomentum
              renderItem={({ item }) => (
                <Pressable style={styles.trending} onPress={() => (navigation as any)?.getParent?.()?.navigate('SweetDetail', { id: item.target })}>
                  <Text style={styles.trendingTitle}>{item.title}</Text>
                  <Image source={{ uri: item.image }} style={styles.trendingImage} />
                </Pressable>
              )}
            />

            {/* Categories pills */}
            <FlatList
              data={CATEGORIES}
              keyExtractor={i => i}
              horizontal
              contentContainerStyle={{ paddingHorizontal: theme.spacing(2), paddingVertical: theme.spacing(1) }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable onPress={() => setCategory(item)} style={[styles.pill, category === item && styles.pillActive]}>
                  <Text style={[styles.pillText, category === item && styles.pillTextActive]}>{item}</Text>
                </Pressable>
              )}
            />

            {/* Recommended title */}
            <Text style={[styles.sectionHeader, { paddingHorizontal: theme.spacing(2), marginTop: 4 }]}>Recommended</Text>
          </>
        }
        renderItem={({ item }) => (
          <SweetCard
            sweet={item}
            proLocked={!isPro && item.isPro}
            onPress={() =>
              !isPro && item.isPro
                ? (navigation as any)?.getParent?.()?.navigate('Settings')
                : (navigation as any)?.getParent?.()?.navigate('SweetDetail', { id: item.id })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  searchBar: {
    marginHorizontal: theme.spacing(2),
    marginTop: theme.spacing(2),
    backgroundColor: theme.colors.surface,
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  searchPlaceholder: { color: theme.colors.textSecondary },
  sectionHeaderRow: {
    marginTop: theme.spacing(2),
    paddingHorizontal: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAll: { color: theme.colors.textSecondary, fontWeight: '700' },
  sectionHeader: { fontSize: 24, fontWeight: '900', color: theme.colors.textPrimary },
  trending: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1.5),
    backgroundColor: '#BFE9DF',
    height: 140,
    width: 320,
    borderRadius: 18,
    overflow: 'hidden',
    padding: theme.spacing(2),
  },
  trendingTitle: { fontSize: 28, fontWeight: '900', color: theme.colors.textPrimary },
  trendingImage: { position: 'absolute', right: 12, bottom: 8, width: 140, height: 100, borderRadius: 12 },
  pill: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.divider,
    marginRight: 8,
    backgroundColor: theme.colors.surface,
  },
  pillActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  pillText: { color: theme.colors.textSecondary, fontWeight: '600' },
  pillTextActive: { color: 'white' },
});

