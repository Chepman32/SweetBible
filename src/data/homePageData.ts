export interface FeaturedSweet {
  id: string;
  name: string;
  origin: string;
  image: string;
  description: string;
  isPro: boolean;
  category: string;
}

export interface SweetCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  sweetIds: string[];
  isPro: boolean;
}

export interface TrendingItem {
  id: string;
  name: string;
  origin: string;
  image: string;
  trendingReason: string;
  growth: string; // e.g., "+25%"
}

export interface SeasonalCollection {
  id: string;
  season: string;
  title: string;
  description: string;
  image: string;
  sweetIds: string[];
  startMonth: number;
  endMonth: number;
}

export interface DiscoveryCard {
  id: string;
  type: 'fact' | 'recipe' | 'history' | 'culture';
  title: string;
  content: string;
  image: string;
  relatedSweetId?: string;
}

export interface CountrySpotlight {
  id: string;
  country: string;
  flag: string;
  title: string;
  description: string;
  image: string;
  featuredSweetIds: string[];
  totalSweets: number;
}

// Featured sweets for hero carousel
export const featuredSweets: FeaturedSweet[] = [
  {
    id: "ferrero_rocher_01",
    name: "Ferrero Rocher",
    origin: "Italy",
    image: "ferrero_rocher.jpg",
    description: "Golden luxury chocolate with hazelnut perfection",
    isPro: true,
    category: "Chocolate"
  },
  {
    id: "macaron_01",
    name: "French Macaron",
    origin: "France",
    image: "macaron.jpg",
    description: "Delicate almond cookies that melt in your mouth",
    isPro: false,
    category: "Cookie"
  },
  {
    id: "mochi_01",
    name: "Japanese Mochi",
    origin: "Japan",
    image: "mochi.jpg",
    description: "Ancient rice cakes with modern flavors",
    isPro: false,
    category: "Rice Cake"
  },
  {
    id: "baklava_01",
    name: "Turkish Baklava",
    origin: "Turkey",
    image: "baklava.jpg",
    description: "Layers of phyllo pastry with honey and nuts",
    isPro: true,
    category: "Pastry"
  },
  {
    id: "tres_leches_01",
    name: "Tres Leches Cake",
    origin: "Mexico",
    image: "tres_leches.jpg",
    description: "Impossibly moist cake soaked in three milks",
    isPro: true,
    category: "Cake"
  }
];

// Sweet categories for browsing
export const sweetCategories: SweetCategory[] = [
  {
    id: "chocolate",
    name: "Chocolate",
    description: "Decadent cocoa creations from around the world",
    icon: "🍫",
    color: "#8B4513",
    count: 8
  },
  {
    id: "pastry",
    name: "Pastries",
    description: "Flaky, buttery, and perfectly baked delights",
    icon: "🥐",
    color: "#DAA520",
    count: 12
  },
  {
    id: "cake",
    name: "Cakes",
    description: "Layered celebrations of sugar and spice",
    icon: "🍰",
    color: "#FF69B4",
    count: 6
  },
  {
    id: "cookie",
    name: "Cookies",
    description: "Crispy, chewy, and irresistibly sweet treats",
    icon: "🍪",
    color: "#CD853F",
    count: 7
  },
  {
    id: "frozen",
    name: "Frozen",
    description: "Cool treats to beat the heat",
    icon: "🍦",
    color: "#87CEEB",
    count: 3
  },
  {
    id: "candy",
    name: "Confections",
    description: "Pure sugar magic in bite-sized form",
    icon: "🍬",
    color: "#FF1493",
    count: 5
  },
  {
    id: "traditional",
    name: "Traditional",
    description: "Time-honored recipes passed through generations",
    icon: "🏺",
    color: "#8B4513",
    count: 8
  },
  {
    id: "festive",
    name: "Festive",
    description: "Special occasion and holiday treats",
    icon: "🎉",
    color: "#FF6347",
    count: 4
  }
];

