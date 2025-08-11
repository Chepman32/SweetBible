import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SweetBible</Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Pressable onPress={() => navigation.navigate('Search')}><Text style={styles.link}>Search</Text></Pressable>
          <Pressable onPress={() => navigation.navigate('Settings')}><Text style={styles.link}>Settings</Text></Pressable>
        </View>
      </View>

      <FlatList
        data={CATEGORIES}
        keyExtractor={i => i}
        horizontal
        contentContainerStyle={{ paddingHorizontal: theme.spacing(2), paddingBottom: theme.spacing(1) }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={() => setCategory(item)} style={[styles.pill, category === item && styles.pillActive]}>
            <Text style={[styles.pillText, category === item && styles.pillTextActive]}>{item}</Text>
          </Pressable>
        )}
      />

      <FlatList
        data={sweets}
        keyExtractor={i => i.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: theme.spacing(1) }}
        renderItem={({ item }) => (
          <SweetCard
            sweet={item}
            proLocked={!isPro && item.isPro}
            onPress={() =>
              !isPro && item.isPro
                ? navigation.navigate('Settings')
                : navigation.navigate('SweetDetail', { id: item.id })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: {
    paddingHorizontal: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontSize: 22, fontWeight: '800', color: theme.colors.textPrimary },
  link: { color: theme.colors.primary, fontWeight: '700' },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
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

