import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, StatusBar, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme/theme';
import { useAppStore } from '../store/useAppStore';
import { IAP } from '../services/iapMock';
import { useTranslation } from '../hooks/useTranslation';
import { languages, Language } from '../i18n';

export default function SettingsScreen({ navigation }: any) {
  const isPro = useAppStore(s => s.isPro);
  const setPro = useAppStore(s => s.setPro);
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const [showLanguageModal, setShowLanguageModal] = useState(false);

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

      <Text style={styles.header}>{t('settings.title')}</Text>

      <View style={styles.card}>
          <Text style={styles.cardTitle}>SweetBible Pro</Text>
        {isPro ? (
          <Text style={styles.thanks}>{t('settings.support')} SweetBible! 🎉</Text>
        ) : (
          <>
            <Text style={styles.desc}>{t('settings.proDescription') ?? 'Unlock all sweets, exclusive brand stories, and more.'}</Text>
            <Pressable onPress={purchase} style={styles.cta}>
              <Text style={styles.ctaText}>{t('settings.unlockPro') ?? 'Unlock Pro'}</Text>
            </Pressable>
          </>
        )}
      </View>

      <View style={styles.list}>
        <Pressable onPress={() => setShowLanguageModal(true)} style={styles.row}>
          <View style={styles.rowContent}>
            <Text style={styles.rowText}>{t('settings.language')}</Text>
            <Text style={styles.rowValue}>{languages[currentLanguage]}</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Notifications')} style={styles.row}>
          <Text style={styles.rowText}>{t('settings.notifications') ?? 'Notifications'}</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.row}>
          <Text style={styles.rowText}>{t('settings.about')}</Text>
        </Pressable>
        <Pressable onPress={() => {}} style={styles.row}>
          <Text style={styles.rowText}>{t('settings.privacyPolicy')}</Text>
        </Pressable>
      </View>

      <Modal
        visible={showLanguageModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{t('settings.selectLanguage')}</Text>
            <Pressable onPress={() => setShowLanguageModal(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>{t('common.done')}</Text>
            </Pressable>
          </View>
          
          <ScrollView style={styles.languageList}>
            {Object.entries(languages).map(([code, name]) => (
              <Pressable
                key={code}
                onPress={() => {
                  changeLanguage(code as Language);
                  setShowLanguageModal(false);
                }}
                style={[
                  styles.languageRow,
                  currentLanguage === code && styles.languageRowSelected
                ]}
              >
                <Text style={[
                  styles.languageText,
                  currentLanguage === code && styles.languageTextSelected
                ]}>
                  {name}
                </Text>
                {currentLanguage === code && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </Pressable>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Modal>
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
  rowContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' },
  rowValue: { color: theme.colors.textSecondary, fontSize: 16 },
  modalContainer: { flex: 1, backgroundColor: theme.colors.background },
  modalHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: theme.spacing(2), 
    paddingVertical: theme.spacing(1),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.divider
  },
  modalTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.textPrimary },
  closeButton: { paddingHorizontal: theme.spacing(1), paddingVertical: 8 },
  closeButtonText: { color: theme.colors.primary, fontWeight: '600', fontSize: 16 },
  languageList: { flex: 1 },
  languageRow: { 
    paddingHorizontal: theme.spacing(2), 
    paddingVertical: theme.spacing(2), 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderBottomColor: theme.colors.divider, 
    backgroundColor: theme.colors.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  languageRowSelected: { backgroundColor: theme.colors.primary + '10' },
  languageText: { color: theme.colors.textPrimary, fontWeight: '600', fontSize: 16 },
  languageTextSelected: { color: theme.colors.primary },
  checkmark: { color: theme.colors.primary, fontSize: 18, fontWeight: '700' },
});

