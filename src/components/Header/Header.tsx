import { useState, useCallback } from 'react';

import ToggleBtn from 'components/ToggleBtn';

import useMatchMedia from 'hooks/useMatchMedia';

import Burger from './components/Burger';
import NavigationList from './components/NavigationList';

import css from './Header.module.scss';

const Header = () => {
  const { isMobile } = useMatchMedia();
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <header className={css.header}>
      <ToggleBtn />
      {isMobile && <Burger isOpen={isOpen} toggleIsOpen={toggleIsOpen} />}
      <NavigationList isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
    </header>
  );
};

export default Header;
