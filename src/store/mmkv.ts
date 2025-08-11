import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({ id: 'sweetbible' });

export const storageGetBoolean = (key: string, fallback: boolean = false) => {
  try {
    const value = storage.getBoolean(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
};

export const storageGetString = (key: string, fallback?: string) => {
  try {
    return storage.getString(key) ?? fallback;
  } catch {
    return fallback;
  }
};

export const storageGetNumber = (key: string, fallback?: number) => {
  try {
    const value = storage.getNumber(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
};

