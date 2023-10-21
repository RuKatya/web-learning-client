import { createContext } from 'react';
import { ThemeContextTypes, ThemeObj } from './types';

export const themes: ThemeObj = {
  dark: 'dark',
  light: 'light',
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ThemeContext = createContext<ThemeContextTypes>({ theme: 'light', handleTheme: () => {} });
