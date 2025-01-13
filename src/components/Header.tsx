import { Link, NavLink } from "react-router-dom";
import user from "../assets/user.png"

export default function Header() {
    return <header className="header">
        <Link className="logo" to="/">#VANLIFE</Link>
        <nav className="navbar">
            <NavLink
                to="/host"
                className={({isActive}) => isActive ? "active-link": ""}
            >
                Host
            </NavLink>
            <NavLink
                to="/about"
                className={({isActive}) => isActive ? "active-link": ""}
            >
                About
            </NavLink>
            <NavLink
                to="/vans"
                className={({isActive}) => isActive ? "active-link": ""}
            >
                Vans
            </NavLink>
            <NavLink
                to="/profile"
                className={({isActive}) => isActive ? "active-link": ""}
            >
                <img src={user} alt="profile"></img>
            </NavLink>
        </nav>
    </header>
}