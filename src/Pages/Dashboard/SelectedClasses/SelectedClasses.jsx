import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const SelectedClasses = () => {
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState([]);
  useTitle('Selected Classes')

  useEffect(() => {
    fetch('https://assignment-12-server-five-murex.vercel.app/selectedclass')
      .then(res => res.json())
      .then(data => {
        setClasses(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (slClass) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-12-server-five-murex.vercel.app/selectedclass/${slClass._id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setClasses(prevClasses => prevClasses.filter(item => item._id !== slClass._id));
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-6">Selected Classes: {loading ? 'Loading...' : classes.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {
              classes.map((slClass, i) => <tr key={slClass._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="rounded w-24 h-24">
                    {slClass.classImg && <img src={slClass.classImg} alt="" />}
                  </div>
                </td>
                <td>{slClass.className}</td>
                <td>{slClass.availableSeats}</td>
                <td>${slClass.price}</td>
                <td><button onClick={() => handleDelete(slClass)} className="btn btn-sm bg-red-300 text-white"><FaRegTrashAlt /></button></td>
                <td><Link to={`/dashboard/payment/${slClass._id}`}><button
                  className="btn btn-info btn-sm"
                >
                  Pay
                </button></Link></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
