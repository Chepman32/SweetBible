import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Animated, Easing } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../theme/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useAppStore } from '../store/useAppStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  const progress = React.useRef(new Animated.Value(0)).current;
  const hasCompletedOnboarding = useAppStore(s => s.hasCompletedOnboarding);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        if (hasCompletedOnboarding) {
          navigation.replace('Home');
        } else {
          navigation.replace('Onboarding');
        }
      }, 600);
    });
  }, [hasCompletedOnboarding, navigation, progress]);

  const animatedStyle = {
    opacity: progress,
    transform: [
      {
        scale: progress.interpolate({ inputRange: [0, 1], outputRange: [0.9, 1] }),
      },
    ],
  } as const;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logo, animatedStyle]}>
        <Svg width={120} height={120} viewBox="0 0 120 120">
          <Path
            d="M20,80 C20,110 100,110 100,80 C100,55 20,55 20,30 C20,0 100,0 100,30"
            stroke={theme.colors.surface}
            strokeWidth={10}
            fill="none"
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.secondary,
  },
});

