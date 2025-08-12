import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';
import { ProBadge } from './Icons';
import { getImageSource } from '../data/imageMap';
import { translateSweetName } from '../utils/translateSweetData';

export type Sweet = {
  id: string;
  name: string;
  isPro: boolean;
  category: string;
  image: string;
};

type Props = {
  sweet: Sweet;
  proLocked: boolean;
  onPress: () => void;
};

export default function SweetCard({ sweet, proLocked, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View>
        <View style={styles.imageHolder}>
          {getImageSource(sweet.image) ? (
            <Image source={getImageSource(sweet.image)} style={styles.image} resizeMode="cover" />
          ) : (
            <View style={styles.fakeImage} />
          )}
        </View>
        {proLocked && (
          <View style={styles.lockOverlay}>
            <ProBadge />
          </View>
        )}
      </View>
      <Text style={styles.title}>{translateSweetName(sweet.id, sweet.name)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 16,
    padding: theme.spacing(1.5),
    margin: theme.spacing(1),
    width: '46%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
  },
  imageHolder: {
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  image: { width: '100%', height: '100%' },
  fakeImage: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  title: {
    color: theme.colors.textPrimary,
    marginTop: theme.spacing(1.5),
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});

