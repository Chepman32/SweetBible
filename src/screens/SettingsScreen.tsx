import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { theme } from '../theme/theme';
import { useAppStore } from '../store/useAppStore';
import { IAP } from '../services/iapMock';

export default function SettingsScreen() {
  const isPro = useAppStore(s => s.isPro);
  const setPro = useAppStore(s => s.setPro);

  const purchase = async () => {
    try {
      await IAP.initConnection();
      const [product] = await IAP.getProducts(['sweetbible_pro']);
      if (!product) throw new Error('Product not found');
      const purchaseRes = await IAP.requestPurchase(product.productId);
      await IAP.finishTransaction(purchaseRes);
      setPro(true);
      Alert.alert('Thank you!', 'Pro unlocked.');
    } catch (e: any) {
      Alert.alert('Purchase failed', e?.message ?? 'Unknown error');
    } finally {
      await IAP.endConnection();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SweetBible Pro</Text>
      {isPro ? (
        <Text style={styles.thanks}>Thank you for supporting SweetBible! 🎉</Text>
      ) : (
        <>
          <Text style={styles.desc}>Unlock all sweets, exclusive brand stories, and more.</Text>
          <Pressable onPress={purchase} style={styles.cta}>
            <Text style={styles.ctaText}>Unlock Pro</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing(2) },
  title: { fontSize: 22, fontWeight: '800', color: theme.colors.textPrimary, marginBottom: theme.spacing(1) },
  desc: { color: theme.colors.textSecondary, marginBottom: theme.spacing(2) },
  thanks: { color: theme.colors.textPrimary },
  cta: { backgroundColor: theme.colors.primary, padding: theme.spacing(2), borderRadius: theme.radius.button, alignSelf: 'flex-start' },
  ctaText: { color: 'white', fontWeight: '700' },
});

