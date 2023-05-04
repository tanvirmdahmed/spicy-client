import React from 'react';
import { FaHamburger } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='py-12'>
            <h1 className='mb-12 text-center text-[#ffb655]'>Our Awesome Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                <div className="card bg-image border-gray-400 shadow-xl items-center">
                    <div className="px-10 pt-10">
                        <img src="https://i.ibb.co/djvhCT1/burger.png" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Chicken Burger</h2>
                    </div>
                </div>
                <div className="card bg-image border-gray-400 shadow-xl items-center">
                    <div className="px-10 pt-10">
                        <img src="https://i.ibb.co/gDxhW2v/dish-3.png" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Best Dishes</h2>
                    </div>
                </div>
                <div className="card bg-image border-gray-400 shadow-xl items-center">
                    <div className="px-10 pt-10">
                        <img src="https://i.ibb.co/g6DxhqX/pizza.png" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Pan Pizza</h2>
                    </div>
                </div>
                <div className="card bg-image border-gray-400 shadow-xl items-center">
                    <div className="px-10 pt-10">
                        <img src="https://i.ibb.co/0qJ0psf/fish.png" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Fish</h2>
                    </div>
                </div>
                <div className="card bg-image border-gray-400 shadow-xl items-center">
                    <div className="px-10 pt-10">
                       <img src="https://i.ibb.co/j8PrghW/liquor.png" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Drink Bars</h2>
                    </div>
                </div>
                <div className="card bg-image border-gray-400 shadow-xl items-center">
                    <div className="px-10 pt-10">
                        <img src="https://i.ibb.co/ZTYzpSs/noodles.png" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Pasta</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;