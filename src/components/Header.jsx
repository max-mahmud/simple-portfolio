import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
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
  const [view, setView] = useState(false);
  return (
    <div className="flex justify-between items-center md:px-12 px-5 py-4">
      <div>
        {/* logo */}
        <span className="text-4xl font-bold">MX.</span>
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
      {view && (
        <div className={`transition-all duration-300 ease-in-out flex sm:hidden flex-col justify-center items-center gap-5 absolute top-0 left-0 w-[240px] h-[300px] bg-slate-100`}>
          <div className="flex flex-col gap-3">
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
            <button className="flex bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">
              Let's Talk.
            </button>
          </div>
        </div>
      )}
      <span className="sm:hidden block text-xl p-1 bg-yellow-400 text-black" onClick={() => setView(!view)}>
        <AiOutlineMenuFold />
      </span>
    </div>
  );
};

export default Header;
