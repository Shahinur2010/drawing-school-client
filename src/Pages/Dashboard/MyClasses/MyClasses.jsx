import { useContext, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import { useEffect } from "react";
import MyClassesRow from './MyClassesRow'
import { AuthContext } from "../../../Providers/Authprovider";


const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [loadedClasses, setLoadedClasses] = useState([]);
    useTitle('My Classes')

    const url = `http://localhost:5000/allclass?instructorEmail=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoadedClasses(data)
            })
    }, [url])

    return (
        <div>
             <h2 className='text-center font-bold text-3xl my-4'>My Classes: {loadedClasses.length}</h2>
             <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Total Enrolled Students</th>
                            <th>Feedback</th>
                            <th>Update Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            loadedClasses.map(loadedClasses => <MyClassesRow key={loadedClasses._id} loadedClasses={loadedClasses}></MyClassesRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;