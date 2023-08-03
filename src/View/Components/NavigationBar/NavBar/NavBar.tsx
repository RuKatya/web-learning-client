import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { authUser } from '../../../../app/auth/selectors';
// import { useAppSelector } from '../../../../app/hooks';

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
    // const { isLogin } = useAppSelector(authUser);
    // const navigate = useNavigate();

    return (
        <div>
            {/* {!isLogin ? <NavLink to="/auth">Sign In</NavLink> : null} */}
            <NavLink to="/auth">Sign In</NavLink>
            {/* {linksForUser.map(link => (
                <NavLink to={link.url}>{link.title}</NavLink>
            ))} */}
        </div>
    );
};

export default NavBar;
