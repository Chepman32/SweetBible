import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import { IAP, Product } from '../services/iapMock';
import { useAppStore } from '../store/useAppStore';
import { LockIcon } from '../components/Icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Store'>;

export default function StoreScreen({ navigation }: Props) {
  const isPro = useAppStore(s => s.isPro);
  const setPro = useAppStore(s => s.setPro);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await IAP.initConnection();
        const [p] = await IAP.getProducts(['sweetbible_pro']);
        if (mounted) setProduct(p ?? null);
      } catch {}
    })();
    return () => {
      mounted = false;
      IAP.endConnection();
    };
  }, []);

  const onUnlock = async () => {
    try {
      if (!product) throw new Error('Product not found');
      const res = await IAP.requestPurchase(product.productId);
      await IAP.finishTransaction(res);
      setPro(true);
      navigation.navigate('Success');
    } catch (e: any) {
      Alert.alert('Purchase failed', e?.message ?? 'Unknown error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.card}>
          <View style={styles.lockRow}>
            <LockIcon />
            <Text style={styles.h1}>SweetBible Pro</Text>
          </View>
          <Text style={styles.perks}>
            ✓ Unlock all 100+ sweets{"\n"}
            ✓ Exclusive Brand Stories{"\n"}
            ✓ Advanced Filtering{"\n"}
            ✓ Support Indie Development
          </Text>
          {isPro ? (
            <View style={[styles.cta, { backgroundColor: '#C9EAD6' }]}> 
              <Text style={[styles.ctaText, { color: '#165F3D' }]}>You already own Pro</Text>
            </View>
          ) : (
            <Pressable onPress={onUnlock} style={styles.cta}>
              <Text style={styles.ctaText}>Unlock Pro — {product?.price ?? '$4.99'}</Text>
            </Pressable>
          )}

          <Pressable onPress={() => Alert.alert('Restored', 'Purchases restored (mock).')} style={styles.restoreBtn}>
            <Text style={styles.restoreText}>Restore Purchases</Text>
          </Pressable>
        </View>

        <View style={styles.packsRow}>
          <View style={styles.pack}>
            <Text style={styles.packTitle}>Holiday Pack</Text>
            <Text style={styles.packSub}>Enjoy seasonal sweets</Text>
          </View>
          <View style={styles.pack}>
            <Text style={styles.packTitle}>Japanese Pack</Text>
            <Text style={styles.packSub}>Discover iconic treats</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  card: {
    backgroundColor: theme.colors.surface,
    margin: theme.spacing(2),
    borderRadius: theme.radius.modal,
    padding: theme.spacing(2),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
  },
  lockRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: theme.spacing(1) },
  h1: { fontSize: 24, fontWeight: '800', color: theme.colors.textPrimary },
  perks: { color: theme.colors.textPrimary, marginVertical: theme.spacing(1), lineHeight: 22 },
  cta: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: theme.radius.button,
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  ctaText: { color: 'white', fontWeight: '800' },
  restoreBtn: {
    marginTop: theme.spacing(2),
    paddingVertical: 12,
    borderRadius: theme.radius.button,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.divider,
    backgroundColor: theme.colors.surface,
  },
  restoreText: { color: theme.colors.textPrimary, fontWeight: '700' },
  packsRow: { flexDirection: 'row', gap: 12, paddingHorizontal: theme.spacing(2), marginTop: theme.spacing(1) },
  pack: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: theme.spacing(2),
    borderRadius: theme.radius.card,
  },
  packTitle: { color: theme.colors.textPrimary, fontWeight: '800' },
  packSub: { color: theme.colors.textSecondary, marginTop: 4 },
});


