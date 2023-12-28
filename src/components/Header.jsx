import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const navigationButtons = [
    {
      text: "Home",
      url: "/home",
    },
    {
      text: "Services",
      url: "/services",
    },
    {
      text: "portfolios",
      url: "/portfolio",
    },
    {
      text: "Testimonials",
      url: "/testimonials",
    },
  ];
  const [view, setView] = useState(true);
  return (
    <div className="flex justify-between items-center md:px-12 px-4 py-4">
      <div>
        {/* logo */}
        <span className="md:text-4xl text-2xl font-bold">MX.</span>
      </div>
      <div className="sm:flex hidden md:gap-3 gap-2">
        {/* menu buttons */}
        {navigationButtons.map((menuItem, idx) => {
          return (
            <a key={idx} href={menuItem.url} className="cursor-pointer font-medium">
              {menuItem.text}
            </a>
          );
        })}
      </div>
      <div>
        {/* CTA */}
        <button className="sm:flex hidden bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">
          Let's Talk.
        </button>
      </div>
      {/* responsive */}

      <div className="sm:hidden block">
        <div
          onClick={() => setView(true)}
          className={`fixed duration-200 transition-all ${
            view ? "invisible" : "visible"
          }  w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}
        ></div>
        <div
          className={`w-[300px] z-[9999] transition-all duration-200 fixed  ${
            view ? "-left-[300px]" : "left-0"
          } top-0 flex justify-center flex-col gap-5 items-center bg-white h-screen py-6 px-8`}
        >
          <div className="flex flex-col gap-3 text-center">
            {/* menu buttons */}
            {navigationButtons.map((menuItem, idx) => {
              return (
                <a key={idx} href={menuItem.url} className="cursor-pointer font-medium">
                  {menuItem.text}
                </a>
              );
            })}
          </div>
          <div>
            {/* CTA */}
            <button className="flex bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">Let's Talk.</button>
          </div>
          <button className="absolute top-1 right-1 bg-[#f9db4b] p-1 text-xl" onClick={() => setView(!view)}>
            <RxCross1 />
          </button>
        </div>
      </div>

      <span className="sm:hidden block text-xl p-1 bg-[#f9db4b] " onClick={() => setView(!view)}>
        <AiOutlineMenuFold />
      </span>
    </div>
  );
};

export default Header;
