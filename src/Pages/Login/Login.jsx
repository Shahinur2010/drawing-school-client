import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/Authprovider';




const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useTitle('Login')


    const { signIn, signInWithGoogle, updateUser } = useContext(AuthContext);

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

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Login Successful')
                navigate(from, {replace: true})
            })
            .catch(error => {
                setSuccess(error.message)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-red-400'>{error}</p>
                        <p className='text-green-400'>{success}</p>
                    </form>
                    <p className='mb-2 ml-4'>New to Toys Hub? <button className="btn btn-active btn-link"><Link to='/register'>Please Register!</Link></button> </p>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary my-2">Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
