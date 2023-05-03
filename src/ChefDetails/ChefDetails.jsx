import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const eachChefData = useLoaderData();
    console.log(eachChefData);
    return (
        <div className=''>
            
        </div>
    );
};

export default ChefDetails;