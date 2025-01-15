import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return <div className="host-page">
        <div className="host-nav-bar">
            <NavLink 
                to='.'
                end
                className={({isActive}) => isActive ? 'active-host-nav-link': ''}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='income'
                className={({isActive}) => isActive ? 'active-host-nav-link': ''}
            >
                Income       
            </NavLink>
            <NavLink
                to='vans'
                className={({isActive}) => isActive ? 'active-host-nav-link': ''}
            >
                Vans
            </NavLink>
            <NavLink
                to='reviews'
                className={({isActive}) => isActive ? 'active-host-nav-link': ''}
            >
                Reviews
            </NavLink>
        </div>
        <Outlet />
    </div>
}