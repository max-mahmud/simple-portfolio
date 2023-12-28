import React from 'react'
import { CgStark } from "react-icons/cg";
import { IoLogoCodepen } from "react-icons/io5";
import { SiVorondesign } from "react-icons/si";
import { RiChatNewFill } from "react-icons/ri";
import { RiCodeSSlashLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
const Portfolio = () => {
  const portfolios = [
    {
      icon: <IoLogoCodepen className="text-3xl" />,
      title: "UI / UX Designing",
      text: "UI design primarily focuses on the look and feel of a product. It involves creating visually engaging interfaces, including elements like colors, typography, icons, buttons, and layout design.",
    },
    {
      icon: <SiVorondesign className="text-3xl" />,
      title: "Web Development",
      text: "Web development refers to the process of building and maintaining websites or web applications for the internet. It involves various aspects, including frontend development, backend development, and full-stack development.",
    },
    {
      icon: <RiCodeSSlashLine className="text-3xl" />,
      title: "Frontend Development",
      text: "This focuses on the part of the website or application that users interact with directly. It involves using languages like HTML, CSS, and JavaScript to create the layout, design, and interactivity of the site.",
    },
    {
      icon: <FaPython className="text-3xl" />,
      title: "Backend Development",
      text: "When building a backend for an application using the MERN stack, you'll be using JavaScript throughout the development process. The MERN stack consists of MongoDB, Express.js ( React, and Node.js",
    },
    {
      icon: <RiCodeSSlashLine className="text-3xl" />,
      title: "Full-Stack Development",
      text: "Full-stack developers work on both the frontend and backend aspects of a website or application. They have skills in both areas and can handle the entire development process, from designing user interfaces to managing databases and server configurations.",
    },
  ];

  return (
    <div className="mb-12 sm:px-12 px-4 py-4">
      <h2 className="md:text-4xl text-2xl font-semibold text-center">Portfolios.</h2>
      <h3 className="md:text-xl font-medium text-center">
        Click on the cards to see my portfolios of related category.
      </h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 sm:mt-12 mt-6">
        {/* services list */}
        {portfolios.map((portfolio, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col gap-6 md:text-xl font-medium border-2 border-[#222222] p-4 rounded-md text-left"
            >
              <span>{portfolio.icon}</span>
              <span className="md:text-2xl text-lg">{portfolio.title}</span>
              <span className="font-light">{portfolio.text}</span>
            </div>
          );
        })}

        {/* let's talk component */}
        <div className="flex flex-col justify-center gap-6 md:text-xl font-medium border-2 border-[#222222] p-4 rounded-md text-left">
          <span className="md:text-2xl text-lg">Want your stunning designs</span>
          <span className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto
          </span>
          <button className="bg-[#222222] text-white md:py-2 py-1 md:px-8 px-4 rounded-full">
            Let's Talk.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio
