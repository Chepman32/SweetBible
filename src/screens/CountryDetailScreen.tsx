import React, { useMemo, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import data from '../data/sweets_db.json';
import SweetCard from '../components/SweetCard';
import { useAppStore } from '../store/useAppStore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'CountryDetail'>;

export default function CountryDetailScreen({ route, navigation }: Props) {
  const { country } = route.params;
  const isPro = useAppStore(s => s.isPro);
  const sweets = useMemo(() => {
    return (data.sweets as any[]).filter(s => s?.quickFacts?.origin === country);
  }, [country]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: country });
  }, [navigation, country]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sweets}
        keyExtractor={(i: any) => i.id}
        numColumns={2}
        ListHeaderComponent={
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1541781286675-8a05e640c4b5?auto=format&fit=crop&w=1200&q=80' }}
            style={styles.hero}
          />
        }
        contentContainerStyle={{ paddingHorizontal: theme.spacing(1), paddingBottom: 20 }}
        renderItem={({ item }: any) => (
          <SweetCard
            sweet={item}
            proLocked={!isPro && item.isPro}
            onPress={() => navigation.navigate('SweetDetail', { id: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { fontSize: 28, fontWeight: '900', color: theme.colors.textPrimary, padding: theme.spacing(2) },
  hero: { height: 220, marginHorizontal: theme.spacing(2), borderRadius: 16, marginBottom: theme.spacing(1) },
});


