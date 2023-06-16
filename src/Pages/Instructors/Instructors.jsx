import { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";

const Instructors = () => {
  const [items, setItems] = useState([]);
  useTitle('Instructors')

  useEffect(() => {
    fetch('https://assignment-12-server-five-murex.vercel.app/users/instructor')
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [])
  return (
    <div className="overflow-x-auto mx-64">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item, i) => <tr key={item._id}>
              <td>{i + 1}</td>
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
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Instructors;