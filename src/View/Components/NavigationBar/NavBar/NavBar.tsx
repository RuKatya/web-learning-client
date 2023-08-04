import { NavLink } from 'react-router-dom';
import { logout } from '../../../../app/auth/authReducer';
import { useAppDispatch } from '../../../../app/hooks';
import { authUser } from '../../../../app/auth/selectors';
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
        <div>
            {!isLogin ? (
                <NavLink to="/auth">Sign In</NavLink>
            ) : (
                <NavLink onClick={handleLogout} to="/auth">
                    Log Out
                </NavLink>
            )}
            {/* {linksForUser.map(link => (
                <NavLink to={link.url}>{link.title}</NavLink>
            ))} */}
        </div>
    );
};

export default NavBar;
