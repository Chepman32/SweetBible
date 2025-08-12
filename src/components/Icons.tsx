import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { theme } from '../theme/theme';

type IconProps = { size?: number; color?: string };

export function HeartIcon({ size = 24, color = theme.colors.primary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 21s-6.7-4.3-9.5-7.1C.1 11.5.3 7.6 3 5.7 5.1 4.2 7.9 4.8 9.4 6.6L12 9.6l2.6-3c1.5-1.8 4.3-2.4 6.4-.9 2.7 1.9 2.9 5.8.5 8.2C18.7 16.7 12 21 12 21z"
        fill={color}
      />
    </Svg>
  );
}

export function HeartOutlineIcon({ size = 24, color = theme.colors.textSecondary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M12 21s-6.7-4.3-9.5-7.1C.1 11.5.3 7.6 3 5.7c2.1-1.5 4.9-.9 6.4.9L12 9.6l2.6-3c1.5-1.8 4.3-2.4 6.4-.9 2.7 1.9 2.9 5.8.5 8.2C18.7 16.7 12 21 12 21z"
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
}

export function LockIcon({ size = 28, color = theme.colors.secondary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x={4} y={10} width={16} height={10} rx={3} fill={color} />
      <Path d="M8 10V7a4 4 0 118 0v3" stroke={theme.colors.surface} strokeWidth={2} strokeLinecap="round" />
      <Circle cx={12} cy={15} r={2} fill={theme.colors.surface} />
    </Svg>
  );
}

export function GlobeIcon({ size = 24, color = theme.colors.textPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={9} stroke={color} strokeWidth={2} fill="none" />
      <Path d="M3 12h18M12 3c3.5 3.8 3.5 13.2 0 18M12 3c-3.5 3.8-3.5 13.2 0 18" stroke={color} strokeWidth={2} />
    </Svg>
  );
}

export function LeafIcon({ size = 24, color = theme.colors.textPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16z" fill={color} opacity={0.15} />
      <Path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16z" stroke={color} strokeWidth={2} fill="none" />
      <Path d="M8 16c2-1 5-4 8-8" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

export function CalendarIcon({ size = 24, color = theme.colors.textPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x={3} y={5} width={18} height={16} rx={3} stroke={color} strokeWidth={2} fill="none" />
      <Path d="M8 3v4M16 3v4M3 11h18" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

export function CandyIcon({ size = 64 }: { size?: number }) {
  return (
    <Svg width={size} height={(size || 64) * 0.7} viewBox="0 0 120 84">
      <Rect x={24} y={24} width={72} height={36} rx={18} fill="#8AD7C1" />
      <Path d="M24 42H8l8-8m-8 8l8 8M96 42h16l-8-8m8 8l-8 8" stroke="#5AAE9C" strokeWidth={6} strokeLinecap="round" />
      <Path d="M60 28a14 14 0 100 28 14 14 0 000-28zm0 0c8 6 8 16 0 22-8-6-8-16 0-22z" fill="#5AAE9C" />
    </Svg>
  );
}

export function ProBadge({ label = 'Pro' }: { label?: string }) {
  return (
    <Svg width={44} height={20} viewBox="0 0 44 20">
      <Rect x={0} y={0} width={44} height={20} rx={10} fill={theme.colors.accentGold} />
      <Path
        d="M10 14V6h4a3 3 0 010 6h-2v2h-2zm8 0V6h3a2.5 2.5 0 010 5h-1v3h-2zm9-8a4 4 0 100 8 4 4 0 000-8z"
        fill="#7A5F00"
        opacity={0.9}
      />
    </Svg>
  );
}

export function TabHome({ size = 24, color = theme.colors.textPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M3 10l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2v-9z" fill={color} opacity={0.8} />
    </Svg>
  );
}

export function TabSweet({ size = 24, color = theme.colors.textPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Rect x={4} y={6} width={16} height={12} rx={3} fill={color} opacity={0.8} />
      <Path d="M4 12H2l1.5-1.5M4 12H2l1.5 1.5M20 12h2l-1.5-1.5M20 12h2L20.5 13.5" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

export function TabStore({ size = 24, color = theme.colors.textPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M3 7h18l-2 12H5L3 7zm3-3h12l1 3H5l1-3z" fill={color} opacity={0.8} />
    </Svg>
  );
}

export function TabSettings({ size = 24, color = theme.colors.textPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 8a4 4 0 100 8 4 4 0 000-8z" fill={color} opacity={0.8} />
      <Path d="M2 12h4M18 12h4M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" stroke={color} strokeWidth={1.5} />
    </Svg>
  );
}

export function BackIcon({ size = 24, color = theme.colors.textPrimary }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M15 18l-6-6 6-6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}