// Curated collections
export const collections: Collection[] = [
  {
    id: "chocolate_lovers",
    title: "Chocolate Lover's Paradise",
    subtitle: "For the ultimate cocoa connoisseur",
    description: "Dive into the rich world of chocolate with these premium selections from master chocolatiers across Europe.",
    image: "https://images.unsplash.com/photo-1549007994-c25c4e6b2dd8?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["ferrero_rocher_01", "mon_cheri_01", "brownie_01", "snickers_01", "black_forest_cake_01"],
    isPro: true
  },
  {
    id: "around_the_world",
    title: "Sweet Journey Around the World",
    subtitle: "Explore global dessert traditions",
    description: "Travel the globe through your taste buds with iconic sweets from every continent.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["cannoli_01", "macaron_01", "mochi_01", "gulab_jamun_01", "baklava_01", "tres_leches_01"],
    isPro: false
  },
  {
    id: "comfort_classics",
    title: "Comfort Food Classics",
    subtitle: "Nostalgic treats that warm the heart",
    description: "Rediscover the sweets that defined childhoods and created lasting memories.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["chocolate_chip_cookie_01", "apple_pie_01", "brownie_01", "gummy_bears_01", "dorayaki_01"],
    isPro: false
  },
  {
    id: "artisan_creations",
    title: "Artisan Masterpieces",
    subtitle: "Where culinary art meets sweet perfection",
    description: "Discover sweets that are as beautiful as they are delicious, crafted by master artisans.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["wagashi_01", "creme_brulee_01", "tiramisu_01", "turkish_delight_01"],
    isPro: true
  },
  {
    id: "quick_treats",
    title: "5-Minute Sweet Fixes",
    subtitle: "Instant gratification guaranteed",
    description: "Sometimes you need sweetness now. These treats deliver immediate satisfaction.",
    image: "https://images.unsplash.com/photo-1604908811829-6e1a40add352?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["gummy_bears_01", "snickers_01", "turkish_delight_01", "chocolate_chip_cookie_01"],
    isPro: false
  }
];

// Trending sweets data
export const trending: TrendingItem[] = [
  {
    id: "mochi_01",
    name: "Japanese Mochi",
    origin: "Japan",
    image: "mochi.jpg",
    trendingReason: "Viral TikTok recipes",
    growth: "+340%"
  },
  {
    id: "tres_leches_01",
    name: "Tres Leches Cake",
    origin: "Mexico",
    image: "tres_leches.jpg",
    trendingReason: "Celebrity chef endorsements",
    growth: "+125%"
  },
  {
    id: "turkish_delight_01",
    name: "Turkish Delight",
    origin: "Turkey",
    image: "turkish_delight.jpg",
    trendingReason: "Netflix show features",
    growth: "+89%"
  },
  {
    id: "wagashi_01",
    name: "Traditional Wagashi",
    origin: "Japan",
    image: "wagashi.jpg",
    trendingReason: "Mindful eating trend",
    growth: "+67%"
  }
];

// Seasonal collections
export const seasonalCollections: SeasonalCollection[] = [
  {
    id: "winter_warmth",
    season: "Winter",
    title: "Winter Warmth Collection",
    description: "Rich, warming sweets perfect for cold winter nights",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["stollen_01", "lebkuchen_01", "mon_cheri_01", "sticky_toffee_pudding_01"],
    startMonth: 12,
    endMonth: 2
  },
  {
    id: "spring_fresh",
    season: "Spring",
    title: "Spring Awakening",
    description: "Light, floral, and refreshing treats for the season of renewal",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["macaron_01", "wagashi_01", "turkish_delight_01", "madeleine_01"],
    startMonth: 3,
    endMonth: 5
  },
  {
    id: "summer_cool",
    season: "Summer",
    title: "Cool Summer Treats",
    description: "Beat the heat with these refreshing frozen delights",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["gelato_01", "kulfi_01", "mochi_01"],
    startMonth: 6,
    endMonth: 8
  },
  {
    id: "autumn_harvest",
    season: "Autumn",
    title: "Autumn Harvest",
    description: "Celebrate the season with warm spices and harvest flavors",
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722b1f?auto=format&fit=crop&w=800&q=80",
    sweetIds: ["apple_pie_01", "pumpkin_spice_latte_cake_01", "cinnamon_rolls_01"],
    startMonth: 9,
    endMonth: 11
  }
];

// Discovery content cards
export const discoveryCards: DiscoveryCard[] = [
  {
    id: "chocolate_fact_1",
    type: "fact",
    title: "The World's Most Expensive Chocolate",
    content: "The most expensive chocolate in the world costs $2,600 per pound and is made from rare Trinitario cacao beans.",
    image: "https://images.unsplash.com/photo-1548907040-4d58b1ae0c8b?auto=format&fit=crop&w=800&q=80",
    relatedSweetId: "ferrero_rocher_01"
  },
  {
    id: "macaron_history",
    type: "history",
    title: "The Macaron's Royal Connection",
    content: "Macarons were introduced to France by Catherine de' Medici's Italian pastry chefs when she married King Henry II in 1533.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    relatedSweetId: "macaron_01"
  },
  {
    id: "mochi_culture",
    type: "culture",
    title: "New Year Mochi Tradition",
    content: "In Japan, eating mochi on New Year's Day is believed to bring good luck and longevity for the coming year.",
    image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&w=800&q=80",
    relatedSweetId: "mochi_01"
  },
  {
    id: "cookie_recipe",
    type: "recipe",
    title: "The Secret to Perfect Chocolate Chip Cookies",
    content: "The key to chewy cookies? Use more brown sugar than white sugar and slightly underbake them.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    relatedSweetId: "chocolate_chip_cookie_01"
  },
  {
    id: "gelato_fact",
    type: "fact",
    title: "Gelato vs Ice Cream",
    content: "Gelato contains 70% less air than ice cream and is served at a warmer temperature, making flavors more intense.",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=800&q=80",
    relatedSweetId: "gelato_01"
  },
  {
    id: "baklava_tradition",
    type: "culture",
    title: "Baklava's Ottoman Legacy",
    content: "Traditional Turkish baklava must have exactly 40 layers of phyllo dough, representing the 40 days of rain during Noah's flood.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=80",
    relatedSweetId: "baklava_01"
  }
];

