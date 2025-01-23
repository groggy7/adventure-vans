import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return <div>
        <div className="flex gap-4 py-4 px-10">
            <NavLink 
                to='.'
                end
                className={({isActive}) => `
                    text-md ${isActive ? "text-active_host_nav_link font-bold" : "text-host_nav_link"}
                `}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='income'
                className={({isActive}) => `
                    text-md ${isActive ? "text-active_host_nav_link font-bold" : "text-host_nav_link"}
                `}
            >
                Income       
            </NavLink>
            <NavLink
                to='vans'
                className={({isActive}) => `
                    text-md ${isActive ? "text-active_host_nav_link font-bold" : "text-host_nav_link"}
                `}
            >
                Vans
            </NavLink>
            <NavLink
                to='reviews'
                className={({isActive}) => `
                    text-md ${isActive ? "text-active_host_nav_link font-bold" : "text-host_nav_link"}
                `}
            >
                Reviews
            </NavLink>
        </div>
        <Outlet />
    </div>
}