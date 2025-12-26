
import React from 'react';
import { 
  Waves, 
  Bed, 
  Bath, 
  Zap, 
  Utensils, 
  ShieldCheck, 
  Wifi, 
  Flame, 
  Mountain, 
  CheckCircle, 
  Map, 
  Coffee, 
  ParkingCircle,
  CloudRain,
  Compass
} from 'lucide-react';
import { Property, ThemeColors } from './types';

export const COLORS_VILLA: ThemeColors = {
  primary: '#2C241B', // Rich Espresso
  accent: '#9A846B', // Taupe
  background: '#FDFBF9', // Bone White
  textDark: '#1A1A1A',
  textLight: '#7A7A7A'
};

export const COLORS_VIEW: ThemeColors = {
  primary: '#1D2A20', // Forest Charcoal
  accent: '#829185', // Moss Mist
  background: '#F6F8F6', // Silver Sage
  textDark: '#1A1A1A',
  textLight: '#6B7A6F'
};

export const PROPERTY_VILLA: Property = {
  name: "The Villa",
  location: "Vaduvanchal Highs",
  tagline: "High-Altitude Seclusion",
  shortDesc: "A private architectural masterpiece carved into the Nilgiri foothills.",
  longDesc: "The Villa at Vaduvanchal is an exercise in restraint and luxury. Designed for the discerning traveler, it offers a sanctuary where the boundaries between the indoor and the lush Wayanad jungle blur. Here, every morning begins with the sight of clouds drifting across your infinity pool, and every evening ends with the aroma of roasted plantation beans.",
  heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000",
  amenities: [
    { icon: 'Waves', label: 'Heated Infinity Pool' },
    { icon: 'Bed', label: 'Master King Suites' },
    { icon: 'Compass', label: 'Private Estate Treks' },
    { icon: 'Utensils', label: 'Private Chef Service' },
    { icon: 'Wifi', label: 'Seamless connectivity' },
    { icon: 'CloudRain', label: 'Monsoon Rain Showers' },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
  ],
  philosophy: {
    title: "Curated Stillness",
    quote: "Luxury is the absence of noise.",
    description: "The Villa is built on the philosophy of 'Essentialism.' We believe that true premium living comes from the removal of the unnecessary. In the heart of the coffee estate, we provide the luxury of space, the luxury of time, and the luxury of unhindered nature."
  }
};

export const PROPERTY_VIEW: Property = {
  name: "The View",
  location: "Vattathu Vayal",
  tagline: "The Pulse of the Valley",
  shortDesc: "A minimalist retreat overlooking the sprawling paddy horizons.",
  longDesc: "Perched above the Vattathu Vayal valley, The View captures the essence of Wayanad's agrarian beauty. This is a space designed for contemplation, where the architecture serves as a frame for the ever-changing landscape of mist, sun, and rain. Ideal for those who seek to align their internal clock with the rhythm of the hills.",
  heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000",
  amenities: [
    { icon: 'Mountain', label: 'Valley View Decks' },
    { icon: 'CheckCircle', label: 'Eco-Luxe Design' },
    { icon: 'Map', label: 'Spice Trail Access' },
    { icon: 'Flame', label: 'Open Fire Pit' },
    { icon: 'Coffee', label: 'Estate Brewing' },
    { icon: 'CloudRain', label: 'Mist Observation Deck' },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200",
  ],
  philosophy: {
    title: "The Valley Rhythm",
    quote: "Nature does not hurry, yet everything is accomplished.",
    description: "At The View, our philosophy centers on 'Deep Connection.' We believe in a stay that doesn't just look at nature, but lives within it. By respecting the Vayal (valley) ecosystem, we offer a retreat that is humble in its footprint but majestic in its soul."
  }
};

export const CONTACT_INFO = {
  address: "Coffee Bloom Estates, Wayanad Highs, Kerala",
  phone: "+91 89211 42220",
  email: "concierge@coffeebloom.luxury",
  instagram: "@coffeebloom.wayanad",
  youtube: "@WayanadWhispers"
};

export const getIcon = (iconName: string, color: string) => {
  const props = { size: 20, strokeWidth: 1.2, color };
  switch (iconName) {
    case 'Waves': return <Waves {...props} />;
    case 'Bed': return <Bed {...props} />;
    case 'Bath': return <Bath {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Utensils': return <Utensils {...props} />;
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Wifi': return <Wifi {...props} />;
    case 'Flame': return <Flame {...props} />;
    case 'Mountain': return <Mountain {...props} />;
    case 'CheckCircle': return <CheckCircle {...props} />;
    case 'Map': return <Map {...props} />;
    case 'Coffee': return <Coffee {...props} />;
    case 'ParkingCircle': return <ParkingCircle {...props} />;
    case 'CloudRain': return <CloudRain {...props} />;
    case 'Compass': return <Compass {...props} />;
    default: return <CheckCircle {...props} />;
  }
};
