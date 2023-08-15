import css from './Navigation.module.scss';

import { NavLink } from 'react-router-dom';

import { thunk } from '../../../../app/auth/authReducer';
import { authUser } from '../../../../app/auth/selectors';
import { useAppDispatch } from '../../../../app/hooks';
import { useAppSelector } from '../../../../app/hooks';
import useMatchMedia from '../../../../hooks/useMatchMedia';

export interface Links {
    url: string;
    title: string;
}

const linksForUser: Links[] = [
    { url: '/user-save-quizes', title: 'Fav Quizes' },
    { url: '/user-statistic', title: 'Statistic' },
    { url: '/user-profile', title: 'Profile' },
];

const NavBar = () => {
    const dispatch = useAppDispatch();
    const { isLogin, userName, userRole } = useAppSelector(authUser);
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    const handleLogout = () => {
        dispatch(thunk.loginOutThunk());
    };

    const addActiveLinkClass = ({
        isActive,
        isPending,
    }: {
        isActive: boolean;
        isPending: boolean;
    }) =>
        isPending
            ? 'pending'
            : isActive
            ? `${css.navigationLink} ${css.active}`
            : css.navigationLink;

    const loginConditionItem = isLogin ? (
        <li className={css.navigationItem}>
            <NavLink
                className={addActiveLinkClass}
                onClick={handleLogout}
                to="/auth"
            >
                {userName} Log Out
            </NavLink>
        </li>
    ) : (
        <li className={css.navigationItem}>
            <NavLink className={addActiveLinkClass} to="/auth">
                Sign In
            </NavLink>
        </li>
    );

    const dashboard = userRole === 'admin' && (
        <li className={css.navigationItem}>
            <NavLink className={addActiveLinkClass} to="/admin-dashboard">
                Dashboard
            </NavLink>
        </li>
    );

    const userLinks = linksForUser.map(({ title, url }) => (
        <li key={title} className={css.navigationItem}>
            <NavLink className={addActiveLinkClass} to={url}>
                {title}{' '}
                {title === 'Fav Quizes' && (
                    <span className={css.favAmount}>0</span>
                )}
            </NavLink>
        </li>
    ));

    console.log(isLogin, userRole, userName);

    return (
        <nav className={css.navigation}>
            <ul className={css.navigationList}>
                {!isMobile && isLogin && (
                    <>
                        <NavLink className={addActiveLinkClass} to="/">
                            Home
                        </NavLink>
                        {userLinks}
                    </>
                )}
                {dashboard}
                {loginConditionItem}
            </ul>
        </nav>
    );
};

export default NavBar;
