import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, StatusBar, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import data from '../data/sweets_db.json';
import SweetCard, { Sweet } from '../components/SweetCard';
import { useAppStore } from '../store/useAppStore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { featuredSweets, sweetCategories, trending } from '../data/homePageData';
import homeHelpers, { getTodaysFeatured, getCurrentSeasonCollection, getSweetOfTheDay } from '../data/homePageHelpers';
import { useTranslation } from '../hooks/useTranslation';
import { translateCategory, translateSweetName, translateCountry } from '../utils/translateSweetData';
import { translateDailyFeature, translateSeasonalCollection, translateTrendingReason } from '../utils/translateHomeData';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const [category, setCategory] = React.useState<'all' | string>('all');
  const isPro = useAppStore(s => s.isPro);

  // Get dynamic data based on current day and season
  const todaysFeaturedRaw = getTodaysFeatured();
  const seasonalCollectionRaw = getCurrentSeasonCollection();
  const sweetOfTheDay = getSweetOfTheDay();
  
  // Apply translations to dynamic content
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const currentDay = days[new Date().getDay()];
  const todaysFeatured = translateDailyFeature(currentDay);
  const seasonalCollection = translateSeasonalCollection(seasonalCollectionRaw.season.toLowerCase());

  const sweets = useMemo(() => {
    if (category === 'all') {
      return data.sweets as Sweet[];
    }
    
    // Use helper to get sweets by category
    const categoryId = category.toLowerCase();
    return homeHelpers.getSweetsByCategory(categoryId) as Sweet[];
  }, [category]);

  const categories: string[] = ['all', ...sweetCategories.map(c => c.id)];

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
              <Text style={styles.searchPlaceholder}>{t('home.searchPlaceholder')}</Text>
            </Pressable>

            {/* Daily Featured Section */}
            <View style={styles.sectionHeaderRow}>
              <View>
                <Text style={styles.sectionHeader}>{todaysFeatured.title}</Text>
                <Text style={styles.sectionSubtitle}>{todaysFeatured.description}</Text>
              </View>
            </View>

            {/* Sweet of the Day */}
            <Pressable 
              style={styles.sweetOfDay}
              onPress={() => (navigation as any)?.getParent?.()?.navigate('SweetDetail', { id: sweetOfTheDay.id })}
            >
              <View style={styles.sweetOfDayContent}>
                <View>
                  <Text style={styles.sweetOfDayLabel}>{t('home.sweetOfTheDay')}</Text>
                  <Text style={styles.sweetOfDayTitle}>{sweetOfTheDay.name}</Text>
                  <Text style={styles.sweetOfDayOrigin}>{t('home.from')} {translateCountry(sweetOfTheDay.quickFacts.origin)}</Text>
                </View>
                <Image source={{ uri: `https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80` }} style={styles.sweetOfDayImage} />
              </View>
            </Pressable>

            {/* Trending Now */}
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionHeader}>{t('home.trendingNow')}</Text>
              <Pressable><Text style={styles.seeAll}>{t('home.seeAll')}</Text></Pressable>
            </View>
            <FlatList
              horizontal
              data={trending}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: theme.spacing(2) }}
              snapToInterval={336}
              decelerationRate="fast"
              disableIntervalMomentum
              renderItem={({ item }) => (
                <Pressable style={styles.trending} onPress={() => (navigation as any)?.getParent?.()?.navigate('SweetDetail', { id: item.id })}>
                  <View style={styles.trendingContent}>
                  <Text style={styles.trendingTitle}>{translateSweetName(item.id, item.name)}</Text>
                    <Text style={styles.trendingGrowth}>{item.growth}</Text>
                    <Text style={styles.trendingReason}>{translateTrendingReason(item.trendingReason)}</Text>
                  </View>
                  <Image source={{ uri: `https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80` }} style={styles.trendingImage} />
                </Pressable>
              )}
            />

            {/* Seasonal Collection */}
            <View style={styles.sectionHeaderRow}>
              <View>
                <Text style={styles.sectionHeader}>{seasonalCollection.title}</Text>
                <Text style={styles.sectionSubtitle}>{seasonalCollection.description}</Text>
              </View>
            </View>

            {/* Categories pills */}
            <FlatList
              data={categories}
              keyExtractor={i => i}
              horizontal
              contentContainerStyle={{ paddingHorizontal: theme.spacing(2), paddingVertical: theme.spacing(1) }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable onPress={() => setCategory(item)} style={[styles.pill, category === item && styles.pillActive]}>
                  <Text style={[styles.pillText, category === item && styles.pillTextActive]}>
                    {item === 'all' ? t('home.all') : translateCategory(item)}
                  </Text>
                </Pressable>
              )}
            />

            {/* Section title based on category */}
            <Text style={[styles.sectionHeader, { paddingHorizontal: theme.spacing(2), marginTop: 4 }]}>
              {category === 'all' ? t('home.allSweets') : `${translateCategory(category)} ${t('home.treats')}`}
            </Text>
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
  sectionSubtitle: { 
    fontSize: 14, 
    color: theme.colors.textSecondary, 
    marginTop: 2,
    lineHeight: 18
  },
  sweetOfDay: {
    marginHorizontal: theme.spacing(2),
    marginTop: theme.spacing(1),
    backgroundColor: '#FFE4E1',
    borderRadius: 18,
    overflow: 'hidden',
  },
  sweetOfDayContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  sweetOfDayLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sweetOfDayTitle: { 
    fontSize: 20, 
    fontWeight: '800', 
    color: theme.colors.textPrimary,
    marginTop: 4,
  },
  sweetOfDayOrigin: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  sweetOfDayImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 12 
  },
  trending: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1.5),
    backgroundColor: '#BFE9DF',
    height: 140,
    width: 280,
    borderRadius: 18,
    overflow: 'hidden',
    padding: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  trendingContent: {
    flex: 1,
    paddingRight: theme.spacing(1),
  },
  trendingTitle: { 
    fontSize: 18, 
    fontWeight: '800', 
    color: theme.colors.textPrimary,
    lineHeight: 22,
  },
  trendingGrowth: {
    fontSize: 24,
    fontWeight: '900',
    color: '#00C853',
    marginTop: 4,
  },
  trendingReason: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginTop: 8,
    lineHeight: 16,
  },
  trendingImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 12,
    marginTop: 8,
  },
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

