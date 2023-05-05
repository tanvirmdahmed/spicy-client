import React, { useContext } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { TbChefHat } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import chef from '../../../public/chef.json';
import Lottie from 'lottie-react';
import { FaUser } from 'react-icons/fa';


const Header = () => {

    const { user, logOut, loading } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className='px-3 md:lg:px-0'>
            {
                loading &&
                <div className="text-center">
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            <div className="navbar flex-col md:lg:flex-row bg-image py-4 gap-4 md:lg:gap-0">
                <div className="flex-1 gap-2">
                    <h1 className='text-[#1B98F5]'><TbChefHat></TbChefHat></h1>
                    <h1 className='text-[#1B98F5]'>Spicy</h1>
                </div>
                <div className="">
                    <div className="menu flex-col md:lg:flex-row menu-horizontal px-1 text-xl gap-2 md:lg:gap-10 items-center text-orange-400">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                        {
                            user &&
                            <div className="avatar">
                                <div className="w-10 border-gray-200 border-2 rounded-full">
                                    {
                                        user.photoURL ? <img title={user.displayName} className='tool' src={user?.photoURL} /> : <span className='flex items-center justify-center text-3xl text-gray-400'><FaUser></FaUser></span>
                                    }

                                </div>
                            </div>
                        }
                        {
                            user ? <Link onClick={handleLogOut} className="btn btn-secondary">Logout</Link> : <Link to='/login' className="btn btn-warning">Login</Link>
                        }

                    </div>
                </div>
            </div>
            {
                user &&
                <div className='flex flex-col items-center mt-6'>
                    <h2><span className='text-orange-400 text-lg md:lg:text-5xl font-bold drop-shadow-2xl'>Welcome to Spicy</span></h2>
                    <Lottie animationData={chef} className='w-1/2 md:lg:w-1/4'></Lottie>
                </div>
            }
        </div>
    );
};

export default Header;