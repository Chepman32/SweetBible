import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from './mmkv';

export type FavoriteMap = Record<string, true>;

type AppState = {
  hasCompletedOnboarding: boolean;
  isPro: boolean;
  favorites: FavoriteMap;
  setCompletedOnboarding: (completed: boolean) => void;
  setPro: (isPro: boolean) => void;
  toggleFavorite: (id: string) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      hasCompletedOnboarding: false,
      isPro: false,
      favorites: {},
      setCompletedOnboarding: completed => set({ hasCompletedOnboarding: completed }),
      setPro: isPro => set({ isPro }),
      toggleFavorite: id => {
        const current = get().favorites;
        const updated: FavoriteMap = { ...current };
        if (updated[id]) {
          delete updated[id];
        } else {
          updated[id] = true;
        }
        set({ favorites: updated });
      },
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => ({
        setItem: (key, value) => storage.set(key, value),
        getItem: key => storage.getString(key) ?? null,
        removeItem: key => storage.delete(key),
      })),
      partialize: state => ({
        hasCompletedOnboarding: state.hasCompletedOnboarding,
        isPro: state.isPro,
        favorites: state.favorites,
      }),
    },
  ),
);

