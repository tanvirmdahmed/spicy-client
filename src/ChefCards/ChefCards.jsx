import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const ChefCards = () => {
    const [chefAllData, setAllChefData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then(data => setAllChefData(data))
    }, [])
    
    return (
        <div className='my-16'>
           <h1 className='text-center text-red-400 mb-12'>Here are our Chef Master</h1> 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 mx-auto'>
                {
                    chefAllData.map(chefData => <ChefCard
                        key={chefData.id}
                        chefData={chefData}
                    ></ChefCard>)
                }
           </div>
        </div>
    );
};

export default ChefCards;