import { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import useClasses from "../../Hooks/useClasses";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";


const Classes = () => {
  const [items, setItems] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('http://localhost:5000/classes/approved')
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, [])

  const handleSelect = (item) => {

    const selectedClass = { className: item?.className, classImg: item?.classImg, availableSeats: item?.availableSeats, price: item?.price, email: user?.email }

    fetch('http://localhost:5000/selectedclass', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(selectedClass)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class has been added',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }


  return (
    <>
      <h2 className="text-center text-3xl font-bold my-6">Total Approved Classes: {items.length}</h2>
      <div className="overflow-x-auto mx-16">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Picture</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
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
                        <img src={item.classImg} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.availableSeats}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => handleSelect(item)} className="btn btn-info btn-xs">Select</button>
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </>
  );
};

export default Classes;