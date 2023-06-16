
const SingleClass = ({ cls }) => {
    const { classImg, availableSeats, className, numberOfStudents, price } = cls;
    return (
        <div className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={classImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{className}</h2>
                    <p>Number of Students: {numberOfStudents}</p>
                    <p>Price: ${price}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;