import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";


const AllClasses = ({ loadedClasses, i }) => {
    const [status, setStatus] = useState(loadedClasses.status);;


    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await fetch("http://localhost:5000/classes");
        return res.json();
    }
    );

    // const {user} = useContext(AuthContext);
    const { classImg, availableSeats, className, email, instructorImg, instructorName, numberOfStudents, price, role } = loadedClasses;

    const handleApprove = () => {
        fetch(`http://localhost:5000/classes/approved/${loadedClasses._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "Approved" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    toast("This class is approved now!");
                    setStatus("approved");
                    // setIsButtonsDisabled(true);
                }
            });
    };


    const handleDeny = () => {
        fetch(`http://localhost:5000/classes/denied/${loadedClasses._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "Denied" }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    toast("This class is denied now!");
                    setStatus("denied");
                    // setIsButtonsDisabled(true);
                }
            });
    };

    const handleSendFeedback = () => {
        // setIsButtonsDisabled(true);
    };

    return (
        <>
            <tr>
            <td>{i+1}</td>
                <td>
                    <div className="rounded w-24 h-24">
                        {classImg && <img src={classImg} alt="" />}
                    </div>
                </td>
                <td>{className}</td>
                <td>{instructorName}</td>
                <td>{email}</td>
                <td>{availableSeats}</td>
                <td>${price}</td>
                <td>{status}</td>
                <td>
                    {
                        status === "approved" || status === "denied" ?
                     <>
                      <button className="btn btn-primary btn-xs" disabled>
                            Denied
                        </button>
                        
                        <button className="btn btn-primary btn-xs" disabled>
                        Approved
                    </button>
                     </>
                        : <>
                        <button onClick={handleApprove} className="btn btn-primary btn-xs">
                            Approved
                        </button> <button onClick={handleDeny} className="btn btn-primary btn-xs">
                                Denied
                            </button> <Link
                                to={`/feedback?email=${email}&instructorName=${instructorName}`}
                            >
                                <button
                                    className="btn btn-primary btn-xs"
                                    onClick={handleSendFeedback}
                                >
                                    Send Feedback
                                </button>
                            </Link>
                            <ToastContainer /> </>
                    }
                </td>
            </tr>
        </>
    );
};

export default AllClasses;






