import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Providers/Authprovider";


const MyClassesRow = ({loadedClasses, i}) => {
    const {user} = useContext(AuthContext);
    const {classImg, availableSeats, className, price, status } = loadedClasses;
   

    return (
        <tr>
             <td>{i+1}</td>
            <td>
                {/* <div className="avatar"> */}
                    <div className="rounded w-24 h-24">
                        {classImg && <img src={classImg} alt="" />}
                    </div>
                {/* </div> */}
            </td>
            <td>{className}</td>
            <td>{status}</td>
            <td>${price}</td>
            <td>{availableSeats}</td>
            <td>0</td>
            <td>{
                status === 'denied' &&
                <Link to="/feedback"><button className="btn btn-primary btn-xs">Feedback</button></Link>}</td>
            <td>{<button className="btn btn-primary btn-xs">Update</button>}</td>
        </tr>
    );
};

export default MyClassesRow;