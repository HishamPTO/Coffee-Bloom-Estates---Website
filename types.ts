
export type SiteMode = 'VILLA' | 'VIEW';

export interface Amenity {
  icon: string;
  label: string;
}

export interface RoomType {
  count: string;
  name: string;
}

export interface RoomFeature {
  icon: string;
  label: string;
}

export interface Highlight {
  title: string;
  image: string;
}

export interface Philosophy {
  title: string;
  quote: string;
  description: string;
}

export interface OnSiteExperience {
  label: string;
  icon: string;
}

export interface Property {
  name: string;
  location: string;
  tagline: string;
  price: string;
  shortDesc: string;
  longDesc: string;
  amenities: Amenity[];
  heroImage: string;
  gallery: string[];
  roomTypes: RoomType[];
  roomFeatures: RoomFeature[];
  highlights: Highlight[];
  philosophy: Philosophy;
  address: string;
  mapLink: string;
  onSiteExperiences: OnSiteExperience[];
  travelInfo: {
    icon: 'Plane' | 'Train';
    text: string;
  }[];
}

export interface ThemeColors {
  primary: string;
  accent: string;
  background: string;
  textDark: string;
  textLight: string;
  cardBg: string;
  iconAccent: string;
}