// Country spotlights
export const countrySpotlights: CountrySpotlight[] = [
  {
    id: "italy_spotlight",
    country: "Italy",
    flag: "🇮🇹",
    title: "Sweet Italy",
    description: "From Sicily's cannoli to Northern Italy's gelato, discover the dolce vita through desserts",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    featuredSweetIds: ["cannoli_01", "gelato_01", "tiramisu_01", "ferrero_rocher_01"],
    totalSweets: 6
  },
  {
    id: "japan_spotlight",
    country: "Japan",
    flag: "🇯🇵",
    title: "Land of Wagashi",
    description: "Experience the artistry and philosophy behind Japan's traditional and modern sweets",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=80",
    featuredSweetIds: ["mochi_01", "dorayaki_01", "wagashi_01"],
    totalSweets: 5
  },
  {
    id: "france_spotlight",
    country: "France",
    flag: "🇫🇷",
    title: "French Pâtisserie",
    description: "Master the techniques and traditions of French pastry excellence",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    featuredSweetIds: ["macaron_01", "creme_brulee_01", "croissant_01"],
    totalSweets: 5
  },
  {
    id: "usa_spotlight",
    country: "United States",
    flag: "🇺🇸",
    title: "American Classics",
    description: "Comfort food sweets that defined generations of sweet tooths",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
    featuredSweetIds: ["chocolate_chip_cookie_01", "brownie_01", "apple_pie_01"],
    totalSweets: 5
  }
];

// Daily featured content
export const dailyFeatures = {
  monday: {
    title: "Manic Monday Chocolate",
    description: "Start your week with rich, mood-boosting chocolate",
    featuredIds: ["ferrero_rocher_01", "brownie_01", "mon_cheri_01"]
  },
  tuesday: {
    title: "Traditional Tuesday",
    description: "Honor time-tested recipes from around the world",
    featuredIds: ["wagashi_01", "baklava_01", "gulab_jamun_01"]
  },
  wednesday: {
    title: "Worldly Wednesday", 
    description: "Take a mid-week trip around the globe",
    featuredIds: ["turkish_delight_01", "tres_leches_01", "mochi_01"]
  },
  thursday: {
    title: "Throwback Thursday",
    description: "Nostalgic treats that bring back memories",
    featuredIds: ["chocolate_chip_cookie_01", "gummy_bears_01", "apple_pie_01"]
  },
  friday: {
    title: "Fancy Friday",
    description: "Celebrate the weekend with elegant desserts",
    featuredIds: ["creme_brulee_01", "macaron_01", "tiramisu_01"]
  },
  saturday: {
    title: "Sweet Saturday",
    description: "Indulge in weekend treats and comfort food",
    featuredIds: ["black_forest_cake_01", "sticky_toffee_pudding_01", "cheesecake_01"]
  },
  sunday: {
    title: "Sunday Specials",
    description: "End the week with family favorites",
    featuredIds: ["dorayaki_01", "scones_01", "cannoli_01"]
  }
};

// Popular searches and suggestions
export const popularSearches = [
  "chocolate",
  "Italian desserts", 
  "gluten-free sweets",
  "Japanese mochi",
  "French pastries",
  "holiday treats",
  "easy recipes",
  "vegan options"
];

// Quick stats for gamification
export const appStats = {
  totalSweets: 37,
  totalCountries: 9,
  totalCategories: 8,
  totalUsers: "500K+",
  totalReviews: "2.1M+",
  averageRating: 4.8
};

export default {
  featuredSweets,
  sweetCategories,
  collections,
  trending,
  seasonalCollections,
  discoveryCards,
  countrySpotlights,
  dailyFeatures,
  popularSearches,
  appStats
};