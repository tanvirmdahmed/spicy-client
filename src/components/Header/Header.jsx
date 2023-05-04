import React, { useContext } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { TbChefHat } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="navbar bg-image py-4">
                <div className="flex-1 gap-2">
                    <h1 className='text-[#1B98F5]'><TbChefHat></TbChefHat></h1>
                    <h1 className='text-[#1B98F5]'>Spicy</h1>
                </div>
                <div className="flex-none">
                    <div className="menu menu-horizontal px-1 text-xl gap-10 items-center text-orange-400">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                        {
                            user &&
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img title={user.displayName} className='tool' src={user.photoURL} />
                                </div>
                            </div>
                        }
                        {
                            user ? <Link onClick={handleLogOut} className="btn btn-secondary">Logout</Link> : <Link to='/login' className="btn btn-warning">Login</Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;