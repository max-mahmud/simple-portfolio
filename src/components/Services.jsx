import React from "react";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { IoMdAppstore } from "react-icons/io";
import { SiAntdesign } from "react-icons/si";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { FaPython } from "react-icons/fa6";
import { SiSemanticuireact } from "react-icons/si";
const Services = () => {
  const services = [
    {
      icon: <SiAntdesign />,
      text: "UI/UX Designing",
    },
    {
      icon: <IoMdAppstore />,
      text: "App UI/UX",
    },
    {
      icon: <SiSemanticuireact />,
      text: "Frontend Development",
    },
    {
      icon: <FaPython />,
      text: "Backend Development",
    },
    {
      icon: <AiFillCodeSandboxCircle />,
      text: "Product Design",
    },
    {
      icon: <SiAntdesign />,
      text: "UI / UX Designing",
    },
  ];
  return (
    <div className="mb-12 mt-12 sm:px-12 px-4 py-4">
      <h2 className="md:text-4xl  text-2xl font-semibold text-center">Services.</h2>
      <h3 className="md:text-xl font-medium text-center">Here are the services we are providing to you.</h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:mt-12 mt-6">
        {/* services list */}
        {services.map((service, idx) => {
          return (
            <div
              key={idx}
              className=" md:h-[135px] h-[115px] flex items-center gap-4 md:text-xl font-medium bg-[#d9d9d9] p-4 rounded-md"
            >
              {service.icon}
              <span>{service.text}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">View All</button>
      </div>
    </div>
  );
};

export default Services;
