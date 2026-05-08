export const colors = {
  duoGreen: '#0920ad',
  duoGreenLight: '#e8ecf8',
  skyBlue: '#0784ff',
  sunshineYellow: '#ffdc83',
  grapeSoda: '#34feff',
  bubblegumPink: '#ffbda1',
  snowWhite: '#ffffff',
  fog: '#f4f6fa',
  cloudGray: '#e0e4ee',
  silver: '#9ca3b8',
  graphite: '#6b728c',
  charcoal: '#4a5068',
  almostBlack: '#1a1f36',
} as const;

export const darkColors = {
  duoGreen: '#4a66f0',
  duoGreenLight: '#1e2448',
  skyBlue: '#4a9eff',
  sunshineYellow: '#f0cc6a',
  grapeSoda: '#5efefe',
  bubblegumPink: '#f0b08a',
  snowWhite: '#151a28',
  fog: '#0b0e17',
  cloudGray: '#262c40',
  silver: '#4a5068',
  graphite: '#6b728c',
  charcoal: '#9ca3b8',
  almostBlack: '#edf0f7',
} as const;

export type ThemeMode = 'light' | 'dark' | 'system';

const spacing = {
  px: '1px',
  0: '0',
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  64: '64px',
  80: '80px',
  96: '96px',
};

const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '35px',
  full: '9999px',
};

const typography = {
  fontFamily: {
    headline: "'Fredoka One', cursive",
    body: "'Nunito', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  fontSize: {
    caption: '13px',
    body: '15px',
    headingSm: '19px',
    heading: '32px',
    headingLg: '48px',
    display: '64px',
  },
  fontWeight: {
    medium: 500,
    bold: 700,
  },
  lineHeight: {
    caption: 1.4,
    body: 1.4,
    headingSm: 1.2,
    heading: 1.2,
    headingLg: 1.2,
    display: 1.2,
  },
  letterSpacing: {
    caption: '0.69px',
    body: '0.8px',
    headingSm: '1.01px',
    heading: '1.7px',
    headingLg: '-0.96px',
    display: '-1.28px',
  },
};

type ColorPalette = Record<string, string>;

const createTokens = (modePalette: ColorPalette) => ({
  colors: {
    background: modePalette.fog || modePalette.snowWhite,
    surface: modePalette.snowWhite,
    text: modePalette.almostBlack,
    textSecondary: modePalette.charcoal,
    textBody: modePalette.graphite,
    textDisabled: modePalette.silver,
    primary: modePalette.duoGreen,
    primaryLight: modePalette.duoGreenLight,
    secondary: modePalette.skyBlue,
    border: modePalette.cloudGray,
    error: modePalette.snowWhite === '#ffffff' ? '#e74c3c' : '#f87171',
    success: modePalette.snowWhite === '#ffffff' ? '#10b981' : '#34d399',
    accentYellow: modePalette.sunshineYellow,
    accentPurple: modePalette.grapeSoda,
    accentPink: modePalette.bubblegumPink,
  },
  spacing,
  radius,
  typography,
  button: {
    primaryShadow: modePalette.snowWhite === '#ffffff' ? '0 4px 0 #071583' : '0 4px 0 #3748c0',
    primaryActiveShadow: modePalette.snowWhite === '#ffffff' ? '0 2px 0 #071583' : '0 2px 0 #3748c0',
    primaryBg: modePalette.duoGreen,
    primaryText: '#ffffff',
    outlineBorder: modePalette.cloudGray,
    outlineText: modePalette.skyBlue,
    outlineHoverBg: modePalette.duoGreenLight,
  },
});

export const lightTheme = {
  mode: 'light' as const,
  ...createTokens(colors),
};

export const darkTheme = {
  mode: 'dark' as const,
  ...createTokens(darkColors),
};

export type Theme = typeof lightTheme | typeof darkTheme;

export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const getTheme = (mode: ThemeMode): Theme => {
  if (mode === 'system') {
    return getSystemTheme() === 'dark' ? darkTheme : lightTheme;
  }
  return mode === 'dark' ? darkTheme : lightTheme;
};
