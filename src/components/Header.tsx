import { Link, NavLink } from "react-router-dom";
import user from "../assets/user.png"

export default function Header() {
    return <header className="flex justify-between py-9 px-10">
        <Link className="font-bold text-2xl" to="/">#VANLIFE</Link>
        <nav className="flex gap-4 items-center">
            <NavLink
                to="/host"
                className={({isActive}) => 
                    `font-bold text-[#4D4D4D] flex justify-center items-center ${
                        isActive ? "underline decoration-2 underline-offset-4 text-red-600 text-lg" 
                        : "no-underline"
                    }`
                }
            >
                Host
            </NavLink>
            <NavLink
                to="/about"
                className={({isActive}) => 
                    `font-bold text-[#4D4D4D] flex justify-center items-center ${
                        isActive ? "underline decoration-2 underline-offset-4 text-red-600 text-lg" 
                        : "no-underline"
                    }`
                }
            >
                About
            </NavLink>
            <NavLink
                to="/vans"
                className={({isActive}) => 
                    `font-bold text-[#4D4D4D] flex justify-center items-center ${
                        isActive ? "underline decoration-2 underline-offset-4 text-red-600 text-lg" 
                        : "no-underline"
                    }`
                }
            >
                Vans
            </NavLink>
            <NavLink
                to="/profile"
                className={({isActive}) => 
                    `${isActive ? "scale-110" : ""}`
                }
            >
                <img className="w-6" src={user} alt="profile"></img>
            </NavLink>
        </nav>
    </header>
}