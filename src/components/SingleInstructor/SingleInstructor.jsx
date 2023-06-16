

const SingleInstructor = ({ ins }) => {
    const { email, instructorImg, instructorName } = ins;
    return (
        <div className="mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={instructorImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructorName}</h2>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>

    );
};

export default SingleInstructor;
