import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { HeartIcon, HeartOutlineIcon, LeafIcon, GlobeIcon, CalendarIcon } from '../components/Icons';
import { theme } from '../theme/theme';
import data from '../data/sweets_db.json';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useAppStore } from '../store/useAppStore';

type Props = NativeStackScreenProps<RootStackParamList, 'SweetDetail'>;

export default function SweetDetailScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const sweet = useMemo(() => data.sweets.find(s => s.id === id), [id]);
  const isFav = useAppStore(s => !!s.favorites[id]);
  const toggle = useAppStore(s => s.toggleFavorite);

  if (!sweet) return null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.hero} />
      <View style={styles.titleRow}>
        <Text style={styles.title}>{sweet.name}</Text>
        <Pressable onPress={() => toggle(id)} style={styles.heart}>
          {isFav ? <HeartIcon size={22} /> : <HeartOutlineIcon size={22} />}
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Facts</Text>
        <View style={styles.factRow}>
          <LeafIcon />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.factLabel}>Type</Text>
            <Text style={styles.body}>{sweet.quickFacts.type}</Text>
          </View>
        </View>
        <View style={styles.factRow}>
          <GlobeIcon />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.factLabel}>Origin</Text>
            <Text style={styles.body}>{sweet.quickFacts.origin}</Text>
          </View>
        </View>
        <View style={styles.factRow}>
          <CalendarIcon />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.factLabel}>Year</Text>
            <Text style={styles.body}>{sweet.quickFacts.year}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>History</Text>
        <Text style={styles.body}>{sweet.history}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Flavor Profile</Text>
        <Text style={styles.body}>{sweet.flavorProfile}</Text>
      </View>

      {sweet.trivia ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Did You Know?</Text>
          <Text style={styles.body}>{sweet.trivia}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  hero: { height: 240, backgroundColor: '#ddd' },
  titleRow: {
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontSize: 24, fontWeight: '800', color: theme.colors.textPrimary },
  heart: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginHorizontal: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.card,
    padding: theme.spacing(2),
  },
  factRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  factLabel: { color: theme.colors.textPrimary, fontWeight: '700' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.textPrimary, marginBottom: 4 },
  body: { color: theme.colors.textSecondary, lineHeight: 22 },
});

