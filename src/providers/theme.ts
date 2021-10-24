import { Theme } from '../types/theme';

type ThemeProps = {
  light: Theme;
  dark: Theme;
};

const colorVariants = {
  primary: {
    background: '#1565d6',
    text: '#ffffff',
  },
  secondary: {
    background: '#f0f2f5',
    text: '#000000',
  },
  success: {
    background: '#28a745',
    text: '#ffffff',
  },
  warning: {
    background: '#eba417',
    text: '#000000',
  },
  danger: {
    background: '#dc3545',
    text: '#ffffff',
  },
  info: {
    background: '#04a9f5',
    text: '#ffffff',
  },
};

export const theme: ThemeProps = {
  light: {
    mainBackground: '#ffffff',
    complementaryBackground: '#f0f2f5',
    text: '#000000',
    ...colorVariants,
  },
  dark: {
    mainBackground: '#18191a',
    complementaryBackground: '#242526',
    text: '#ffffff',
    ...colorVariants,
  },
};
