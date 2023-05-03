import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-2 items-center justify-center my-8 bg-image px-8 py-8 rounded-lg'>
            <div className=''>
                <div className='mb-4 text-center'>
                    <h1 className='text-8xl mb-4 text-purple-400'>Fun and Easy</h1>
                    <h1 className='text-6xl mb-4 text-green-600'>to become a</h1>
                    <h1 className='text-7xl text-amber-500'>Chef Master</h1>
                </div>
                <p className='text-slate-600 mb-6 text-center text-xl'>Let's join to cook with us and become an expert in every type of cuisine in a fun way.</p>
                <div className='text-center'>
                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Join with Us</button>
                </div>
            </div>
            <div className='rounded-full'>
                <img className='rounded-lg' src="https://i.ibb.co/8xGXCJ5/chefimage.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;