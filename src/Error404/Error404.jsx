import React from 'react';

const Error404 = () => {
    return (
        <div className='text-center h-screen flex flex-col items-center justify-center'>
            <h1 className='text-[300px] font-bold italic text-red-700'>404</h1>
            <h1 className='text-[70px] font-light'>Page Not Found</h1>
        </div>
    );
};

export default Error404;