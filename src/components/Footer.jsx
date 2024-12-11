import React from 'react';
import logoDark from "../assets/logo dark transparent.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-black border-t border-black mt-2">
        <div className='my-10 4k2:my-24'>
            <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0 px-4 max-sm:flex max-sm:flex-col max-sm:items-center">
                <img src={logoDark} alt="Scribe9 Logo" className="w-32 sm:w-40 md:w-48 lg:w-56 
                 2xl:w-72 4k:w-80 4k2:w-96" />
                <p className='font-raleway mt-4 md:text-lg hd:text-2xl 4k2:text-4xl max-sm:text-center'>
                Designed by tired clinicians with a child's imagination.
                </p>
                <div className="flex gap-4 mt-4">
                <a href="#"><FaFacebookF className="w-5 h-5 md:w-6 md:h-6 hd:w-8 hd:h-8 4k2:w-10 4k2:h-10" /></a>
                <a href="#"><FaInstagram className="w-5 h-5 md:w-6 md:h-6 hd:w-8 hd:h-8 4k2:w-10 4k2:h-10" /></a>
                <a href="#"><FaTwitter className="w-5 h-5 md:w-6 md:h-6 hd:w-8 hd:h-8 4k2:w-10 4k2:h-10" /></a>
                <a href="#"><FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6 hd:w-8 hd:h-8 4k2:w-10 4k2:h-10" /></a>
                <a href="#"><FaYoutube className="w-5 h-5 md:w-6 md:h-6 hd:w-8 hd:h-8 4k2:w-10 4k2:h-10" /></a>
                </div>
            </div>
            <div className="flex flex-col gap-4  px-4 justify-center items-center mt-8 md:mt-0  ">
                <div className='flex flex-col gap-2'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl hd:text-5xl 4k2:text-7xl font-playfair text-transparent font-bold bg-clip-text bg-gradient-to-l from-[#5857F6] to-[#101052]">
                        Quick Links
                    </h1>
                    <ul className="flex gap-4 max-sm:flex-col flex-wrap justify-start items-center 
                    font-raleway 4k2:text-4xl">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/use-cases">Use Cases</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/templates">Templates</a></li>
                        <li><a href="/customers">Customers</a></li>
                        <li><a href="/our-story">Our Story</a></li>
                        <li><a href="/changelog">Changelog</a></li>
                    </ul>
                </div>
                <div className="text-white self-start flex max-sm:flex-col max-sm:self-center
                justify-center items-center gap-5 4k2:mt-5">
                    <a href="/signin" className="py-2 px-5 rounded-xl bg-[#5857F6] text-1xl 4k:text-3xl 4k:px-10 4k:py-3">
                        Login
                    </a>
                    <a href="/signup" className="py-2 px-5 rounded-xl bg-[#F55822] border text-1xl 4k:text-3xl 4k:px-10 4k:py-3">
                        Sign Up
                    </a>
                </div>
            </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
