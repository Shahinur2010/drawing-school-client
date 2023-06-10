import { useEffect, useState } from "react";
import SingleInstructor from "../../../SingleInstructor/SingleInstructor";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data=> {
            setInstructors(data)
        })
    }, [])
    return (
        <div className="my-6">
            <h2 className='text-center font-bold text-3xl my-6'>Popular Instructors</h2>
            <table className="table w-full mx-auto bg-purple-200">
                    {/* head */}
                    <thead className='text-center text-slate-900'>
                        <tr>
                            <th>Picture</th>
                            <th>Instructor</th>
                            <th>Instructor Email</th>
                            <th>Total Students</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            {/* <th>Rating</th>
                            <th>Details Action</th> */}
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            instructors.map((ins, i) => <SingleInstructor key={i} ins={ins}></SingleInstructor>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default PopularInstructors;