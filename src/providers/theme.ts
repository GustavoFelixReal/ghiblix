export interface ThemeProps {
  mainBackground: string,
  complementaryBackground: string,
  text: string,
  primary: string,
  secondary: string,
  success: string,
  warning: string,
  danger: string,
  info: string,
};

export const theme = {
  light: {
    mainBackground: '#ffffff',
    complementaryBackground: '#f0f2f5',
    text: '#000000',
    primary: '#1565d6',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    info: 'info',
  },
  dark: {
    mainBackground: '#18191a',
    complementaryBackground: '#242526',
    text: '#ffffff',
    primary: '#1565d6',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    info: 'info',
  }
};

