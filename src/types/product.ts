export interface Product {
  id: string;
  slug: string;
  category: 'talismans' | 'oils' | 'incense' | 'yantras';
  titleSi: string;
  titleEn: string;
  subtitleSi: string;
  subtitleEn: string;
  descriptionSi: string;
  descriptionEn: string;
  priceLKR: number;
  priceUSD: number;
  image: string;
  badgeSi: string;
  badgeEn: string;
  sacredRating: number;
  ritualDate: string;
  consecrationCycles: number; // ජීවම් වාර ගණන
  auspiciousTimingSi: string;
  auspiciousTimingEn: string;
  botanicalIngredientsSi: string[];
  botanicalIngredientsEn: string[];
  reverenceRulesSi: string[];
  reverenceRulesEn: string[];
  serialNumberPrefix: string;
  inStock: boolean;
  featured?: boolean;
}
