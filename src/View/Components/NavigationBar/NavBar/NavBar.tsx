import { NavLink } from "react-router-dom";

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
    return (
        <div>
            <NavLink to="/auth">Sign In</NavLink>
            {/* {linksForUser.map(link => (
                <NavLink to={link.url}>{link.title}</NavLink>
            ))} */}
        </div>
    )
}

export default NavBar
