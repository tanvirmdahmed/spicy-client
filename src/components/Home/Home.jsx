import React from 'react';
import Banner from '../../Banner/Banner';
import ChefCards from '../../ChefCards/ChefCards';
import Sliders from '../../Sliders/Sliders';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefCards></ChefCards>
            <Sliders></Sliders>
            <Services></Services>
        </div>
    );
};

export default Home;