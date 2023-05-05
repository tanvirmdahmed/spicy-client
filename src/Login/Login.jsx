import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        setSuccess('');
        setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess("You have successfully logged in")
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
            })
    };

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
            })
    }


    return (
        <div className='px-3 md:lg:px-0'>
            <div className="hero bg-image my-12">
                <div className="hero-content flex-col w-full my-10">
                    <div className="text-center">
                        <h1 className="text-3xl md:lg:text-5xl font-bold">Please Login!!!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className='px-8 mt-8'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full mb-4 gap-2"><FaGoogle></FaGoogle>Login with Google</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline btn-secondary w-full mb-8 gap-2"><FaGithub></FaGithub> Login with GitHub</button>
                        </div>
                    </div>
                    <h2 className='text-center text-2xl font-semibold'>---------- or ----------</h2>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="Password" className="input input-bordered mb-2" required />
                                <div className="toggle-password" onClick={toggleShowPassword}>
                                    {
                                        showPassword ? <span className='ms-1 text-xs text-black'><input onClick={toggleShowPassword} type="checkbox" name="" id="" /> Hide Password</span> : <span className='ms-1 text-xs text-black'><input onClick={toggleShowPassword} type="checkbox" /> Show Password</span>
                                    }
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">Login</button>
                            </div>
                            <p className='text-green-500 text-center'>{success}</p>
                            <p className='text-red-500 text-center'>{error}</p>
                            <label className="label">
                                <p>Don't Have an Account? <Link to="/register" className='text-blue-600 underline'>Register</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Login;