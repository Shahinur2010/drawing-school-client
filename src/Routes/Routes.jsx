import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorElement from "../Layouts/ErrorPage";
import Home from "../components/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    }
]);

export default router;  