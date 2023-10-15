export type Themes = 'dark' | 'light';
export type ThemeObj = { dark: 'dark'; light: 'light' };

export type ThemeContextTypes = { theme: 'dark' | 'light'; handleTheme: () => void };
