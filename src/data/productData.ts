export interface Finish {
  id: string;
  name: string;
  hex: string;
  borderHex: string;
  description: string;
}

export const FINISHES: Finish[] = [
  {
    id: 'cosmic-burgundy',
    name: 'Cosmic Burgundy',
    hex: '#4A2328',
    borderHex: '#7A3C45',
    description: 'Deep micro-etched titanium with rich burgundy luster',
  },
  {
    id: 'natural-titanium',
    name: 'Natural Titanium',
    hex: '#98938A',
    borderHex: '#B7B1A7',
    description: 'Raw brushed aerospace-grade Grade 5 titanium',
  },
  {
    id: 'desert-titanium',
    name: 'Desert Titanium',
    hex: '#BFA894',
    borderHex: '#DBC5B0',
    description: 'Warm champagne-gold crystalline titanium grain',
  },
  {
    id: 'black-titanium',
    name: 'Black Titanium',
    hex: '#2B2B2C',
    borderHex: '#48484A',
    description: 'Deep diamond-like carbon PVD coated titanium',
  },
  {
    id: 'white-titanium',
    name: 'White Titanium',
    hex: '#E3E4E5',
    borderHex: '#F0F1F2',
    description: 'Pristine pearlescent matte back glass with silver bezel',
  },
];

export interface ModelOption {
  id: 'pro' | 'pro-max';
  name: string;
  screenSize: string;
  displaySpecs: string;
  startingPrice: number;
  monthlyPrice: number;
}

export const MODELS: ModelOption[] = [
  {
    id: 'pro',
    name: 'iPhone 18 Pro',
    screenSize: '6.3″',
    displaySpecs: 'Super Retina XDR display with ProMotion up to 120Hz',
    startingPrice: 999,
    monthlyPrice: 41.62,
  },
  {
    id: 'pro-max',
    name: 'iPhone 18 Pro Max',
    screenSize: '6.9″',
    displaySpecs: 'Super Retina XDR display with ProMotion up to 120Hz',
    startingPrice: 1199,
    monthlyPrice: 49.95,
  },
];

export interface StorageOption {
  size: string;
  priceDelta: number;
}

export const STORAGE_OPTIONS: StorageOption[] = [
  { size: '256GB', priceDelta: 0 },
  { size: '512GB', priceDelta: 200 },
  { size: '1TB', priceDelta: 400 },
  { size: '2TB', priceDelta: 600 },
];

export interface TradeInOption {
  model: string;
  credit: number;
}

export const TRADE_IN_DEVICES: TradeInOption[] = [
  { model: 'iPhone 17 Pro Max', credit: 650 },
  { model: 'iPhone 17 Pro', credit: 550 },
  { model: 'iPhone 16 Pro Max', credit: 480 },
  { model: 'iPhone 16 Pro', credit: 400 },
  { model: 'iPhone 15 Pro', credit: 320 },
  { model: 'iPhone 14 Pro', credit: 240 },
  { model: 'No trade-in', credit: 0 },
];

export interface ComparisonDevice {
  id: string;
  name: string;
  screen: string;
  chip: string;
  camera: string;
  zoom: string;
  cameraControl: boolean;
  appleIntelligence: string;
  battery: string;
  chassis: string;
}

export const COMPARISON_DEVICES: Record<string, ComparisonDevice> = {
  'iphone-18-pro': {
    id: 'iphone-18-pro',
    name: 'iPhone 18 Pro',
    screen: '6.3″ or 6.9″ Super Retina XDR (1–120Hz ProMotion, 2000 nits)',
    chip: 'A19 Pro chip (6-core CPU, 6-core GPU with 2x Ray Tracing, 16-core NPU)',
    camera: 'Pro Fusion 48MP + 48MP Ultra Wide + 48MP 5x Telephoto',
    zoom: '5x optical zoom in, 25x digital zoom, zero-lag shutter',
    cameraControl: true,
    appleIntelligence: 'Next-Gen Apple Intelligence with on-device generative reasoning',
    battery: 'Up to 33 hours video playback (Fast charge 50% in 30 min)',
    chassis: 'Grade 5 Titanium with textured matte glass & Ceramic Shield Gen 3',
  },
  'iphone-16-pro': {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    screen: '6.3″ or 6.9″ Super Retina XDR (ProMotion)',
    chip: 'A18 Pro chip',
    camera: '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto',
    zoom: '5x optical zoom in',
    cameraControl: true,
    appleIntelligence: 'Apple Intelligence (First Gen)',
    battery: 'Up to 27 hours video playback',
    chassis: 'Titanium with Ceramic Shield',
  },
  'iphone-15-pro': {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    screen: '6.1″ or 6.7″ Super Retina XDR (ProMotion)',
    chip: 'A17 Pro chip',
    camera: '48MP Main + 12MP Ultra Wide + 12MP 3x/5x Telephoto',
    zoom: '3x or 5x optical zoom',
    cameraControl: false,
    appleIntelligence: 'Apple Intelligence (Beta)',
    battery: 'Up to 23 hours video playback',
    chassis: 'Titanium design',
  },
  'iphone-13-pro': {
    id: 'iphone-13-pro',
    name: 'iPhone 13 Pro',
    screen: '6.1″ or 6.7″ Super Retina XDR',
    chip: 'A15 Bionic chip',
    camera: '12MP Main + 12MP Ultra Wide + 12MP 3x Telephoto',
    zoom: '3x optical zoom',
    cameraControl: false,
    appleIntelligence: 'Not supported',
    battery: 'Up to 22 hours video playback',
    chassis: 'Stainless steel design',
  },
};
