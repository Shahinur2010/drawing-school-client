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
import ManagrUsers from "../Pages/Dashboard/ManageUsers/ManagrUsers";
import InstructorRoute from "./InstructorRoute";

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
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'selectedclass',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: "enrolledclass",
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            // instructor routes
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
                path: "manageclass",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageuser',
                element: <AdminRoute><ManagrUsers></ManagrUsers></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    }
]);

export default router;  