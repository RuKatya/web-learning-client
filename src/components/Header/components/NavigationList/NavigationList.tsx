import { NavLink } from 'react-router-dom';

import { ROUTES } from 'config/routes';

import { thunk } from 'store/auth/authReducer';
import { authUser } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addActiveLinkClass } from '../../config';

import css from './NavigationList.module.scss';
interface NavigationListProps {
  toggleIsOpen?: () => void;
}

const NavigationList = ({ toggleIsOpen }: NavigationListProps) => {
  const { isLogin, userName, userRole } = useAppSelector(authUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(thunk.loginOutThunk());
    toggleIsOpen && toggleIsOpen();
  };

  const addActiveLinkClass = ({ isActive, isPending }: addActiveLinkClass) =>
    isPending ? 'pending' : isActive ? `${css.navigation__link} ${css.active}` : css.navigation__link;

  return (
    <ul className={css.navigation__list}>
      <li onClick={toggleIsOpen} className={css.navigation__item_home}>
        <NavLink className={addActiveLinkClass} to={ROUTES.home.mask}>
          <span className={css.navigation__label}>Home</span>
        </NavLink>
      </li>
      {isLogin && (
        <>
          <li onClick={toggleIsOpen} className={css.navigation__item}>
            <NavLink className={addActiveLinkClass} to={ROUTES.favQuizes.mask}>
              <span className={css.navigation__label}>Fav Quizes</span>
              <span className={css.navigation__favorite}>0</span>
            </NavLink>
          </li>
          <li onClick={toggleIsOpen} className={css.navigation__item}>
            <NavLink className={addActiveLinkClass} to={ROUTES.statistic.mask}>
              <span className={css.navigation__label}>Statistics</span>
            </NavLink>
          </li>

          {userRole === 'user' && (
            <li onClick={toggleIsOpen} className={css.navigation__item}>
              <NavLink className={addActiveLinkClass} to={ROUTES.profile.mask}>
                <span className={css.navigation__label}>Profile</span>
              </NavLink>
            </li>
          )}

          {userRole === 'admin' && (
            <li onClick={toggleIsOpen} className={css.navigation__item}>
              <NavLink className={addActiveLinkClass} to={ROUTES.dashboard.mask}>
                Dashboard
              </NavLink>
            </li>
          )}
        </>
      )}

      <li onClick={isLogin ? handleLogout : toggleIsOpen} className={css.navigation__item_login}>
        <NavLink className={addActiveLinkClass} to={ROUTES.auth.mask}>
          <span className={css.navigation__label}>{isLogin ? 'Sign Out' : 'Sign In'}</span>
        </NavLink>
      </li>
    </ul>
  );
};
export default NavigationList;
