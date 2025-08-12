import { t } from '../i18n';

export const translateDailyFeature = (day: string) => {
  const dayTranslations: Record<string, { title: string; description: string }> = {
    monday: {
      title: t('home.manicMondayChocolate') || 'Manic Monday Chocolate',
      description: t('home.startYourWeekWithChocolate') || 'Start your week with rich, mood-boosting chocolate'
    },
    tuesday: {
      title: t('home.traditionalTuesday') || 'Traditional Tuesday',
      description: t('home.honorTimeTestedRecipes') || 'Honor time-tested recipes from around the world'
    },
    wednesday: {
      title: t('home.worldlyWednesday') || 'Worldly Wednesday',
      description: t('home.midWeekTrip') || 'Take a mid-week trip around the globe'
    },
    thursday: {
      title: t('home.throwbackThursday') || 'Throwback Thursday',
      description: t('home.nostalgicTreats') || 'Nostalgic treats that bring back memories'
    },
    friday: {
      title: t('home.fancyFriday') || 'Fancy Friday',
      description: t('home.celebrateWithElegant') || 'Celebrate the weekend with elegant desserts'
    },
    saturday: {
      title: t('home.sweetSaturday') || 'Sweet Saturday',
      description: t('home.indulgeInWeekend') || 'Indulge in weekend treats and comfort food'
    },
    sunday: {
      title: t('home.sundaySpecials') || 'Sunday Specials',
      description: t('home.endWeekWithFamily') || 'End the week with family favorites'
    }
  };

  return dayTranslations[day] || dayTranslations.tuesday;
};

export const translateSeasonalCollection = (season: string) => {
  const seasonTranslations: Record<string, { title: string; description: string }> = {
    winter: {
      title: t('home.winterWarmth') || 'Winter Warmth Collection',
      description: t('home.richWarmingSweets') || 'Rich, warming sweets perfect for cold winter nights'
    },
    spring: {
      title: t('home.springAwakening') || 'Spring Awakening',
      description: t('home.lightFloralTreats') || 'Light, floral, and refreshing treats for the season of renewal'
    },
    summer: {
      title: t('home.coolSummerTreats') || 'Cool Summer Treats',
      description: t('home.beatTheHeat') || 'Beat the heat with these refreshing frozen delights'
    },
    autumn: {
      title: t('home.autumnHarvest') || 'Autumn Harvest',
      description: t('home.celebrateWithSpices') || 'Celebrate the season with warm spices and harvest flavors'
    }
  };

  return seasonTranslations[season] || seasonTranslations.summer;
};

export const translateTrendingReason = (reason: string) => {
  const reasonTranslations: Record<string, string> = {
    'Viral TikTok recipes': t('home.viralTikTokRecipes') || 'Viral TikTok recipes',
    'Celebrity chef endorsements': t('home.celebrityChefEndorsements') || 'Celebrity chef endorsements',
    'Netflix show features': t('home.netflixShowFeatures') || 'Netflix show features',
    'Mindful eating trend': t('home.mindfulEatingTrend') || 'Mindful eating trend'
  };

  return reasonTranslations[reason] || reason;
};