# SweetBible Data Architecture

This directory contains all the data structures and helper functions for the SweetBible app.

## 📁 Files Overview

### Core Data Files
- **`sweets_db.json`** - Main database of all sweets with complete information
- **`mockSweetsData.ts`** - TypeScript version with type definitions
- **`imageMap.ts`** - Maps sweet images to high-quality Unsplash URLs
- **`homePageData.ts`** - Home page specific data (featured content, collections, etc.)
- **`homePageHelpers.ts`** - Utility functions for processing home page data

## 🍬 Sweet Data Structure

Each sweet contains:
```typescript
interface Sweet {
  id: string;              // Unique identifier
  name: string;            // Display name
  isPro: boolean;          // Premium content flag
  category: string;        // Sweet category
  image: string;           // Image filename
  quickFacts: {
    origin: string;        // Country of origin
    year: number;          // Year created/popularized
    type: string;          // Specific sweet type
  };
  history: string;         // Detailed historical background
  flavorProfile: string;   // Taste and texture description
  trivia: string | null;   // Fun facts
  brandStory: string | null; // Marketing/brand information
}
```

## 🌍 Countries & Coverage

Currently includes **37 sweets** from **9 countries**:

| Country | Count | Examples |
|---------|-------|----------|
| 🇮🇹 Italy | 6 | Cannoli, Ferrero Rocher, Gelato, Tiramisu |
| 🇫🇷 France | 5 | Macaron, Croissant, Crème Brûlée |
| 🇯🇵 Japan | 5 | Mochi, Dorayaki, Wagashi |
| 🇺🇸 USA | 5 | Chocolate Chip Cookie, Brownie, Apple Pie |
| 🇩🇪 Germany | 4 | Black Forest Cake, Gummy Bears, Stollen |
| 🇬🇧 UK | 4 | Scones, Trifle, Sticky Toffee Pudding |
| 🇹🇷 Turkey | 2 | Baklava, Turkish Delight |
| 🇮🇳 India | 3 | Gulab Jamun, Rasgulla, Kulfi |
| 🇲🇽 Mexico | 3 | Tres Leches, Churros, Flan |

## 🏠 Home Page Data Types

### Featured Content
- **Featured Sweets** - Hero carousel items
- **Sweet of the Day** - Rotating daily feature based on date
- **Daily Themes** - Different themes for each day of the week

### Dynamic Collections
- **Trending** - Popular sweets with growth metrics and reasons
- **Seasonal** - Collections that change based on current season
- **Curated Collections** - Hand-picked themed collections

### Categories
- **Chocolate** 🍫 - All chocolate-based sweets
- **Pastries** 🥐 - Baked pastry items  
- **Cakes** 🍰 - Layered and sponge cakes
- **Cookies** 🍪 - All cookie varieties
- **Frozen** 🍦 - Ice creams and frozen treats
- **Confections** 🍬 - Candies and traditional sweets
- **Traditional** 🏺 - Heritage recipes
- **Festive** 🎉 - Holiday and celebration treats

### Discovery Features
- **Country Spotlights** - Featured countries with their signature sweets
- **Discovery Cards** - Educational content (facts, history, recipes)
- **Popular Searches** - Trending search terms
- **App Statistics** - Gamification data

## 🛠️ Helper Functions

The `homePageHelpers.ts` file provides utility functions:

### Content Retrieval
- `getTodaysFeatured()` - Get today's featured content
- `getCurrentSeasonCollection()` - Get current seasonal collection
- `getSweetOfTheDay()` - Get rotating daily sweet
- `getSweetsByCategory(categoryId)` - Filter by category
- `getSweetsByCountry(country)` - Filter by origin

### Search & Discovery
- `searchSweets(query)` - Full-text search across all fields
- `getSimilarSweets(sweetId)` - Find related sweets
- `getRandomSuggestions(count)` - Random recommendations

### Data Processing
- `getContentStats()` - Pro vs free content statistics
- `getCountryStats()` - Sweet distribution by country
- `getSweetsByEra()` - Group by historical time periods
- `formatNumber(num)` - Format large numbers with commas

### Collections
- `getSweetsByCollectionId(id)` - Get sweets in a collection
- `getFeaturedSweetsWithData()` - Featured sweets with full data
- `getTrendingWithData()` - Trending items with complete information

## 🎨 Image Management

All images are sourced from Unsplash with optimized parameters:
- **Format**: `auto=format&fit=crop&w=800&q=80`
- **Organization**: Grouped by country in `imageMap.ts`
- **Fallbacks**: Legacy PNG support maintained
- **Quality**: High-quality food photography

### Image Naming Convention
- `{sweet_name}.jpg` for new items
- Legacy `.png` files supported for backward compatibility

## 📊 Data Statistics

### Content Distribution
- **Free Content**: ~65% of sweets
- **Premium Content**: ~35% of sweets
- **Categories**: 8 major categories
- **Time Span**: From 300 AD to present day
- **Geographic Spread**: 3 continents, 9 countries

### Historical Coverage
- **Ancient** (Before 1000 AD): Mochi, Turkish Delight
- **Medieval** (1000-1499): Gulab Jamun, Pizzelle
- **Renaissance** (1500-1699): Macaron, Gelato, Crème Brûlée  
- **Modern** (1700-1899): Turkish Delight, Apple Pie
- **Contemporary** (1900-Present): Most modern sweets

## 🔄 Dynamic Features

### Time-Based Content
- **Daily Rotation**: Different featured content each day
- **Seasonal Changes**: Collections change with seasons
- **Weekly Themes**: Monday chocolate, Tuesday traditional, etc.

### Trending Algorithm
Trending items are determined by:
- Social media mentions (simulated)
- Celebrity endorsements
- Cultural events and shows
- Seasonal popularity

### Search Intelligence
Search covers:
- Sweet names and descriptions
- Countries and origins
- Categories and types
- Historical information
- Flavor profiles

## 🚀 Usage Examples

### Basic Data Access
```typescript
import data from '../data/sweets_db.json';
const allSweets = data.sweets;
```

### Home Page Integration
```typescript
import { trending, featuredSweets } from '../data/homePageData';
import { getTodaysFeatured, searchSweets } from '../data/homePageHelpers';

const todaysContent = getTodaysFeatured();
const searchResults = searchSweets('chocolate');
```

### Category Filtering
```typescript
import homeHelpers from '../data/homePageHelpers';

const chocolateSweets = homeHelpers.getSweetsByCategory('chocolate');
const italianSweets = homeHelpers.getSweetsByCountry('Italy');
```

## 📈 Future Expansion

The data structure supports easy expansion:
- **New Countries**: Add more international sweets
- **New Categories**: Expand classification system  
- **Rich Media**: Video and audio content support
- **User Content**: Reviews, ratings, user photos
- **Seasonal Events**: Holiday-specific collections
- **Localization**: Multi-language support

## 🔍 Data Quality

All data includes:
- ✅ **Historical Accuracy** - Researched creation dates and origins
- ✅ **Cultural Context** - Authentic background information
- ✅ **Detailed Descriptions** - Professional flavor profiles
- ✅ **Educational Value** - Interesting trivia and facts
- ✅ **Visual Appeal** - High-quality representative images

This comprehensive data architecture provides a rich foundation for the SweetBible app's content and user experience.