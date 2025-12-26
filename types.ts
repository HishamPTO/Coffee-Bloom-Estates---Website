
export type SiteMode = 'VILLA' | 'VIEW';

export interface Amenity {
  icon: string;
  label: string;
}

export interface Philosophy {
  title: string;
  quote: string;
  description: string;
}

export interface Property {
  name: string;
  location: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  amenities: Amenity[];
  heroImage: string;
  gallery: string[];
  philosophy: Philosophy;
}

export interface ThemeColors {
  primary: string;
  accent: string;
  background: string;
  textDark: string;
  textLight: string;
}
