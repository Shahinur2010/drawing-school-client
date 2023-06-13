
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import MyClasses from '../Pages/Dashboard/MyClasses/MyClasses';

const Main = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer/>
            <MyClasses></MyClasses>
            <Footer></Footer>
        </div>
    );
};

export default Main;