import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as presets } from '../providers/theme';

interface CustomThemeProviderProps {
  children: ReactNode;
}

interface CustomThemeContextData {
  theme: string;
  createTheme: (theme: 'light' | 'dark') => Promise<void>;
}

export const CustomThemeContext = createContext<CustomThemeContextData>({} as CustomThemeContextData);

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let newTheme = localStorage.getItem('theme');

    if (!['light', 'dark'].includes(newTheme)) {
      newTheme = 'light';
    }

    setTheme(newTheme);
  }, []);

  async function createTheme(theme: string) {
    setTheme(theme);

    localStorage.setItem('theme', theme);
  }

  return (
    <CustomThemeContext.Provider value={{ theme, createTheme }}>
      <ThemeProvider theme={presets[theme]}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export function useCustomTheme() {
  const context = useContext(CustomThemeContext);

  return context;
}
