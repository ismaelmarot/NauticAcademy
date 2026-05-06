export const colors = {
  inkBlack: '#071013',
  turquoiseSurf: '#23B5D3',
  pacificBlue: '#75ABBC',
  coolSteel: '#A2AEBB',
  alabasterGrey: '#DFE0E2'
} as const;

export type ThemeMode = 'light' | 'dark' | 'system';

export const lightTheme = {
  mode: 'light' as const,
  colors: {
    background: colors.alabasterGrey,
    surface: '#FFFFFF',
    text: colors.inkBlack,
    textSecondary: colors.coolSteel,
    primary: colors.turquoiseSurf,
    secondary: colors.pacificBlue,
    accent: colors.coolSteel,
    border: colors.alabasterGrey,
    error: '#FF5252',
    success: '#4CAF50'
  }
};

export const darkTheme = {
  mode: 'dark' as const,
  colors: {
    background: colors.inkBlack,
    surface: '#0D1B2A',
    text: colors.alabasterGrey,
    textSecondary: colors.coolSteel,
    primary: colors.turquoiseSurf,
    secondary: colors.pacificBlue,
    accent: colors.coolSteel,
    border: '#1B263B',
    error: '#FF5252',
    success: '#4CAF50'
  }
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
