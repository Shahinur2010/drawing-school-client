
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
            <NavLink
                to={to}
                style={({ isActive }) => {
                    return {
                    color: isActive ? "blue" : "",
                }}}
            >
                {children}
            </NavLink>
            
    );
};

export default ActiveLink;