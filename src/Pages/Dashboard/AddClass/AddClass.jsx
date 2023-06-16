import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authprovider";
import useTitle from "../../../Hooks/useTitle";
import Swal from "sweetalert2";


const AddClass = () => {

    const { user } = useContext(AuthContext);
    useTitle('Add A Class')

    const handleAddClass = (e) => {
        e.preventDefault()
        const form = e.target;
        const className = form.className.value;
        const price = form.price.value;
        const classImg = form.classImg.value;
        const instructorName = form.instructorName.value;
        const email = form.email.value;
        const availableSeats = form.availableSeats.value;
        const status = form.status.value;


        const addClass = {
            className,
            price,
            classImg,
            instructorName,
            email,
            availableSeats,
            status
        }


        fetch('https://assignment-12-server-five-murex.vercel.app/addclass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset()
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }


    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-4'>Please Add A Class Here</h2>
            <form onSubmit={handleAddClass}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 my-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name='className' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Picture</span>
                        </label>
                        <input type="text" name='classImg' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='instructorName' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name='email' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" name='availableSeats' required placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input type="text" name='status' defaultValue={'pending'} placeholder="" className="input input-bordered" />
                    </div>
                </div>
                <button type='submit' className="btn btn-block btn-info my-4">Add Class</button>
            </form>
        </div>
    );
};

export default AddClass;

