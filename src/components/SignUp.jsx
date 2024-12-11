import React from 'react';
import Google from '../assets/Google_Logo.png';
import Apple from '../assets/Apple_Logo.png';
import Micro from '../assets/Micro_Logo.png';
import Logo from '../assets/brand_Logo_black_trans.png';
import Navbar from './Navbar';

function SignIn() {
  return (
    <>
      <Navbar mode="dark"/>
      <div className="mt-10 px-4 md:px-8 text-center pb-12 4k2:h-[89vh] flex flex-col 4k2:justify-around 4k2:items-center">
        <img 
          src={Logo} 
          alt="Brand Logo" 
          className="mx-auto mb-12 w-32 sm:w-40 md:w-48 lg:w-56 hd:w-72 4k:w-80 4k2:w-[70rem]" 
        />

        <h1 className="font-playfair text-transparent font-bold bg-clip-text 
        bg-gradient-to-l from-[#5857F6] to-[#101052] mb-8 text-xl sm:text-2xl 
        md:text-3xl lg:text-4xl hd:text-5xl 4k:text-6xl 4k2:text-8xl 4k2:my-10">
          Experience Elevated Transcription—Sign Up Today
        </h1>

        <p className="text-black mb-8 text-base sm:text-lg md:text-xl lg:text-2xl 
        hd:text-3xl 4k:text-4xl 4k2:text-6xl 4k2:w-2/4 ">
          Join today for flexible options that save you time and ensure top-quality transcription.
        </p>

        <div className="w-full xl:w-2/4 hd:w-[28rem] 4k:w-[34rem] 4k2:w-[60rem] mx-auto mb-10">
          <label className="block text-black font-bold mb-4 text-left text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-6xl">
            First Name
          </label>
          <input
            className="w-full rounded-lg 4k2:rounded-3xl border border-[#1177FF] p-6 mb-8 text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-5xl"
            type="text"
            id="fname"
            placeholder="Enter your First Name"
          />

          <label className="block text-black font-bold mb-4 text-left text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-6xl">
            Last Name
          </label>
          <input
            className="w-full rounded-lg 4k2:rounded-3xl border border-[#1177FF] p-6 mb-8 text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-5xl"
            type="text"
            id="lname"
            placeholder="Enter your Last Name"
          />
          
          <label className="block text-black font-bold mb-4 text-left text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-6xl">
            Email
          </label>
          <input
            className="w-full rounded-lg 4k2:rounded-3xl border border-[#1177FF] p-6 mb-8 text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-5xl"
            type="text"
            id="email"
            placeholder="Enter your email"
          />

          <label className="block text-black font-bold mb-4 text-left text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-6xl">
            Password
          </label>
          <input
            className="w-full rounded-lg 4k2:rounded-3xl border border-[#1177FF] p-6 mb-8 text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-5xl"
            type="password"
            id="password"
            placeholder="Enter your password"
          />

          
        <label className="text-black mb-8 text-sm sm:text-base md:text-lg lg:text-xl 
        hd:text-1xl 4k:text-3xl 4k2:text-4xl font-light">By creating an account, you agree to our Terms of Service and Privacy Policy.</label>
          
        </div>

        <button className="lg:w-[22rem] hd:w-[28rem] 4k:w-[34rem] 4k2:w-[60rem] 
        mx-auto rounded-lg border border-white text-white 
        bg-gradient-to-r from-[#192320] to-[#5857f4] px-14 py-6 text-lg 
        sm:text-xl md:text-2xl lg:text-xl hd:text-2xl 4k:text-2xl 4k2:text-5xl 4k2:h-[9.5rem] 
        4k2:rounded-3xl mb-8">
          Create your Account
        </button>

        <p className="text-black mb-8 text-base sm:text-lg md:text-xl lg:text-2xl hd:text-3xl 4k:text-4xl 4k2:text-6xl">
          Or
        </p>

        <div className="flex justify-center gap-10 mb-12">
          <div className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 hd:w-36 hd:h-36 4k:w-40 4k:h-40 4k2:w-56 4k2:h-56 bg-white rounded-lg shadow-md hover:shadow-[0_0_30px_10px_rgba(0,255,255,1)] transition-shadow duration-300">
            <img src={Google} alt="Google Logo" className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 hd:w-24 hd:h-24 4k:w-26 4k:h-26 4k2:w-32 4k2:h-32" />
          </div>
          <div className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 hd:w-36 hd:h-36 4k:w-40 4k:h-40 4k2:w-56 4k2:h-56 bg-white rounded-lg shadow-md hover:shadow-[0_0_30px_10px_rgba(0,255,255,1)] transition-shadow duration-300">
            <img src={Apple} alt="Apple Logo" className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 hd:w-24 hd:h-24 4k:w-26 4k:h-26 4k2:w-32 4k2:h-32" />
          </div>
          <div className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 hd:w-36 hd:h-36 4k:w-40 4k:h-40 4k2:w-56 4k2:h-56 bg-white rounded-lg shadow-md hover:shadow-[0_0_30px_10px_rgba(0,255,255,1)] transition-shadow duration-300">
            <img src={Micro} alt="Microsoft Logo" className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 hd:w-24 hd:h-24 4k:w-26 4k:h-26 4k2:w-32 4k2:h-32" />
          </div>
        </div>

        <p className="text-black  text-sm sm:text-base md:text-lg lg:text-xl hd:text-2xl 4k:text-3xl 4k2:text-5xl">
          Already have an Account? <a className="font-playfair text-transparent bg-clip-text 
          bg-gradient-to-l from-[#5857F6] to-[#101052]" href="/signin">Sign In</a>
        </p>

      </div>
    </>
  );
}

export default SignIn;
