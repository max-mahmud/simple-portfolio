import React from 'react'
import { RiStarSFill } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="mt-12 bg-[#222222] text-white flex justify-center gap-4 md:text-lg font-medium uppercase py-8 px-4 overflow-x-scroll">
    <div className="flex gap-4 items-center "><RiStarSFill color="#f9db4b" /><span>Ui/Ux</span></div>
    <div className="flex gap-4 items-center "><RiStarSFill color="#f9db4b" /><span>Development</span></div>
    <div className="flex gap-4 items-center "><RiStarSFill color="#f9db4b" /><span>Product&nbsp;Design</span></div>
    <div className="flex gap-4 items-center "><RiStarSFill color="#f9db4b" /><span>Social&nbsp;Media&nbsp;Design</span></div>
    <div className="flex gap-4 items-center "><RiStarSFill color="#f9db4b" /><span>Developer</span></div>
    <div className="flex gap-4 items-center "><RiStarSFill color="#f9db4b" /><span>NULL</span></div>
</div>
  )
}

export default Banner
