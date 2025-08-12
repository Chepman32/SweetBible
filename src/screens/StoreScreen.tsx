import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import { IAP, Product } from '../services/iapMock';
import { useAppStore } from '../store/useAppStore';
import { CheckCircle } from '../components/Icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useTranslation } from '../hooks/useTranslation';

type Props = NativeStackScreenProps<RootStackParamList, 'Store'>;

export default function StoreScreen({ navigation }: Props) {
  const isPro = useAppStore(s => s.isPro);
  const setPro = useAppStore(s => s.setPro);
  const [product, setProduct] = useState<Product | null>(null);
  const { t } = useTranslation();

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
      Alert.alert(t('store.purchaseFailed'), e?.message ?? t('store.unknownError'));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.heroTitle}>{t('store.title')}</Text>

          <View style={styles.heroCta}>
            <Text style={styles.heroCtaText}>{t('store.unlockPro')} — {product?.price ?? '$4.99'}</Text>
            <Text style={styles.heroCtaSub}>{t('store.oneTimePurchase')}</Text>
          </View>

          <View style={styles.bulletsWrap}>
            <View style={styles.bulletRow}><CheckCircle /><Text style={styles.bulletText}>{t('store.bullets.unlockAll')}</Text></View>
            <View style={styles.bulletRow}><CheckCircle /><Text style={styles.bulletText}>{t('store.bullets.brandStories')}</Text></View>
            <View style={styles.bulletRow}><CheckCircle /><Text style={styles.bulletText}>{t('store.bullets.advancedFiltering')}</Text></View>
            <View style={styles.bulletRow}><CheckCircle /><Text style={styles.bulletText}>{t('store.bullets.supportIndie')}</Text></View>
          </View>

          <Pressable onPress={() => Alert.alert(t('store.restored'), t('store.purchasesRestored'))} style={styles.restoreBtn}>
            <Text style={styles.restoreText}>{t('store.restorePurchases')}</Text>
          </Pressable>

          {!isPro && (
            <Pressable onPress={onUnlock} style={[styles.bottomUnlock, styles.shadow]}>
              <Text style={styles.bottomUnlockText}>{product?.price ?? '$4.99'}</Text>
            </Pressable>
          )}
        </View>

        <View style={styles.packsRow}>
          <View style={styles.pack}>
            <Text style={styles.packTitle}>{t('store.holidayPack.title')}</Text>
            <Text style={styles.packSub}>{t('store.holidayPack.subtitle')}</Text>
          </View>
          <View style={styles.pack}>
            <Text style={styles.packTitle}>{t('store.japanesePack.title')}</Text>
            <Text style={styles.packSub}>{t('store.japanesePack.subtitle')}</Text>
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
  heroTitle: { fontSize: 32, fontWeight: '900', color: theme.colors.textPrimary, marginBottom: theme.spacing(1) },
  heroCta: { backgroundColor: theme.colors.primary, paddingVertical: 16, borderRadius: 24, alignItems: 'center', marginVertical: theme.spacing(1) },
  heroCtaText: { color: 'white', fontWeight: '900', fontSize: 18 },
  heroCtaSub: { color: 'white', opacity: 0.9, marginTop: 4 },
  bulletRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  bulletText: { color: theme.colors.textPrimary, fontSize: 18 },
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
  bottomUnlock: {
    marginTop: theme.spacing(2),
    borderRadius: 28,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    paddingVertical: 14,
  },
  bottomUnlockText: { color: 'white', fontWeight: '900', fontSize: 18 },
  shadow: { shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 12, shadowOffset: { width: 0, height: 6 } },
  scrollContent: { paddingBottom: 40 },
  bulletsWrap: { marginTop: theme.spacing(2), rowGap: 14 } as any,
});


