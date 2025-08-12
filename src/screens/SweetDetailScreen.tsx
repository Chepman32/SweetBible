import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeartIcon, HeartOutlineIcon, LeafIcon, GlobeIcon, CalendarIcon } from '../components/Icons';
import Accordion from '../components/Accordion';
import { theme } from '../theme/theme';
import data from '../data/sweets_db.json';
import { getImageSource } from '../data/imageMap';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useAppStore } from '../store/useAppStore';
import { useTranslation } from '../hooks/useTranslation';
import { translateSweetType, translateCategory, translateCountry } from '../utils/translateSweetData';

type Props = NativeStackScreenProps<RootStackParamList, 'SweetDetail'>;

export default function SweetDetailScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const sweet = useMemo(() => data.sweets.find((s: any) => s.id === id), [id]);
  const isFav = useAppStore(s => !!s.favorites[id]);
  const toggle = useAppStore(s => s.toggleFavorite);
  const { t } = useTranslation();

  if (!sweet) return null;

  const imageSource = getImageSource(sweet.image);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header with back button and country */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>‹ {translateCountry(sweet.quickFacts.origin)}</Text>
          </Pressable>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Hero Image Section */}
        <View style={styles.heroSection}>
          {imageSource ? (
            <Image source={imageSource} style={styles.heroImage} resizeMode="cover" />
          ) : (
            <View style={styles.heroPlaceholder} />
          )}
          <View style={styles.titleOverlay}>
            <Text style={styles.title}>{sweet.name}</Text>
          </View>
        </View>

        {/* Quick Facts Section */}
        <View style={styles.quickFactsSection}>
          <Text style={styles.sectionTitle}>{t('sweetDetail.quickFacts')}</Text>
          
          <View style={styles.factsGrid}>
            <View style={styles.factItem}>
              <View style={styles.factIcon}>
                <LeafIcon size={20} />
              </View>
              <View style={styles.factContent}>
                <Text style={styles.factLabel}>{t('sweetDetail.facts.type')}</Text>
                <Text style={styles.factValue}>{translateSweetType(sweet.quickFacts.type)}</Text>
              </View>
            </View>

            {sweet.nutrition && (
              <View style={styles.factItem}>
                <View style={styles.factIcon}>
                  <Text style={styles.iconText}>🔥</Text>
                </View>
                <View style={styles.factContent}>
                  <Text style={styles.factLabel}>{t('sweetDetail.facts.calories')}</Text>
                  <Text style={styles.factValue}>{sweet.nutrition.calories} kcal ({sweet.nutrition.servingSize})</Text>
                </View>
              </View>
            )}

            <View style={styles.factItem}>
              <View style={styles.factIcon}>
                <GlobeIcon size={20} />
              </View>
              <View style={styles.factContent}>
                <Text style={styles.factLabel}>{t('sweetDetail.facts.origin')}</Text>
                <Text style={styles.factValue}>{translateCountry(sweet.quickFacts.origin)}</Text>
              </View>
            </View>

            <View style={styles.factItem}>
              <View style={styles.factIcon}>
                <CalendarIcon size={20} />
              </View>
              <View style={styles.factContent}>
                <Text style={styles.factLabel}>{t('sweetDetail.facts.year')}</Text>
                <Text style={styles.factValue}>{sweet.quickFacts.year}</Text>
              </View>
            </View>

            {sweet.ingredients && (
              <View style={styles.factItem}>
                <View style={styles.factIcon}>
                  <Text style={styles.iconText}>🥄</Text>
                </View>
                <View style={styles.factContent}>
                  <Text style={styles.factLabel}>{t('sweetDetail.facts.ingredients')}</Text>
                  <Text style={styles.factValue}>{sweet.ingredients.length} items</Text>
                </View>
              </View>
            )}

            {sweet.dietaryNotes && (
              <View style={styles.factItem}>
                <View style={styles.factIcon}>
                  <Text style={styles.iconText}>🏷️</Text>
                </View>
                <View style={styles.factContent}>
                  <Text style={styles.factLabel}>{t('sweetDetail.facts.dietaryNotes')}</Text>
                </View>
              </View>
            )}

            {sweet.isPro && (
              <View style={styles.factItem}>
                <View style={styles.factIcon}>
                  <Text style={styles.iconText}>⭐</Text>
                </View>
                <View style={styles.factContent}>
                  <Text style={styles.factLabel}>{t('sweetDetail.facts.premiumStory')}</Text>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* History Section */}
        <Accordion title={t('sweetDetail.history')} defaultExpanded={true}>
          <Text style={styles.accordionContent}>{sweet.history}</Text>
        </Accordion>

        {/* Taste Description Section */}
        {sweet.tasteDescription && (
          <Accordion title={t('sweetDetail.tasteDescription')} defaultExpanded={false}>
            <Text style={styles.accordionContent}>{sweet.tasteDescription}</Text>
          </Accordion>
        )}

        {/* Flavor Profile Section with Ingredients */}
        <Accordion title={t('sweetDetail.flavorProfile')} defaultExpanded={false}>
          <Text style={styles.accordionContent}>{sweet.flavorProfile}</Text>
          {sweet.ingredients && (
            <View style={styles.ingredientsSection}>
              {sweet.ingredients.map((ingredient, index) => {
                // Mock measurements for demo
                const measurements = ["1¼ cups", "3 large", "¾ cup", "⅛ cup, melted", "1 tsp", "½ tsp", "1 tsp"];
                return (
                  <View key={index} style={styles.ingredientRow}>
                    <Text style={styles.ingredientName}>{ingredient}</Text>
                    <Text style={styles.ingredientAmount}>{measurements[index] || "to taste"}</Text>
                  </View>
                );
              })}
            </View>
          )}
        </Accordion>

        {/* Dietary Notes Accordion */}
        {sweet.dietaryNotes && (
          <Accordion title={t('sweetDetail.dietaryNotes')} defaultExpanded={false}>
            <View style={styles.dietaryNotesContent}>
              {sweet.dietaryNotes.map((note, index) => (
                <View key={index} style={styles.dietaryNoteItem}>
                  <Text style={styles.dietaryNoteText}>• {note}</Text>
                </View>
              ))}
            </View>
          </Accordion>
        )}

        {/* Trivia Section */}
        {sweet.trivia && (
          <Accordion title={t('sweetDetail.didYouKnow')} defaultExpanded={false}>
            <Text style={styles.accordionContent}>{sweet.trivia}</Text>
          </Accordion>
        )}

        {/* Brand Story Section */}
        {sweet.brandStory && (
          <Accordion title={t('sweetDetail.brandStory')} defaultExpanded={false}>
            <Text style={styles.accordionContent}>{sweet.brandStory}</Text>
          </Accordion>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f8f8' 
  },
  safeArea: {
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(1),
    backgroundColor: '#f8f8f8',
    zIndex: 10,
    elevation: 1,
  },
  scrollView: {
    flex: 1,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 18,
    color: '#ff6b6b',
    fontWeight: '600',
  },
  heroSection: {
    position: 'relative',
    height: 200,
    marginTop: theme.spacing(1),
    marginHorizontal: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: theme.spacing(2),
  },
  title: { 
    fontSize: 32, 
    fontWeight: '900', 
    color: theme.colors.textPrimary,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  quickFactsSection: {
    backgroundColor: 'white',
    marginHorizontal: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: 12,
    padding: theme.spacing(2),
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '700', 
    color: theme.colors.textPrimary, 
    marginBottom: theme.spacing(2),
  },
  factsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
  },
  factItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    minWidth: 150,
    marginBottom: theme.spacing(1.5),
  },
  factIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(1),
  },
  iconText: {
    fontSize: 16,
  },
  factContent: {
    flex: 1,
  },
  factLabel: { 
    fontSize: 14,
    color: theme.colors.textSecondary, 
    fontWeight: '600',
    marginBottom: 2,
  },
  factValue: { 
    fontSize: 14,
    color: theme.colors.textPrimary, 
    fontWeight: '500',
    lineHeight: 18,
  },
  accordionContent: {
    color: theme.colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  ingredientsSection: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f0f0f0',
  },
  ingredientName: {
    fontSize: 15,
    color: theme.colors.textPrimary,
    fontWeight: '500',
  },
  ingredientAmount: {
    fontSize: 15,
    color: theme.colors.textSecondary,
  },
  dietaryNotesContent: {
    paddingTop: theme.spacing(1),
  },
  dietaryNoteItem: {
    paddingVertical: 4,
  },
  dietaryNoteText: {
    fontSize: 15,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
});

