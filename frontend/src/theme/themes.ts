export type ThemeName =
  | 'blush'
  | 'lavender'
  | 'sage'
  | 'ocean'
  | 'peach'
  | 'midnight';

export interface Theme {
  name: string;
  emoji: string;

  background: string;
  card: string;
  primary: string;
  primaryLight: string;

  heading: string;
  text: string;
  border: string;

  selectedBackground: string;
}

export const themes: Record<ThemeName, Theme> = {
  blush: {
    name: 'Blush Bloom',
    emoji: '🌸',

    background: '#FFF7F8',
    card: '#FFFFFF',
    primary: '#C96F89',
    primaryLight: '#F8DDE5',

    heading: '#7A4055',
    text: '#8A747B',
    border: '#E8C5CF',

    selectedBackground: '#F8DDE5',
  },

  lavender: {
    name: 'Lavender Calm',
    emoji: '💜',

    background: '#FAF7FF',
    card: '#FFFFFF',
    primary: '#8B72B9',
    primaryLight: '#E9E0F8',

    heading: '#594675',
    text: '#776A86',
    border: '#D9CCEB',

    selectedBackground: '#E9E0F8',
  },

  sage: {
    name: 'Sage Garden',
    emoji: '🌿',

    background: '#F6FAF7',
    card: '#FFFFFF',
    primary: '#6E9B7B',
    primaryLight: '#DDEDE2',

    heading: '#405C48',
    text: '#687A6E',
    border: '#C9DDCE',

    selectedBackground: '#DDEDE2',
  },

  ocean: {
    name: 'Ocean Breeze',
    emoji: '🌊',

    background: '#F5FAFC',
    card: '#FFFFFF',
    primary: '#5795A8',
    primaryLight: '#DCEEF3',

    heading: '#3D6672',
    text: '#687E84',
    border: '#C7E0E7',

    selectedBackground: '#DCEEF3',
  },

  peach: {
    name: 'Peach Glow',
    emoji: '🍑',

    background: '#FFF8F4',
    card: '#FFFFFF',
    primary: '#D88968',
    primaryLight: '#F9E0D5',

    heading: '#784D3E',
    text: '#8A7067',
    border: '#EBCFC2',

    selectedBackground: '#F9E0D5',
  },

  midnight: {
    name: 'Midnight',
    emoji: '🌙',

    background: '#17151C',
    card: '#24212B',
    primary: '#C28DB8',
    primaryLight: '#463746',

    heading: '#F5EAF3',
    text: '#C8BBC7',
    border: '#4A414D',

    selectedBackground: '#463746',
  },
};
