import React from 'react'
import { RiStarSFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="md:mt-12 mt-6 flex items-center md:flex-row flex-col-reverse justify-center md:px-12 px-4 py-4">
      <div className="flex flex-col gap-8 md:mt-0 mt-5">
        {/* left */}
        <h1 className="uppercase md:text-4xl sm:text-2xl text-xl font-semibold max-w-xl">
          Hey There, I'm Mahmud Hossain from QuickUI. Let's create something beautiful
        </h1>
        <div className="flex gap-4 sm:text-lg font-medium">
          {/* taglines */}
          <div className="flex items-center">
            <RiStarSFill color="#f9db4b" />
            <span>Designer</span>
          </div>
          <div className="flex items-center">
            <RiStarSFill color="#f9db4b" />
            <span>Developer</span>
          </div>
        </div>
        <div className="flex gap-2">
          {/* buttons */}
          <button className="bg-transparent border-2 border-[#222222] md:font-semibold py-2 md:px-8 px-2 rounded-full">
            Want to discuss?
          </button>
          <button className="bg-[#f9db4b] md:font-semibold py-2  md:px-8 px-4 rounded-full">
            Let's Talk.
          </button>
        </div>
      </div>
      <div>
        {/* right image section */}
        <img className="lg:w-[350px] w-80 object-contain rounded-full" src="/hero.jpg" />
      </div>
    </div>
  );
}

export default Hero
