import { PropsWithChildren, useState, useEffect, useCallback } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import { Themes } from './types';

const getTheme = () => {
  const theme = window.localStorage.getItem('theme') as Themes | null;

  if (theme && Object.values(themes).includes(theme)) return theme;

  return window.matchMedia('(prefers-color-scheme: light)').matches ? themes.light : themes.dark;
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState(getTheme);

  const handleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
