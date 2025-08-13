# SweetBible 🍭

**An offline-first mobile encyclopedia for sweets and confections**

SweetBible is a comprehensive React Native application that serves as a digital encyclopedia for sweets, candies, and confections from around the world. Built with TypeScript, it features rich content about desserts, their history, ingredients, nutritional information, and cultural significance.

![React Native](https://img.shields.io/badge/React_Native-0.80.2-blue.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-blue) ![Zustand](https://img.shields.io/badge/Zustand-5.0.7-orange) ![Version](https://img.shields.io/badge/Version-0.0.1-green)

## ✨ Features

### 🏠 Core Functionality
- **Offline-First Architecture**: Complete app functionality without internet connection
- **Comprehensive Sweet Database**: Detailed information about desserts from around the world
- **Multi-Language Support**: Available in English, German, French, Portuguese, Russian, Chinese, and Spanish
- **Advanced Search**: Fuzzy search powered by Fuse.js for finding sweets by name, origin, or ingredients
- **Favorites System**: Save and organize your favorite sweets
- **Country-Based Exploration**: Browse sweets by country of origin

### 📱 User Experience
- **Onboarding Flow**: First-time user introduction with beautiful illustrations
- **Tab-Based Navigation**: Intuitive bottom tab navigation
- **Dark/Light Theme Support**: Consistent theming across the entire app
- **Smooth Animations**: Powered by Moti for delightful user interactions
- **Safe Area Handling**: Proper support for all device types and orientations

### 🎨 UI/UX Features
- **Custom Icons**: Vector-based icons using react-native-svg
- **Accordion Components**: Expandable content sections for detailed information
- **Image Gallery**: High-quality images from Unsplash (development placeholders)
- **Responsive Cards**: Grid-based layout that adapts to different screen sizes
- **Custom Illustrations**: Hand-crafted onboarding artwork

### 💰 Monetization (Pro Features)
- **In-App Purchases**: Mock IAP system ready for production integration
- **Premium Content**: Some sweets locked behind Pro subscription
- **Brand Stories**: Detailed brand histories for premium users
- **Advanced Filtering**: Enhanced search and filtering capabilities
- **Restore Purchases**: Purchase restoration functionality

## 🏗️ Technical Architecture

### Tech Stack
- **Framework**: React Native 0.80.2
- **Language**: TypeScript 5.0.4
- **Navigation**: React Navigation v7 (Stack + Bottom Tabs)
- **State Management**: Zustand 5.0.7 with persistence
- **Storage**: MMKV for fast key-value storage
- **Animations**: Moti 0.30.0
- **Search**: Fuse.js 7.1.0 for fuzzy searching
- **Icons**: React Native Vector Icons + Custom SVG icons

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Accordion.tsx    # Expandable content sections
│   ├── Icons.tsx        # Custom SVG icon components
│   ├── OnboardingArt.tsx # Custom illustrations
│   └── SweetCard.tsx    # Sweet display cards
├── data/               # Static data and helpers
│   ├── sweets_db.json  # Main sweet database
│   ├── imageMap.ts     # Image source mappings
│   └── homePageData.ts # Homepage content
├── hooks/              # Custom React hooks
│   └── useTranslation.ts # Internationalization hook
├── i18n/               # Internationalization
│   ├── index.ts        # i18n setup
│   └── locales/        # Translation files (7 languages)
├── navigation/         # Navigation configuration
│   ├── RootNavigator.tsx # Stack navigator
│   └── TabNavigator.tsx  # Bottom tabs
├── screens/            # Application screens (12 screens)
├── services/           # External services
│   └── iapMock.ts      # Mock in-app purchase service
├── store/              # State management
│   ├── useAppStore.ts  # Zustand store
│   └── mmkv.ts         # Persistent storage
├── theme/              # Design system
│   └── theme.ts        # Colors, spacing, typography
└── utils/              # Utility functions
    ├── translateSweetData.ts # Data translation helpers
    └── translateHomeData.ts  # Homepage translation helpers
```

### Data Model
Each sweet entry contains:
- **Basic Info**: Name, category, origin country, creation year
- **Rich Content**: Detailed history, flavor profiles, taste descriptions
- **Nutritional Data**: Calories, macronutrients, serving sizes
- **Ingredients**: Complete ingredient lists with mock measurements
- **Cultural Info**: Trivia, brand stories, cultural significance
- **Metadata**: Pro status, dietary notes, images

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- React Native development environment
- iOS: Xcode and CocoaPods
- Android: Android Studio and JDK

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SweetBible.git
   cd SweetBible
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (iOS only)
   ```bash
   cd ios
   bundle install
   bundle exec pod install
   cd ..
   ```

4. **Start Metro**
   ```bash
   npm start
   ```

5. **Run the app**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

### Development Scripts
- `npm start` - Start Metro bundler
- `npm run ios` - Run iOS app
- `npm run android` - Run Android app
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests

## 📱 Screens Overview

### Core Screens
| Screen | Description | Features |
|--------|-------------|----------|
| **SplashScreen** | App loading screen | Brand logo, loading states |
| **OnboardingScreen** | First-time user experience | Custom illustrations, feature intro |
| **HomeScreen** | Main dashboard | Featured sweets, categories, quick actions |
| **SearchScreen** | Search interface | Fuzzy search, filters, recent searches |
| **SweetDetailScreen** | Individual sweet details | Rich content, accordion sections, nutrition |
| **FavoritesScreen** | Saved sweets | Personal collection, sorting options |

### Navigation Screens  
| Screen | Description | Features |
|--------|-------------|----------|
| **CountriesScreen** | Country-based browsing | Flag icons, sweet counts per country |
| **CountryDetailScreen** | Country-specific sweets | Filtered sweet lists, country info |
| **SettingsScreen** | App configuration | Language, notifications, about |
| **StoreScreen** | Premium features | IAP interface, feature comparison |
| **NotificationsScreen** | Notification settings | Empty state with custom illustrations |
| **PurchaseSuccessScreen** | Purchase confirmation | Success animations, next steps |

## 🌍 Internationalization

The app supports 7 languages with complete translations:

- 🇺🇸 **English** (en) - Default
- 🇩🇪 **German** (de) 
- 🇫🇷 **French** (fr)
- 🇵🇹 **Portuguese** (pt)
- 🇷🇺 **Russian** (ru)
- 🇨🇳 **Chinese** (zh)
- 🇪🇸 **Spanish** (es)

Translation files are located in `src/i18n/locales/` with comprehensive coverage of all UI text, content descriptions, and error messages.

## 🎨 Design System

### Theme Structure
```typescript
theme = {
  colors: {
    primary: string,        // Main brand color
    secondary: string,      // Secondary actions
    background: string,     // App background
    surface: string,        // Card backgrounds
    textPrimary: string,    // Main text
    textSecondary: string,  // Secondary text
    divider: string,        // Borders and dividers
    error: string,          // Error states
    success: string         // Success states
  },
  spacing: (multiplier) => number, // 8px base unit
  radius: {
    button: number,         // Button border radius
    card: number,          // Card border radius
    modal: number          // Modal border radius
  }
}
```

### Component Patterns
- **Cards**: Consistent elevation and border radius
- **Typography**: Hierarchical text sizing (12-34pt)
- **Spacing**: 8px grid system
- **Colors**: Neutral palette with accent colors
- **Icons**: 20-24px standard sizing

## 💾 State Management

### Zustand Store Structure
```typescript
AppState = {
  // User Preferences
  hasCompletedOnboarding: boolean
  currentLanguage: Language
  
  // Premium Features
  isPro: boolean
  
  // User Data
  favorites: Record<string, true>
  
  // Actions
  setCompletedOnboarding: (completed: boolean) => void
  setPro: (isPro: boolean) => void
  toggleFavorite: (id: string) => void
  setLanguage: (language: Language) => void
}
```

### Persistence
- **Storage**: MMKV for high-performance key-value storage
- **Serialization**: JSON with automatic hydration
- **Partitioning**: Only essential data is persisted
- **Migration**: Ready for future schema changes

## 🔍 Search Implementation

### Fuzzy Search Features
- **Multi-field Search**: Name, origin, ingredients, categories
- **Typo Tolerance**: Handles misspellings and partial matches
- **Weighted Results**: Prioritizes exact matches and popular items
- **Performance**: Optimized for large datasets (1000+ items)

### Search Configuration
```typescript
fuseOptions = {
  keys: ['name', 'quickFacts.origin', 'ingredients', 'category'],
  threshold: 0.6,        // Sensitivity level
  minMatchCharLength: 2, // Minimum query length
  includeScore: true,    // For result ranking
  includeMatches: true   // For highlighting
}
```

## 🛒 Monetization Strategy

### Pro Features
- **Premium Content**: Access to exclusive sweet profiles
- **Brand Stories**: Detailed brand histories and marketing insights
- **Advanced Filtering**: Sort by nutritional values, dietary restrictions
- **Offline Sync**: Enhanced caching for premium content
- **Ad-Free Experience**: Remove promotional content

### Mock IAP Implementation
- **Product ID**: `sweetbible_pro`
- **Price**: $4.99 (one-time purchase)
- **Features**: Ready for App Store Connect integration
- **Testing**: Complete mock system for development

## 📊 Content Database

### Database Statistics
- **Total Sweets**: 50+ entries (expandable)
- **Countries**: 15+ represented
- **Categories**: Chocolate, Pastry, Candy, Ice Cream, etc.
- **Premium Content**: ~30% of entries require Pro
- **Nutritional Data**: Complete macronutrient information
- **Ingredients**: Full ingredient lists with measurements

### Content Quality
- **Historical Accuracy**: Researched origins and creation dates
- **Cultural Context**: Regional significance and traditions
- **Nutritional Precision**: Accurate calorie and macro data
- **Rich Media**: High-quality placeholder images
- **Detailed Descriptions**: Comprehensive flavor profiles

## 🔧 Development Status

### ✅ Implemented Features

#### Core Functionality
- ✅ Complete navigation system (Stack + Tab navigators)
- ✅ Offline-first sweet database with 50+ entries
- ✅ Multi-language support (7 languages)
- ✅ Advanced fuzzy search with Fuse.js
- ✅ Favorites system with persistence
- ✅ Onboarding flow with custom illustrations
- ✅ Country-based sweet categorization
- ✅ Rich sweet detail pages with accordion sections
- ✅ Theme system with consistent design
- ✅ State management with Zustand + MMKV persistence

#### UI/UX Components  
- ✅ Custom SVG icon library
- ✅ Reusable SweetCard component
- ✅ Accordion component for expandable content
- ✅ Safe area handling across all screens
- ✅ Loading and empty states
- ✅ Responsive grid layouts
- ✅ Custom onboarding artwork

#### Premium Features
- ✅ Mock in-app purchase system
- ✅ Pro content gating
- ✅ Purchase success flow
- ✅ Restore purchases functionality

#### Data & Content
- ✅ Comprehensive sweet database (JSON)
- ✅ Image mapping system (Unsplash placeholders)
- ✅ Nutritional information
- ✅ Ingredient lists with measurements
- ✅ Historical context and trivia
- ✅ Brand stories for premium content
- ✅ Translation utilities for dynamic content

### 🔄 TODO: Features to Implement

#### High Priority
- [ ] **Real In-App Purchases**: Replace mock IAP with actual App Store/Play Store integration
- [ ] **Push Notifications**: Implement notification system for new content and features
- [ ] **Advanced Filtering**: Add filters by calories, dietary restrictions, preparation time
- [ ] **Sweet Comparison**: Side-by-side comparison of nutritional values and ingredients
- [ ] **User Reviews**: Allow users to rate and review sweets
- [ ] **Recipe Integration**: Add step-by-step preparation instructions for homemade sweets

#### Medium Priority
- [ ] **Social Features**: Share favorite sweets with friends
- [ ] **Wishlist**: Separate wishlist from favorites for sweets to try
- [ ] **Dietary Tracking**: Calculate daily sugar/calorie intake from consumed sweets
- [ ] **Regional Availability**: Show where specific sweets can be purchased
- [ ] **Seasonal Content**: Holiday and seasonal sweet collections
- [ ] **Audio Descriptions**: Accessibility support with text-to-speech

#### Low Priority
- [ ] **AR Features**: Augmented reality sweet recognition
- [ ] **Sweet of the Day**: Daily featured sweet with push notifications
- [ ] **User-Generated Content**: Allow users to submit new sweet entries
- [ ] **Gamification**: Achievement system for trying different sweets
- [ ] **Export Data**: Export favorites and dietary data
- [ ] **Offline Maps**: Show nearby stores that sell specific sweets

#### Technical Improvements
- [ ] **Performance Optimization**: Image caching and lazy loading
- [ ] **Accessibility Improvements**: Screen reader support, high contrast mode
- [ ] **Testing Coverage**: Unit and integration tests
- [ ] **Analytics Integration**: User behavior tracking and app performance
- [ ] **Crash Reporting**: Production error monitoring
- [ ] **A/B Testing**: Feature flag system for experimentation

#### Content Expansion
- [ ] **Database Growth**: Expand to 500+ sweet entries
- [ ] **Video Content**: Add preparation and tasting videos
- [ ] **Professional Photos**: Replace Unsplash placeholders with custom photography
- [ ] **Expert Reviews**: Professional chef and food critic reviews
- [ ] **Cultural Deep Dives**: Detailed cultural significance articles
- [ ] **Pairing Suggestions**: Wine, coffee, and beverage pairings

#### Platform-Specific Features
- [ ] **iOS Widgets**: Home screen widgets for sweet of the day
- [ ] **Android Shortcuts**: Quick actions for search and favorites
- [ ] **Apple Watch**: Basic sweet information and nutrition tracking
- [ ] **iPad Optimization**: Enhanced layouts for tablet devices
- [ ] **macOS Catalyst**: Mac app support
- [ ] **Web Version**: Progressive web app for desktop users

### 🚧 Known Technical Debt
- [ ] Replace Unsplash image URLs with proper asset management
- [ ] Improve TypeScript coverage (currently ~85%)
- [ ] Add proper error boundaries for crash handling
- [ ] Implement proper logging system
- [ ] Add integration tests for critical user flows
- [ ] Optimize bundle size (currently ~45MB)

## 🚀 Deployment

### Pre-Release Checklist
- [ ] Replace mock IAP with real implementation
- [ ] Update Unsplash images with licensed content
- [ ] Configure analytics and crash reporting
- [ ] Set up proper API endpoints (if needed)
- [ ] Test on multiple device sizes and OS versions
- [ ] Prepare App Store/Play Store metadata

### Build Commands
```bash
# iOS Release Build
cd ios && xcodebuild -workspace SweetBible.xcworkspace -scheme SweetBible archive

# Android Release Build  
cd android && ./gradlew assembleRelease
```

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines and submit pull requests to the `main` branch.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make changes with proper TypeScript types
4. Test on both iOS and Android
5. Run linting (`npm run lint`)
6. Commit changes (`git commit -m 'Add amazing feature'`)
7. Push to branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Style
- TypeScript with strict mode enabled
- ESLint with React Native configuration
- Prettier for code formatting
- Conventional commit messages

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## 📞 Support

- 📧 Email: support@sweetbible.app
- 🐛 Bug Reports: [GitHub Issues](https://github.com/yourusername/SweetBible/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/SweetBible/discussions)

## 🙏 Acknowledgments

- Images provided by [Unsplash](https://unsplash.com) (development placeholders)
- Icons and illustrations created with react-native-svg
- Nutritional data sourced from various food databases
- Cultural and historical information researched from culinary sources

---

**SweetBible** - *Discover the sweet side of the world* 🌍🍭