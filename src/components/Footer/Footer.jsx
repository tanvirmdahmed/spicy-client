import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-image text-base-content rounded-lg">
            <div className="grid grid-flow-col gap-4 text-lg">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Catering</a>
                <a className="link link-hover">Menu</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a><FaTwitter className='text-2xl text-[#1c93e4]'></FaTwitter></a>
                    <a><FaYoutube className='text-2xl text-[#f10002]'></FaYoutube></a>
                    <a><FaFacebook className='text-2xl text-[#1771e6]'></FaFacebook></a>   
                </div>
            </div>
            <div>
                <p className='text-lg'>Copyright © 2023 - All right reserved by Chef Master Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;