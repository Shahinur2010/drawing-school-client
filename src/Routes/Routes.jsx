import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorElement from "../Pages/ErrorPage";
import Home from "../components/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import InstructorRoute from "./InstructorRoute";
import Feedback from "../Pages/Dashboard/MyClasses/Feedback";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myclass',
                element: <MyClasses></MyClasses>
            },
            {
                path: '/feedback',
                element: <Feedback></Feedback>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'selectedclass',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: "enrolledclass",
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // instructor routes
            {
                path: 'instructorhome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'myclass',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            // admin routes
            {
                path: "adminhome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "manageclass",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageuser',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    }
]);

export default router;  