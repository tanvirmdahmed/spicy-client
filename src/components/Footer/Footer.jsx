import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-image rounded-lg">
            <div className="grid grid-flow-col gap-4 text-lg">
                <a className="link link-hover text-sm md:lg:text-lg">About us</a>
                <a className="link link-hover text-sm md:lg:text-lg">Contact</a>
                <a className="link link-hover text-sm md:lg:text-lg">Catering</a>
                <a className="link link-hover text-sm md:lg:text-lg">Menu</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://twitter.com/'><FaTwitter className='text-2xl text-[#1c93e4]'></FaTwitter></a>
                    <a href='https://www.youtube.com/'><FaYoutube className='text-2xl text-[#f10002]'></FaYoutube></a>
                    <a href='https://www.facebook.com/'><FaFacebook className='text-2xl text-[#1771e6]'></FaFacebook></a>   
                </div>
            </div>
            <div>
                <p className='text-sm md:lg:text-lg'>Copyright © 2023 - All right reserved by Spicy Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;