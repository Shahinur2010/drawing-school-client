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
        <li className="text-lg font-semibold"><ActiveLink to='/'>Home</ActiveLink></li>
        <li className="text-lg font-semibold"><ActiveLink to='/menu'>Instructors</ActiveLink></li>
        <li className="text-lg font-semibold"><ActiveLink to='/order/salad'>Classes</ActiveLink></li>
        {user && <li className="text-lg font-semibold"><ActiveLink to='/order/salad'>Dashboard</ActiveLink></li>}
       
        {/* <li><ActiveLink to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</ActiveLink></li>
        <li><ActiveLink to='/dashboard/mycart'><button className="btn gap-2">
            <div className="badge badge-secondary">+{cart?. length || 0}</div>
        </button></ActiveLink></li> */}
 <div className="mt-5">
                    <div className="tooltip flex flex-col lg:flex-row gap-2 me-4" data-tip={user?.displayName}>
                        <button className="btn btn-info"><img className="w-10 rounded-full" src={user?.photoURL} /></button>

                        {user ? <>
                            <button onClick={handleLogOut} className="btn btn-info">LogOut</button></> : <ActiveLink to='/login' className="font-semibold">Login</ActiveLink>
                        }
                    </div>
                </div>

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

                    <div className="navbar p-4 flex flex-col lg:flex-row text-black">
            <div>
                <img className="rounded-full w-16 h-16" src="https://i.ibb.co/rxZrxSK/school.jpg" alt="" />
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-bold">Drawing School</a>
            </div>
</div>

                    {/* <a className="btn btn-ghost normal-case text-3xl font-extrabold"></a> */}
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
               
            </div>
    );
};

export default Navbar;