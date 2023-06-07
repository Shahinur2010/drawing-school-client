


import { NavLink } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import uesCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // const [isAdmin] = useAdmin();
    // const [cart] = uesCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        {/* <li><NavLink to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</NavLink></li>
        <li><NavLink to='/dashboard/mycart'><button className="btn gap-2">
            <div className="badge badge-secondary">+{cart?. length || 0}</div>
        </button></NavLink></li> */}

        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></> : <><li><NavLink to='/login'>Login</NavLink></li></>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;