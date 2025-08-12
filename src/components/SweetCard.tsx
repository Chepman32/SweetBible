import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';
import { ProBadge } from './Icons';
import { getImageSource } from '../data/imageMap';

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
      <Text style={styles.title}>{sweet.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.card,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    width: '46%',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  imageHolder: {
    height: 140,
    borderRadius: theme.radius.card,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: { width: '100%', height: '100%' },
  fakeImage: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  lockOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.textPrimary,
    marginTop: theme.spacing(1),
    fontWeight: '600',
  },
});

