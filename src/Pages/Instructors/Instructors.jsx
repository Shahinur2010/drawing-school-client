import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Instructors = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users/instructor')
      .then(res => res.json())
      .then(data => {
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item => <tr key={item._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.photo} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>
                  <Link to="/addclass"><button className="btn btn-info btn-xs">Add Class</button></Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;