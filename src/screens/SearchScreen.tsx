import React, { useMemo, useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Pressable, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CandyIcon } from '../components/Icons';
import Fuse from 'fuse.js';
import data from '../data/sweets_db.json';
import { popularSearches } from '../data/homePageData';
import homeHelpers from '../data/homePageHelpers';
import { theme } from '../theme/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useTranslation } from '../hooks/useTranslation';
import { translateCategory, translateCountry } from '../utils/translateSweetData';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export default function SearchScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();
  
  const fuse = useMemo(
    () =>
      new Fuse(data.sweets, {
        keys: [
          { name: 'name', weight: 0.3 },
          { name: 'quickFacts.origin', weight: 0.2 },
          { name: 'category', weight: 0.2 },
          { name: 'flavorProfile', weight: 0.15 },
          { name: 'history', weight: 0.1 },
          { name: 'quickFacts.type', weight: 0.05 }
        ],
        threshold: 0.4,
        includeScore: true,
      }),
    [],
  );

  const results = query ? fuse.search(query).map(r => r.item) : [];
  const suggestions = homeHelpers.getSearchSuggestions(6);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />
      
      {/* Search Header with Cancel Button */}
      <View style={styles.searchHeader}>
        <View style={styles.searchInputContainer}>
          <TextInput
            placeholder={t('search.placeholder')}
            placeholderTextColor={theme.colors.textSecondary}
            autoFocus
            value={query}
            onChangeText={setQuery}
            style={styles.input}
            returnKeyType="search"
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery('')} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>✕</Text>
            </Pressable>
          )}
        </View>
             <Pressable onPress={() => navigation.goBack()} style={styles.cancelButton}>
          <Text style={styles.cancelText}>{t('common.cancel')}</Text>
        </Pressable>
      </View>

      <FlatList
        data={results}
        keyExtractor={(i: any) => i.id}
        style={styles.resultsList}
        renderItem={({ item }: any) => (
          <Pressable onPress={() => navigation.navigate('SweetDetail', { id: item.id })} style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>{translateCategory(item.category)} • {translateCountry(item.quickFacts.origin)}</Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <CandyIcon size={96} />
            <Text style={styles.empty}>
              {query ? t('search.noResults') : t('search.findYourTreat')}
            </Text>
            {query ? (
              <Text style={styles.emptySubtext}>
                {t('search.tryAgain')}
              </Text>
            ) : (
              <View style={styles.suggestionsContainer}>
                <Text style={styles.suggestionsTitle}>{t('search.popularSearches')}</Text>
                <View style={styles.suggestionsList}>
                  {suggestions.map((suggestion, index) => (
                    <Pressable
                      key={index}
                      onPress={() => setQuery(suggestion)}
                      style={styles.suggestionChip}
                    >
                      <Text style={styles.suggestionText}>{suggestion}</Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            )}
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: theme.colors.background 
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.colors.background,
  },
  searchInputContainer: {
    flex: 1,
    marginRight: theme.spacing(1),
    position: 'relative',
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.card,
    paddingHorizontal: theme.spacing(2),
    paddingRight: 40,
    paddingVertical: 12,
    color: theme.colors.textPrimary,
    fontSize: 16,
  },
  clearButton: {
    position: 'absolute',
    right: 8,
    top: '50%',
    transform: [{ translateY: -12 }],
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.textSecondary + '20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButtonText: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  cancelButton: {
    paddingHorizontal: theme.spacing(1),
    paddingVertical: 8,
  },
  cancelText: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  resultsList: {
    flex: 1,
  },
  row: {
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(1.5),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.divider,
    backgroundColor: theme.colors.background,
  },
  name: { 
    color: theme.colors.textPrimary, 
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 2,
  },
  meta: { 
    color: theme.colors.textSecondary,
    fontSize: 14,
  },
  emptyWrap: { 
    alignItems: 'center', 
    marginTop: theme.spacing(8),
    paddingHorizontal: theme.spacing(4),
  },
  empty: { 
    textAlign: 'center', 
    color: theme.colors.textSecondary, 
    marginTop: theme.spacing(2),
    fontSize: 18,
    fontWeight: '600',
  },
  emptySubtext: {
    textAlign: 'center',
    color: theme.colors.textSecondary,
    marginTop: theme.spacing(1),
    fontSize: 14,
    lineHeight: 20,
  },
  suggestionsContainer: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  suggestionsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(1),
  },
  suggestionChip: {
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(1),
    borderRadius: 20,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  suggestionText: {
    color: theme.colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
  },
});

