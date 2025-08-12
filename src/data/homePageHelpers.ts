import { mockSweetsData } from './mockSweetsData';
import { 
  featuredSweets, 
  sweetCategories, 
  collections, 
  trending, 
  seasonalCollections,
  countrySpotlights,
  dailyFeatures,
  popularSearches 
} from './homePageData';

// Helper function to get current day's featured content
export const getTodaysFeatured = () => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = days[new Date().getDay()];
  return dailyFeatures[today as keyof typeof dailyFeatures];
};

// Helper function to get current season's collection
export const getCurrentSeasonCollection = () => {
  const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11, so add 1
  
  return seasonalCollections.find(collection => {
    const { startMonth, endMonth } = collection;
    
    // Handle collections that span across year boundary (like winter)
    if (startMonth > endMonth) {
      return currentMonth >= startMonth || currentMonth <= endMonth;
    }
    
    return currentMonth >= startMonth && currentMonth <= endMonth;
  }) || seasonalCollections[0]; // fallback to first collection
};

// Helper function to get sweets by category
export const getSweetsByCategory = (categoryId: string) => {
  const categoryMap: Record<string, string[]> = {
    chocolate: ['Chocolate', 'Chocolate Bar', 'Liqueur Chocolate', 'Praline'],
    pastry: ['Pastry', 'Puff Pastry', 'Phyllo Pastry'],
    cake: ['Cake', 'Layered Cake', 'Sponge Cake', 'Soaked Cake'],
    cookie: ['Cookie', 'Sandwich Cookie', 'Drop Cookie', 'Waffle Cookie', 'Bar Cookie'],
    frozen: ['Frozen Dessert', 'Ice Cream'],
    candy: ['Confection', 'Gel Confection', 'Gummy Candy', 'Gelatin Candy', 'Candy Bar'],
    traditional: ['Rice Confection', 'Art Confection', 'Traditional Sweet', 'Milk Dumpling'],
    festive: ['Christmas Bread', 'Gingerbread']
  };

  const types = categoryMap[categoryId] || [];
  return mockSweetsData.filter(sweet => types.includes(sweet.quickFacts.type));
};

// Helper function to get sweets by country
export const getSweetsByCountry = (country: string) => {
  return mockSweetsData.filter(sweet => sweet.quickFacts.origin === country);
};

// Helper function to get random sweets for "You might like" section
export const getRandomSuggestions = (count: number = 4, excludeIds: string[] = []) => {
  const available = mockSweetsData.filter(sweet => !excludeIds.includes(sweet.id));
  const shuffled = available.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get sweets by collection ID
export const getSweetsByCollectionId = (collectionId: string) => {
  const collection = collections.find(c => c.id === collectionId);
  if (!collection) return [];
  
  return mockSweetsData.filter(sweet => collection.sweetIds.includes(sweet.id));
};

// Helper function to get featured sweets with full data
export const getFeaturedSweetsWithData = () => {
  return featuredSweets.map(featured => {
    const fullData = mockSweetsData.find(sweet => sweet.id === featured.id);
    return { ...featured, fullData };
  });
};

// Helper function to search sweets
export const searchSweets = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  
  return mockSweetsData.filter(sweet => 
    sweet.name.toLowerCase().includes(lowercaseQuery) ||
    sweet.quickFacts.origin.toLowerCase().includes(lowercaseQuery) ||
    sweet.category.toLowerCase().includes(lowercaseQuery) ||
    sweet.quickFacts.type.toLowerCase().includes(lowercaseQuery) ||
    sweet.history.toLowerCase().includes(lowercaseQuery) ||
    sweet.flavorProfile.toLowerCase().includes(lowercaseQuery)
  );
};

// Helper function to get trending sweets with full data
export const getTrendingWithData = () => {
  return trending.map(trend => {
    const fullData = mockSweetsData.find(sweet => sweet.id === trend.id);
    return { ...trend, fullData };
  });
};

// Helper function to get similar sweets (by category or origin)
export const getSimilarSweets = (sweetId: string, count: number = 3) => {
  const sweet = mockSweetsData.find(s => s.id === sweetId);
  if (!sweet) return [];

  // Find sweets from same country or category, excluding the original sweet
  const similar = mockSweetsData.filter(s => 
    s.id !== sweetId && (
      s.quickFacts.origin === sweet.quickFacts.origin ||
      s.category === sweet.category
    )
  );

  return similar.slice(0, count);
};

// Helper function to get pro vs free content stats
export const getContentStats = () => {
  const total = mockSweetsData.length;
  const proCount = mockSweetsData.filter(sweet => sweet.isPro).length;
  const freeCount = total - proCount;
  
  return {
    total,
    pro: proCount,
    free: freeCount,
    proPercentage: Math.round((proCount / total) * 100)
  };
};

// Helper function to get sweets by era/time period
export const getSweetsByEra = () => {
  const ancient = mockSweetsData.filter(s => s.quickFacts.year < 1000);
  const medieval = mockSweetsData.filter(s => s.quickFacts.year >= 1000 && s.quickFacts.year < 1500);
  const renaissance = mockSweetsData.filter(s => s.quickFacts.year >= 1500 && s.quickFacts.year < 1700);
  const modern = mockSweetsData.filter(s => s.quickFacts.year >= 1700 && s.quickFacts.year < 1900);
  const contemporary = mockSweetsData.filter(s => s.quickFacts.year >= 1900);
  
  return {
    ancient: { sweets: ancient, period: "Before 1000 AD" },
    medieval: { sweets: medieval, period: "1000-1499 AD" },
    renaissance: { sweets: renaissance, period: "1500-1699 AD" }, 
    modern: { sweets: modern, period: "1700-1899 AD" },
    contemporary: { sweets: contemporary, period: "1900-Present" }
  };
};

// Helper function to get country statistics
export const getCountryStats = () => {
  const countries: Record<string, number> = {};
  
  mockSweetsData.forEach(sweet => {
    const country = sweet.quickFacts.origin;
    countries[country] = (countries[country] || 0) + 1;
  });
  
  return Object.entries(countries)
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count);
};

// Helper function to format numbers with commas
export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

// Helper function to get random popular search suggestions
export const getSearchSuggestions = (count: number = 4) => {
  const shuffled = popularSearches.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get sweet of the day (based on current date)
export const getSweetOfTheDay = () => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % mockSweetsData.length;
  return mockSweetsData[index];
};

// Helper function to validate if sweet exists
export const sweetExists = (sweetId: string): boolean => {
  return mockSweetsData.some(sweet => sweet.id === sweetId);
};

export default {
  getTodaysFeatured,
  getCurrentSeasonCollection,
  getSweetsByCategory,
  getSweetsByCountry,
  getRandomSuggestions,
  getSweetsByCollectionId,
  getFeaturedSweetsWithData,
  searchSweets,
  getTrendingWithData,
  getSimilarSweets,
  getContentStats,
  getSweetsByEra,
  getCountryStats,
  formatNumber,
  getSearchSuggestions,
  getSweetOfTheDay,
  sweetExists
};