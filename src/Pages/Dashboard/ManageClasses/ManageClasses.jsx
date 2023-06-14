import { useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import { useEffect } from "react";
import AllClasses from './AllClasses'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authprovider";


const ManageClasses = () => {
    const [loadedClasses, setLoadedClasses] = useState([]);
    // const {user} = useContext(AuthContext)
    useTitle('Manage Classes')
    const token = localStorage.getItem('access-token')

    useEffect(() => {
        if(token){
            fetch('http://localhost:5000/allclass', {headers: {
                authorization: `bearer ${token}`
            }})
                .then(res => res.json())
                .then(data => {
                    setLoadedClasses(data)
                })
        }
    }, [token])

    return (
        <div>
             <h2 className='text-center font-bold text-3xl my-4'>Manage All Classes: {loadedClasses.length}</h2>
             <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            loadedClasses.map(loadedClasses => <AllClasses key={loadedClasses._id} loadedClasses={loadedClasses}></AllClasses>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;