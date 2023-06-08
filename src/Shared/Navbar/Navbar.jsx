import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import ActiveLink from "../ActiveLink/ActiveLink";

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
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/menu'>Our Menu</ActiveLink></li>
        <li><ActiveLink to='/order/salad'>Order Food</ActiveLink></li>
        {/* <li><ActiveLink to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</ActiveLink></li>
        <li><ActiveLink to='/dashboard/mycart'><button className="btn gap-2">
            <div className="badge badge-secondary">+{cart?. length || 0}</div>
        </button></ActiveLink></li> */}

        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></> : <><li><ActiveLink to='/login'>Login</ActiveLink></li></>
        }
    </>

    return (
            <div className="navbar bg-green-200 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Drawing School</a>
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
    );
};

export default Navbar;