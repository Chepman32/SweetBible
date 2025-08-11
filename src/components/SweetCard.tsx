import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme/theme';

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
          <View style={styles.fakeImage} />
        </View>
        {proLocked && (
          <View style={styles.lockOverlay}>
            <Text style={styles.lockText}>Pro</Text>
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
  },
  imageHolder: {
    height: 140,
    borderRadius: theme.radius.card,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
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
  lockText: {
    color: theme.colors.accentGold,
    fontWeight: '700',
    fontSize: 16,
  },
  title: {
    color: theme.colors.textPrimary,
    marginTop: theme.spacing(1),
    fontWeight: '600',
  },
});

