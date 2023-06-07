import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthConText } from '../Providers/Authprovider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthConText);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;