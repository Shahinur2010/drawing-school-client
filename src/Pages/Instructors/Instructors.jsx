import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Instructors = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data=>{
            setItems(data)
        })
    }, [])
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
{
items.map(item=> <tr key={item._id}>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src="" />
          </div>
        </div>
      </div>
    </td>
    <td>{item?.displayName}</td>
    <td>{item?.email}</td>
    <td>
      <Link to="/addclass"><button className="btn btn-info btn-xs">Add Class</button></Link>
    </td>
    <td>
     <button className="btn btn-info btn-xs">Make Instructor</button>
    </td>
    <td>
     <button className="btn btn-info btn-xs">Make Admin</button>
    </td>
  </tr>)
}
            
          </tbody>
  </table>
</div>
    );
};

export default Instructors;