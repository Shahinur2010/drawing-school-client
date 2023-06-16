import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/Authprovider';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";

const Login = () => {

    const { signIn, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useTitle('Login')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = data => {
        signIn(data?.email, data?.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUser(data?.name, data?.photoURL)
                    .then(() => {
                        const saveUser = { name: data?.name, email: data?.email, photo: data?.photoURL }
                        fetch('https://assignment-12-server-five-murex.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId > 0) {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from, { replace: true })
                                }
                            })
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User loggedIn successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    })
                    .catch(err => console.log(err))
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col">
                <div>
                    <h1 className="text-3xl font-bold text-center">Please Login Here!</h1>
                </div>
                <div className="card max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-400">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span> {showPassword ? <FaEyeSlash onClick={togglePasswordVisibility} /> : <FaEye onClick={togglePasswordVisibility} />}
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true
                            })} name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-info btn-block" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="mx-auto mb-4"><small>New to Drawing School? <Link className="text-blue-300" to="/register">Please Register!</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;




