import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ROUTES } from 'config/routes';

import { thunk } from 'store/auth/authReducer';
import { authUser } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addActiveLinkClass } from '../../config';

import css from './NavigationList.module.scss';

interface NavigationListProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const NavigationList = ({ isOpen, toggleIsOpen }: NavigationListProps) => {
  const { isLogin, userRole } = useAppSelector(authUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(thunk.loginOutThunk());

  const cnNavList = classNames(css.navigation__list, isOpen && css.active);
  const handleActiveLinkClass = ({ isActive, isPending }: addActiveLinkClass) =>
    isPending ? 'pending' : isActive ? `${css.navigation__link} ${css.active}` : css.navigation__link;

  return (
    <ul className={cnNavList} onClick={toggleIsOpen}>
      <li className={css.navigation__item_home}>
        <NavLink className={handleActiveLinkClass} to={ROUTES.home.mask}>
          <span className={css.navigation__label}>Home</span>
        </NavLink>
      </li>
      {isLogin && (
        <>
          <li className={css.navigation__item}>
            <NavLink className={handleActiveLinkClass} to={ROUTES.favQuizes.mask}>
              <span className={css.navigation__label}>Fav Quizes</span>
              <span className={css.navigation__favorite}>0</span>
            </NavLink>
          </li>
          <li className={css.navigation__item}>
            <NavLink className={handleActiveLinkClass} to={ROUTES.statistic.mask}>
              <span className={css.navigation__label}>Statistics</span>
            </NavLink>
          </li>
          <li className={css.navigation__item}>
            <NavLink className={handleActiveLinkClass} to={ROUTES.profile.mask}>
              <span className={css.navigation__label}>Profile</span>
            </NavLink>
          </li>

          {userRole === 'admin' && (
            <li className={css.navigation__item}>
              <NavLink className={handleActiveLinkClass} to={ROUTES.dashboard.mask}>
                Dashboard
              </NavLink>
            </li>
          )}
        </>
      )}

      <li onClick={isLogin ? handleLogout : undefined} className={css.navigation__item_login}>
        <NavLink className={handleActiveLinkClass} to={ROUTES.auth.mask}>
          <span className={css.navigation__label}>{isLogin ? 'Sign Out' : 'Sign In'}</span>
        </NavLink>
      </li>
    </ul>
  );
};
export default NavigationList;
