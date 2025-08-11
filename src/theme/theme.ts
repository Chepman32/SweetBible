export const theme = {
  colors: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#F7F5F2',
    surface: '#FFFFFF',
    textPrimary: '#2D2D2D',
    textSecondary: '#7A7A7A',
    accentGold: '#FFD700',
    divider: '#E8E6E3',
    overlay: 'rgba(0,0,0,0.4)',
  },
  spacing: (multiplier: number) => 8 * multiplier,
  radius: {
    card: 16,
    button: 12,
    modal: 24,
  },
};

export type Theme = typeof theme;

