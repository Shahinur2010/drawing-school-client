import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/Authprovider";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                const saveUser = {name: data.name, email: data.email}
               fetch('https://bistro-boss-server-beryl.vercel.app/users',{
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(saveUser)
               })
               .then(res=> res.json())
               .then(data=>{
                if(data.insertedId > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate('/') 
                }
               })
               
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')
            })
            .catch(err => console.log(err))
        })
    };

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                        <div>
                        <h1 className="text-3xl font-bold text-center">Register now!</h1>
                        </div>
                    <div className="card max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-400">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-400">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-400">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-400">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be at least 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-400">Password must be at less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-400">Password must one uppercase, one lowercase, one number and a special characters</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirm-password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])/
                                })} name="confirm-password" placeholder="confirm-password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-400">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be at least 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-400">Password must be at less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-400">Password must one uppercase, one lowercase, one number and a special characters</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary btn-block" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className="mx-auto mb-4"><small>Already have an account? <Link className="text-blue-300" to="/login">Login Here</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
