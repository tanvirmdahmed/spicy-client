import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <div className="navbar bg-base-100 my-6">
            <div className="flex-1">
                <h1 className='text-amber-300'>Cook Master</h1>
            </div>
            <div className="flex-none">
                <div className="menu menu-horizontal px-1 text-xl gap-10 items-center text-orange-400">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://static-beautyhigh.stylecaster.com/2014/05/477973067.jpg" />
                        </div>
                    </div>
                    <button className="btn btn-warning">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;