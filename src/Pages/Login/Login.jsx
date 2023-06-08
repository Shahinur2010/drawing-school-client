import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/Authprovider';
import SocialLogin from '../../SocialLogin/SocialLogin';




const Login = () => {

    const { signIn, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useTitle('Login')



    const handleLogin = e => {
        e.preventDefault();
        setSuccess('');
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const signedInUser = result.user;
                setSuccess("Login Successful");
                updateUser();
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                setError(error.message)
            })
    }



    return (
<div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col">
                        <div>
                        <h1 className="text-3xl font-bold text-center">Please Login Here!</h1>
                        </div>
                    <div className="card max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={()=>handleSubmit(handleLogin)} className="card-body">
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



        {/* <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Please Login Here</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div> */}
                        

                        <div className="form-control mt-6">
                                <input className="btn btn-primary btn-block" type="submit" onClick={signIn} value="Login" />
                            </div>
                        <p className='text-red-400'>{error}</p>
                        <p className='text-green-400'>{success}</p>
                    </form>
                    <p className="mx-auto mb-4"><small>New to Drawing School? <Link className="text-blue-300" to="/register">Please Register!</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
