import { t } from '../i18n';

export const translateSweetType = (type: string): string => {
  const typeKey = type.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '');
  
  const typeMap: Record<string, string> = {
    'pastry': 'pastry',
    'praline': 'praline',
    'christmasbread': 'christmasBread',
    'sandwichcookie': 'sandwichCookie',
    'chocolatepastry': 'chocolatePastry',
    'riceconfection': 'riceConfection',
    'chocolatewafer': 'chocolateWafer',
    'dropcookie': 'dropCookie',
    'chocolatecup': 'chocolateCup',
    'layeredcake': 'layeredCake',
    'gelatincandy': 'gelatinCandy',
    'wafflecookie': 'waffleCookie',
    'icecream': 'iceCream',
    'layereddessert': 'layeredDessert',
    'viennoiserie': 'viennoiserie',
    'liquourchocolate': 'liqueurChocolate',
    'puffpastry': 'puffPastry',
    'custarddessert': 'custardDessert',
    'filledpancake': 'filledPancake',
    'chocolatesquare': 'chocolateSquare',
    'candybar': 'candyBar',
    'gelconfection': 'gelConfection',
    'milkdumpling': 'milkDumpling',
    'soakedcake': 'soakedCake'
  };
  
  const translationKey = typeMap[typeKey];
  if (translationKey) {
    return t(`sweetTypes.${translationKey}`);
  }
  
  return type; // fallback to original if no translation found
};

export const translateCategory = (category: string): string => {
  const categoryKey = category.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '');
  
  const categoryMap: Record<string, string> = {
    'pastry': 'pastry',
    'chocolate': 'chocolate',
    'sweetbread': 'sweetBread',
    'cookie': 'cookie',
    'viennoiserie': 'viennoiserie',
    'ricecake': 'riceCake',
    'dropcookie': 'dropCookie',
    'chocolatebar': 'chocolateBar',
    'cake': 'cake',
    'gummycandy': 'gummyCandy',
    'friedsweet': 'friedSweet',
    'custard': 'custard',
    'pancake': 'pancake',
    'barcookie': 'barCookie',
    'frozendessert': 'frozenDessert',
    'dessert': 'dessert',
    'confection': 'confection'
  };
  
  const translationKey = categoryMap[categoryKey];
  if (translationKey) {
    return t(`categories.${translationKey}`);
  }
  
  return category;
};

export const translateCountry = (country: string): string => {
  const countryKey = country.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z]/g, '');
  
  const countryMap: Record<string, string> = {
    'italy': 'italy',
    'france': 'france',
    'japan': 'japan',
    'usa': 'usa',
    'unitedstates': 'usa',
    'germany': 'germany',
    'turkey': 'turkey',
    'india': 'india',
    'mexico': 'mexico'
  };
  
  const translationKey = countryMap[countryKey];
  if (translationKey) {
    return t(`countries.${translationKey}`);
  }
  
  return country;
};

export const translateSweetName = (id: string, fallbackName: string): string => {
  const idToKey: Record<string, string> = {
    mochi_01: 'japaneseMochi',
    tres_leches_01: 'tresLeches',
    turkish_delight_01: 'turkishDelight',
    wagashi_01: 'traditionalWagashi',
    cannoli_01: 'cannoli',
    ferrero_rocher_01: 'ferreroRocher',
    panettone_01: 'panettone',
    macaron_01: 'macaron',
    pain_au_chocolat_01: 'painAuChocolat',
    matcha_kitkat_01: 'matchaKitKat',
    chocolate_chip_cookie_01: 'chocolateChipCookie',
    reeses_01: 'reeses',
    black_forest_cake_01: 'blackForestCake',
    gummy_bears_01: 'gummyBears'
  };

  const key = idToKey[id];
  if (key) {
    const translated = t(`sweets.${key}`);
    if (translated && !translated.startsWith('sweets.')) return translated;
  }
  return fallbackName;
};