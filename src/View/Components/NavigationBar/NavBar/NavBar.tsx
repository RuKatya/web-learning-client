import css from 'Navigation.module.scss';

import { NavLink } from 'react-router-dom';

import { logout } from '../../../../app/auth/authReducer';
import { authUser } from '../../../../app/auth/selectors';
import { useAppDispatch } from '../../../../app/hooks';
import { useAppSelector } from '../../../../app/hooks';

// interface Links {
//     url: string
//     title: string
// }

// const linksForUser: Links[] = [
//     { url: "/user-save-quizes", title: "Fav Quizes" },
//     { url: "/user-statistic", title: "Statistic" },
//     { url: "/user-profile", title: "Profile" },
// ]

const NavBar = () => {
    const dispatch = useAppDispatch();
    const { isLogin } = useAppSelector(authUser);
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className={css.navigation}>
            {/* <ul> */}

            {!isLogin ? (
                <NavLink to="/auth">Sign In</NavLink>
            ) : (
                <NavLink onClick={handleLogout} to="/auth">
                    Log Out
                </NavLink>
            )}

            {/*
            {linksForUser.map(link => (
                <li key={el.title}>
                    <NavLink to={link.url}>{link.title}</NavLink>
                </li>
            ))}
             </ul> */}
        </nav>
    );
};

export default NavBar;
