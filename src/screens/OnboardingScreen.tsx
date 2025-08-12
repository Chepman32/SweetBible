import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArtWelcome, ArtOffline, ArtPro } from '../components/OnboardingArt';
import { theme } from '../theme/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useAppStore } from '../store/useAppStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  const setCompleted = useAppStore(s => s.setCompletedOnboarding);
  const [pageIndex, setPageIndex] = React.useState(0);
  const scrollerRef = React.useRef<ScrollView | null>(null);

  const onContinue = () => {
    setCompleted(true);
    navigation.replace('Home');
  };
  const onSkip = onContinue;

  const goNext = () => {
    if (pageIndex < 2) {
      const next = pageIndex + 1;
      scrollerRef.current?.scrollTo({ x: width * next, animated: true });
      setPageIndex(next);
    } else {
      onContinue();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollerRef}
        style={styles.scroller}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={width}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          const x = ev.nativeEvent.contentOffset.x;
          const idx = Math.round(x / width);
          setPageIndex(idx);
        }}
      >
        <View style={styles.page}>
          <Text style={styles.h1}>Welcome to SweetBible</Text>
          <Text style={styles.sub}>Your pocket guide to the world's greatest sweets.</Text>
          <View style={styles.artHolder}><ArtWelcome width={width * 0.7} /></View>
        </View>
        <View style={styles.page}>
          <Text style={styles.h1}>Explore Anywhere, Anytime</Text>
          <Text style={styles.sub}>All content is 100% offline. Perfect for travel and commutes.</Text>
          <View style={styles.artHolder}><ArtOffline width={width * 0.7} /></View>
        </View>
        <View style={styles.page}>
          <Text style={styles.h1}>Unlock the Full Library</Text>
          <Text style={styles.sub}>Access 100+ sweets and exclusive stories with one purchase.</Text>
          <View style={styles.artHolder}><ArtPro width={width * 0.7} /></View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable onPress={onSkip} style={styles.skipBtn} hitSlop={10}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
        <View style={styles.dots}>
          {[0, 1, 2].map(i => (
            <View key={i} style={[styles.dot, pageIndex === i && styles.dotActive]} />
          ))}
        </View>
        <Pressable onPress={goNext} style={styles.cta}>
          <Text style={styles.ctaText}>{pageIndex < 2 ? 'Next' : 'Continue'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background },
  scroller: { flex: 1 },
  page: {
    width,
    padding: theme.spacing(3),
    justifyContent: 'center',
  },
  artHolder: { marginTop: theme.spacing(3), alignItems: 'center' },
  h1: { fontSize: 24, fontWeight: '800', color: theme.colors.textPrimary, marginBottom: theme.spacing(1) },
  sub: { fontSize: 16, color: theme.colors.textSecondary },
  cta: { backgroundColor: theme.colors.primary, paddingVertical: 12, paddingHorizontal: 16, borderRadius: theme.radius.button },
  ctaText: { color: 'white', fontWeight: '700' },
  footer: {
    paddingHorizontal: theme.spacing(2),
    paddingVertical: theme.spacing(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background,
  },
  dots: { flexDirection: 'row', gap: 8 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.divider,
  },
  dotActive: { backgroundColor: theme.colors.textPrimary },
  skipBtn: { paddingVertical: 8, paddingHorizontal: 12 },
  skipText: { color: theme.colors.textSecondary, fontWeight: '700' },
});

