import { NavLink } from 'react-router-dom';

import { ROUTES } from 'config/routes';
import useMatchMedia from 'hooks/useMatchMedia';

import { thunk } from 'store/auth/authReducer';
import { authUser } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import css from './Navigation.module.scss';

type Links = {
  url: string;
  label: string;
};

type addActiveLinkClass = {
  isActive: boolean;
  isPending: boolean;
};

const linksForUser: Links[] = [
  { url: ROUTES.favoriteQuizes.mask, label: 'Fav Quizes' },
  { url: ROUTES.userStatistic.mask, label: 'Statistic' },
  { url: ROUTES.profile.mask, label: 'Profile' },
];

const NavBar = () => {
  const dispatch = useAppDispatch();
  const { isLogin, userName, userRole } = useAppSelector(authUser);
  const { isMobile } = useMatchMedia();

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

  return (
    <nav className={css.navigation}>
      <NavLink className={addActiveLinkClass} to="/">
        Home
      </NavLink>

      <ul className={css.navigation__list}>
        {!isMobile && isLogin && <>{userLinks}</>}

        <li className={css.navigation__item}>
          <NavLink className={addActiveLinkClass} onClick={isLogin ? handleLogout : undefined} to="/auth">
            {isLogin ? `${userName} Log Out` : 'Sign In'}
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
    </nav>
  );
};

export default NavBar;
