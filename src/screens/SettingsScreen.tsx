import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import { useAppStore } from '../store/useAppStore';
import { IAP } from '../services/iapMock';

export default function SettingsScreen({ navigation }: any) {
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />

      <Text style={styles.header}>Settings</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>SweetBible Pro</Text>
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

      <View style={styles.list}>
        <Pressable onPress={() => navigation.navigate('Notifications')} style={styles.row}>
          <Text style={styles.rowText}>Notifications</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.row}>
          <Text style={styles.rowText}>About</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.row}>
          <Text style={styles.rowText}>Privacy Policy</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  header: { fontSize: 34, fontWeight: '900', color: theme.colors.textPrimary, paddingHorizontal: theme.spacing(2), paddingTop: theme.spacing(1) },
  card: {
    margin: theme.spacing(2),
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.modal,
    padding: theme.spacing(2),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  cardTitle: { fontSize: 18, fontWeight: '800', color: theme.colors.textPrimary, marginBottom: 6 },
  desc: { color: theme.colors.textSecondary, marginBottom: theme.spacing(2) },
  thanks: { color: theme.colors.textPrimary },
  cta: { backgroundColor: theme.colors.primary, padding: theme.spacing(2), borderRadius: theme.radius.button, alignSelf: 'flex-start' },
  ctaText: { color: 'white', fontWeight: '700' },
  list: { marginTop: theme.spacing(1) },
  row: { paddingHorizontal: theme.spacing(2), paddingVertical: theme.spacing(2), borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: theme.colors.divider, backgroundColor: theme.colors.surface },
  rowText: { color: theme.colors.textPrimary, fontWeight: '600' },
});

