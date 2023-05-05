import React, { useContext } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { TbChefHat } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import chef from '../../../public/chef.json';
import Lottie from 'lottie-react';
import { FaUser } from 'react-icons/fa';


const Header = () => {

    const { user, logOut, } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className='px-3 md:lg:px-0'>
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
                                    <img title={user.displayName} className='tool' src={user?.photoURL} />

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