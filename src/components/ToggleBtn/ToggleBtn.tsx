import { useContext } from 'react';

import dark from 'assets/dark-theme.svg';
import light from 'assets/light-theme.svg';

import Button from 'components/Button';

import { ThemeContext } from 'providers/theme/ThemeContext';
import { ThemeContextTypes } from 'providers/theme/types';

// import css from './ThemeSwitcher.module.scss';

const ToggleBtn = () => {
  const { theme, handleTheme } = useContext<ThemeContextTypes>(ThemeContext);

  return (
    <Button onClick={handleTheme} size="m" position="center">
      <img width={30} height={30} src={theme === 'light' ? light : dark} alt={`${theme}-theme`} />
    </Button>
  );
};
export default ToggleBtn;
