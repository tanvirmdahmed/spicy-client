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
            <div className="navbar bg-base-100 my-6">
                <div className="flex-1">
                    <h1 className='text-amber-300'><TbChefHat className='inline'></TbChefHat> Chef Master</h1>
                </div>
                <div className="flex-none">
                    <div className="menu menu-horizontal px-1 text-xl gap-10 items-center text-orange-400">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                        {
                            user &&
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
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
                user && <h1 className='text-center'><span className='text-blue-500'>Welcome</span> <span className='text-amber-500'>{user.displayName}</span></h1>
            }
        </div>
    );
};

export default Header;