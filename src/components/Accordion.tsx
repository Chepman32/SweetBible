import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, LayoutAnimation, Platform, UIManager } from 'react-native';
import { theme } from '../theme/theme';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function Accordion({ title, children, defaultExpanded = false }: AccordionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleExpanded} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.chevron, expanded && styles.chevronExpanded]}>
          {expanded ? '˄' : '˅'}
        </Text>
      </Pressable>
      {expanded && (
        <View style={styles.content}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.card,
    marginHorizontal: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: theme.colors.surface,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  chevron: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textSecondary,
  },
  chevronExpanded: {
    transform: [{ rotate: '180deg' }],
  },
  content: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
});