import React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export function ArtWelcome({ width = 220 }: { width?: number }) {
  const h = width * 0.75;
  return (
    <Svg width={width} height={h} viewBox="0 0 220 160">
      <Rect x={10} y={80} width={80} height={50} rx={12} fill="#F4A5A5" />
      <Circle cx={170} cy={75} r={46} fill="#F07D7D" />
      <Path d="M60 120c8-16 28-26 50-26 26 0 48 14 54 26" stroke="#FCE0E0" strokeWidth={10} strokeLinecap="round" />
      <Path d="M36 96c8-6 8-18 0-24-8 6-8 18 0 24z" fill="#fff" opacity={0.9} />
      <Path d="M160 60c8-6 8-18 0-24-8 6-8 18 0 24z" fill="#fff" opacity={0.9} />
    </Svg>
  );
}

export function ArtOffline({ width = 220 }: { width?: number }) {
  const h = width * 0.75;
  return (
    <Svg width={width} height={h} viewBox="0 0 220 160">
      <Rect x={50} y={30} width={120} height={80} rx={16} fill="#8AD7C1" />
      <Rect x={70} y={46} width={80} height={48} rx={8} fill="#fff" opacity={0.9} />
      <Path d="M90 86l20-20 20 20" stroke="#5AAE9C" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M180 48c10 0 18 8 18 18" stroke="#5AAE9C" strokeWidth={6} strokeLinecap="round" />
      <Path d="M12 140c20-24 56-40 98-40s78 16 98 40" stroke="#C8EDE5" strokeWidth={8} strokeLinecap="round" />
    </Svg>
  );
}

export function ArtPro({ width = 220 }: { width?: number }) {
  const h = width * 0.75;
  return (
    <Svg width={width} height={h} viewBox="0 0 220 160">
      <Rect x={32} y={30} width={156} height={84} rx={12} fill="#FFE08A" />
      <Rect x={52} y={52} width={116} height={40} rx={8} fill="#fff" opacity={0.95} />
      <Path d="M160 120l-10-16h20l-10 16z" fill="#FFB703" />
      <Path d="M90 72h40" stroke="#8A6B00" strokeWidth={8} strokeLinecap="round" />
      <Path d="M70 112h80" stroke="#FFD36B" strokeWidth={10} strokeLinecap="round" />
    </Svg>
  );
}


