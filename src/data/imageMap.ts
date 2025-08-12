export const imageMap: Record<string, string> = {
  // Royalty-free placeholders (Unsplash)
  'snickers.png': 'https://images.unsplash.com/photo-1548907040-4d58b1ae0c8b?auto=format&fit=crop&w=800&q=80',
  'ferrero.png': 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
  // Additional freebies to flesh out screens
  'gummy.png': 'https://images.unsplash.com/photo-1604908811829-6e1a40add352?auto=format&fit=crop&w=800&q=80',
  'macaron.png': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
  // Italian sweets
  'cannoli.png': 'https://images.unsplash.com/photo-1587736793434-06b1b6b4a2a4?auto=format&fit=crop&w=800&q=80',
  'moncheri.png': 'https://images.unsplash.com/photo-1549007994-c25c4e6b2dd8?auto=format&fit=crop&w=800&q=80',
  'pizzelle.png': 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
};

export function getImageSource(name?: string) {
  if (!name) return undefined;
  const url = imageMap[name];
  return url ? { uri: url } : undefined;
}


