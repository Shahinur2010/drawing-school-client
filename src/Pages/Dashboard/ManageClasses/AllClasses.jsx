import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../Providers/Authprovider";


const AllClasses = ({loadedClasses}) => {
    const {user} = useContext(AuthContext);
    const {classImg, availableSeats, className, instructorEmail, instructorImg, instructorName, numberOfStudents, price, role, status } = loadedClasses;
   
    const handleToast = () =>{
        if(!user){
            toast("You have to log in first to view details!")}
    }

    return (
        <tr>
            <td>
                {/* <div className="avatar"> */}
                    <div className="rounded w-24 h-24">
                        {classImg && <img src={classImg} alt="" />}
                    </div>
                {/* </div> */}
            </td>
            <td>{className}</td>
            <td>{instructorName}</td>
            <td>{instructorEmail}</td>
            <td>{availableSeats}</td>
            <td>${price}</td>
            {/* <td>{status}</td> */}
            <td>{<><button className="btn btn-primary btn-xs">pending</button>
            <button className="btn btn-primary btn-xs">approved</button>
            <button className="btn btn-primary btn-xs">denied</button></>}</td>
            <td>{<>
                <button className="btn btn-primary btn-xs">Approve</button>
                <button className="btn btn-primary btn-xs">Deny</button>
                <button className="btn btn-primary btn-xs">Send Feedback</button></>
            }</td>
            {/* <th>
                <Link onClick={handleToast} to=""><button className="btn btn-primary btn-xs">View Details</button></Link>
                <ToastContainer/>
            </th> */}
        </tr>
    );
};

export default AllClasses;