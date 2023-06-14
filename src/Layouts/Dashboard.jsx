
import { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'
import { FaAmazonPay, FaChalkboardTeacher, FaHome, FaPeopleArrows, FaRestroom, FaSchool, FaUsers, FaWallet, FaAdn, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';


const Dashboard = () => {
     const [isAdmin] = useAdmin();
     const [isInstructor] = useInstructor();
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-[84%] ms-56 me-4 bg-transparent">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button"> Click Here to open drawer<DayNightToggle className='my-4 mx-4'
                    onChange={() => setIsDarkMode(!isDarkMode)}
                    checked={isDarkMode}
                /></label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu w-[16%] h-full bg-green-200">
                    {/* Sidebar content here */}
                    {isAdmin? 
                    <>
                    <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/manageclass"><FaRestroom></FaRestroom> Manage Classes</NavLink></li>
                    <li><NavLink to="/dashboard/manageuser"><FaUsers></FaUsers> Manage Users</NavLink></li> 
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
                    <li><NavLink to='/classes'><FaPeopleArrows></FaPeopleArrows> Classes</NavLink></li></> :
                    isInstructor? <>
                    <li><NavLink to="/dashboard/instructorhome"><FaHome></FaHome> Instructor Home</NavLink></li>
                    <li><NavLink to="/dashboard/addclass"><FaShoppingCart></FaShoppingCart> Add Class</NavLink></li>
                    <li><NavLink to="/dashboard/myclass"><FaAdn></FaAdn> My Classes</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
                    <li><NavLink to='/classes'><FaPeopleArrows></FaPeopleArrows> Classes</NavLink></li>
                    </>: 
                    <>
                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User home</NavLink></li>
                    <li><NavLink to="/dashboard/selectedclass"><FaSchool></FaSchool> Selected Classes</NavLink></li>
                    <li><NavLink to="/dashboard/enrolledclass"><FaAmazonPay></FaAmazonPay> Enrolled Classes</NavLink></li>
                    <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink></li>
                    <li><NavLink to='/classes'><FaPeopleArrows></FaPeopleArrows> Classes</NavLink></li>
                    </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;