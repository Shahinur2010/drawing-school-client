/* eslint-disable react/jsx-no-comment-textnodes */

import { FaUserShield } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useTitle from "../../../Hooks/useTitle";


const ManageUsers = () => {
    useTitle('Manage Users')

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://assignment-12-server-five-murex.vercel.app/users')
        return res.json();
    })

    const handleMakeAdmin = (user) => {
        fetch(`https://assignment-12-server-five-murex.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    toast(`${user.name} is an Admin Now!`)
                }
            })
    }

    const handleMakeInstructor = (user) => {
        fetch(`https://assignment-12-server-five-murex.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    toast(`${user.name} is an Instructor Now!`)
                }
            })
    }


    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-6'>Manage All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : <FaUserShield></FaUserShield>
                                }</td>
                                <td>
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-info btn-xs">Make Instructor</button>
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-info btn-xs">Make Admin</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageUsers;