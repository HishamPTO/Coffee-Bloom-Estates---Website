
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
  Compass,
  Wind,
  History,
  Leaf,
  Globe,
  Sprout,
  MessageSquare,
  Plane,
  TrainFront,
  Tv,
  Palmtree,
  Armchair,
  Sparkles,
  Wind as WindIcon,
  Sun,
  Maximize,
  Heart
} from 'lucide-react';
import { Property, ThemeColors } from './types';

export const COLORS_VILLA: ThemeColors = {
  primary: '#1A1A1A', // Sharp Black for high contrast
  accent: '#A69279',  // Sophisticated Gold/Taupe
  background: '#FFFFFF', 
  textDark: '#111111',
  textLight: '#7A7A7A',
  cardBg: 'transparent',
  iconAccent: '#1A1A1A'
};

export const COLORS_VIEW: ThemeColors = {
  primary: '#1A2A20', // Deep Forest
  accent: '#94A398',  // Soft Moss
  background: '#F8F9F8', 
  textDark: '#121212',
  textLight: '#6B7A6F',
  cardBg: 'transparent',
  iconAccent: '#1A2A20'
};

export const PROPERTY_VILLA: Property = {
  name: "The Villa",
  location: "Vaduvanchal Highs",
  tagline: "High-Altitude Seclusion",
  price: "12,000",
  shortDesc: "A private architectural masterpiece carved into the Nilgiri foothills.",
  longDesc: "The Villa at Vaduvanchal is an exercise in restraint and luxury. Designed for the discerning traveler, it offers a sanctuary where the boundaries between the indoor and the lush Wayanad jungle blur. Here, every morning begins with the sight of clouds drifting across your infinity pool.",
  heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000",
  amenities: [
    { icon: 'Waves', label: 'Heated Infinity Pool' },
    { icon: 'Bed', label: 'Master King Suites' },
    { icon: 'Compass', label: 'Private Estate Treks' },
    { icon: 'Utensils', label: 'Private Chef Service' },
  ],
  roomTypes: [
    { count: '06', name: 'Deluxe Suites' },
    { count: '04', name: 'Garden Rooms' },
    { count: '05', name: 'Cloud View Suites' },
    { count: '02', name: 'The Estate Signature' },
  ],
  roomFeatures: [
    { icon: 'Bed', label: '800-Thread Count Egyptian Linen' },
    { icon: 'Bath', label: 'Monsoon Rain Showers' },
    { icon: 'Armchair', label: 'Bespoke Teak Artistry' },
    { icon: 'Sun', label: 'Panoramic Forest Vistas' },
  ],
  highlights: [
    { title: 'The Secret Garden', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800' },
    { title: 'Rooftop Sanctuary', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800' },
    { title: 'Breakfast in the Mist', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800' },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1200",
  ],
  philosophy: {
    title: "Curated Stillness",
    quote: "Luxury is the absence of noise.",
    description: "In the heart of the coffee estate, we provide the luxury of space, the luxury of time, and the luxury of unhindered nature."
  },
  address: "Ooty Road, Near Sales Tax Check Post, Vaduvanchal, Wayanad, India, 673581",
  mapLink: "https://maps.app.goo.gl/EDE6iTtVeQLoBqm38",
  travelInfo: [
    { icon: 'Plane', text: 'Calicut (CCJ) — A scenic 3-hour highland ascent.' },
    { icon: 'Train', text: 'Kozhikode Hub — Seamless transit from all major metros.' }
  ]
};

export const PROPERTY_VIEW: Property = {
  name: "The View",
  location: "Vattathu Vayal",
  tagline: "The Pulse of the Valley",
  price: "10,500",
  shortDesc: "A minimalist retreat overlooking the sprawling paddy horizons.",
  longDesc: "Perched above the Vattathu Vayal valley, The View captures the essence of Wayanad's agrarian beauty. Architecture here serves as a frame for the ever-changing landscape of mist and sun.",
  heroImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000",
  amenities: [
    { icon: 'Mountain', label: 'Valley View Decks' },
    { icon: 'Flame', label: 'Open Fire Pit' },
    { icon: 'Coffee', label: 'Estate Brewing' },
    { icon: 'Map', label: 'Valley Treks' },
  ],
  roomTypes: [
    { count: '08', name: 'Valley View Dwellings' },
    { count: '04', name: 'Terrace Sanctuary' },
  ],
  roomFeatures: [
    { icon: 'Wifi', label: 'High-speed Fiber Uplink' },
    { icon: 'Tv', label: 'Bespoke Digital Library' },
    { icon: 'Sprout', label: 'Organic Earthly Apothecary' },
    { icon: 'Utensils', label: 'Estate-to-Table Pantry' },
  ],
  highlights: [
    { title: 'The Paddy Deck', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800' },
    { title: 'The Observation Point', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800' },
    { title: 'Valley Side Dining', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800' },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
  ],
  philosophy: {
    title: "The Valley Rhythm",
    quote: "Nature does not hurry, yet everything is accomplished.",
    description: "At The View, our philosophy centers on 'Deep Connection.' We believe in a stay that doesn't just look at nature, but lives within it."
  },
  address: "Near Sreedhar Memorial Hospital, SH 29, Vattathuvayal, Vaduvanchal, Wayanad, India, 673581",
  mapLink: "https://maps.app.goo.gl/Eb5EwnJ4EMmh8smA6",
  travelInfo: [
    { icon: 'Plane', text: 'Private estate transfers from Calicut Airport (CCJ).' },
    { icon: 'Train', text: 'Access from Kozhikode Station (88km).' }
  ]
};

export const CONTACT_INFO = {
  address: "Coffee Bloom Estates, Wayanad Highs, Kerala",
  phone: "+91 89211 42220",
  email: "concierge@coffeebloom.luxury",
  instagram: "@coffeebloom.wayanad",
  youtube: "@WayanadWhispers"
};

export const WAYANAD_EXPERIENCES = [
  {
    title: "The Coffee Trail",
    description: "Walk through our private 100-acre estate. Learn about the bean-to-cup journey of Robusta and Arabica while surrounded by the aroma of blossoms.",
    image: "https://images.unsplash.com/photo-1559056191-4917a1191397?auto=format&fit=crop&q=80&w=800",
    icon: "Coffee"
  },
  {
    title: "Highland Treks",
    description: "Follow ancient trails through the Shola forests. Our naturalists lead you to hidden viewpoints that offer panoramic vistas of the Western Ghats.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    icon: "Compass"
  },
  {
    title: "Waterfall Meditation",
    description: "Experience the calming power of moving water. A private session by the stream-fed falls within the property boundaries.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    icon: "Waves"
  }
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: "Estate Conservation",
    desc: "We protect the native flora of the Wayanad region, ensuring our coffee cultivation works in harmony with the wild jungle.",
    icon: "Leaf"
  },
  {
    title: "Renewable Spirit",
    desc: "Harnessing the abundant Kerala sunshine and wind, our estates aim for energy independence through hybrid solar-wind systems.",
    icon: "Zap"
  },
  {
    title: "Zero Waste Living",
    desc: "From organic composting for our gardens to a strict plastic-free policy, we ensure that luxury leaves no footprint.",
    icon: "ShieldCheck"
  }
];

export const getIcon = (iconName: string, color: string, size: number = 20) => {
  const props = { size, strokeWidth: 1.0, color }; // Ultra-thin stroke for luxury
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
    case 'History': return <History {...props} />;
    case 'Wind': return <WindIcon {...props} />;
    case 'Leaf': return <Leaf {...props} />;
    case 'Globe': return <Globe {...props} />;
    case 'Sprout': return <Sprout {...props} />;
    case 'Plane': return <Plane {...props} />;
    case 'Train': return <TrainFront {...props} />;
    case 'Tv': return <Tv {...props} />;
    case 'Palmtree': return <Palmtree {...props} />;
    case 'Armchair': return <Armchair {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Sun': return <Sun {...props} />;
    case 'Heart': return <Heart {...props} />;
    case 'Maximize': return <Maximize {...props} />;
    default: return <CheckCircle {...props} />;
  }
};
