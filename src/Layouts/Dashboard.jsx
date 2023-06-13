// import { FaBook, FaCalendarAlt, FaHamburger, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import uesCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";
import { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'


import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    //     const [cart] = uesCart();
    //  const [isAdmin] = useAdmin();
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-[88%] ms-40 me-4">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button"> <DayNightToggle className='my-4 mx-4'
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode}
    /></label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu w-[12%] h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard/manageclass">Manage Classes</Link></li>
                    <li><Link to="/dashboard/manageuser">Manage Users</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;