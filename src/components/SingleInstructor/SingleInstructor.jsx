

const SingleInstructor = ({ ins }) => {
    const { classImg, availableSeats, className, instructorEmail, instructorImg, instructorName, numberOfStudents, price, role, status } = ins;
    return (
          <tr>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {instructorImg && <img src={instructorImg} alt="" />}
                    </div>
                </div>
            </td>
            <td>{instructorName}</td>
            <td>{instructorEmail}</td>
            <td>{numberOfStudents}</td>
            <td>{availableSeats}</td>
            <td>${price}</td>
            {/* <td>{availableQuantity}</td>
            <td>{rating}</td>
            <th>
                <Link onClick={handleToast} to={`/view-details/${_id}`}><button className="btn btn-primary btn-xs">View Details</button></Link>
                <ToastContainer/>
            </th> */}
        </tr>
    );
};

export default SingleInstructor;