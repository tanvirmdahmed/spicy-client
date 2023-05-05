import React from 'react';
import Banner from '../../Banner/Banner';
import ChefCards from '../../ChefCards/ChefCards';
import Sliders from '../../Sliders/Sliders';
import Services from '../../Services/Services';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div className='px-3 md:lg:px-0'>
            <Banner></Banner>
            <ChefCards></ChefCards>
            <Services></Services>
            <Sliders></Sliders>
        </div>
    );
};

export default Home;