// import classnames from 'classnames';
import { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'config/routes';
import useMatchMedia from 'hooks/useMatchMedia';

import { thunk } from 'store/auth/authReducer';
import { authUser } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { addActiveLinkClass, linksForUser } from './config';

import css from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isLogin, userName, userRole } = useAppSelector(authUser);
  const { isMobile } = useMatchMedia();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerIsOpen = useCallback(() => {
    setIsBurgerOpen((isOpen) => !isOpen);
  }, []);

  const handleLogout = () => {
    dispatch(thunk.loginOutThunk());
  };

  const addActiveLinkClass = ({ isActive, isPending }: addActiveLinkClass) =>
    isPending ? 'pending' : isActive ? `${css.navigation__link} ${css.active}` : css.navigation__link;

  const userLinks = linksForUser.map(({ label, url }) => (
    <li key={label} className={css.navigation__item}>
      <NavLink className={addActiveLinkClass} to={url}>
        <span className={css.navigation__label}>{label}</span>
        {label === 'Fav Quizes' && <span className={css.navigation__favorite}>0</span>}
      </NavLink>
    </li>
  ));

  // const cnBurger = classnames(css.burger);

  return (
    <header className={css.header}>
      <div className={css.burger__wrapper}>
        <div className={css.burger} onClick={toggleBurgerIsOpen}>
          <div className={css.burger__decor} />
        </div>

        {isBurgerOpen && (
          <div className={css.layout}>
            <ul className={css.navigation__list}>
              <li className={css.navigation__item}>
                <NavLink className={addActiveLinkClass} to={ROUTES.favoriteQuizes.mask}>
                  <span className={css.navigation__label}>Fav Quizes</span>
                  <span className={css.navigation__favorite}>0</span>
                </NavLink>
              </li>
              <li className={css.navigation__item}>
                <NavLink className={addActiveLinkClass} to={ROUTES.userStatistic.mask}>
                  <span className={css.navigation__label}>Statistic</span>
                </NavLink>
              </li>
              <li className={css.navigation__item}>
                <NavLink className={addActiveLinkClass} to={ROUTES.profile.mask}>
                  <span className={css.navigation__label}>Profile</span>
                </NavLink>
              </li>

              {userRole === 'admin' && (
                <li className={css.navigation__item}>
                  <NavLink className={addActiveLinkClass} to="/admin-dashboard">
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      <nav className={css.navigation}>
        <NavLink className={addActiveLinkClass} to="/">
          Home
        </NavLink>

        <ul className={css.navigation__list}>
          {!isMobile && isLogin && (
            <>
              <li className={css.navigation__item}>
                <NavLink className={addActiveLinkClass} to={ROUTES.favoriteQuizes.mask}>
                  <span className={css.navigation__label}>Fav Quizes</span>
                  <span className={css.navigation__favorite}>0</span>
                </NavLink>
              </li>
              <li className={css.navigation__item}>
                <NavLink className={addActiveLinkClass} to={ROUTES.userStatistic.mask}>
                  <span className={css.navigation__label}>Statistic</span>
                </NavLink>
              </li>
              <li className={css.navigation__item}>
                <NavLink className={addActiveLinkClass} to={ROUTES.profile.mask}>
                  <span className={css.navigation__label}>Profile</span>
                </NavLink>
              </li>
            </>
          )}
          {userRole === 'admin' && (
            <li className={css.navigation__item}>
              <NavLink className={addActiveLinkClass} to="/admin-dashboard">
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
        <NavLink className={addActiveLinkClass} onClick={isLogin ? handleLogout : undefined} to="/auth">
          {isLogin ? `${userName} Log Out` : 'Sign In'}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
