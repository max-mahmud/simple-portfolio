import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";
const Footer = () => {
  const socials = [
    {
      icon: <MdMail color="#222222" />,
      text: "G-Mail",
      link: "https://google.plus.com/abc",
    },
    {
      icon: <FaLinkedin color="#222222" />,
      text: "Linkedin",
      link: "https://google.plus.com/...",
    },
    {
      icon: <FaGithubSquare color="#222222" />,
      text: "Github",
      link: "https://google.plus.com/...",
    },
    {
      icon: <BiLogoFacebookSquare color="#222222" />,
      text: "Facebook",
      link: "https://google.plus.com/...",
    },
  ];

  const details = [
    {
      title: "Who we are",
    },
    {
      title: "Our services",
    },
    {
      title: "Projects",
    },
    {
      title: "Contact",
    },
    {
      title: "Innovation",
    },
  ];
  const useFullLinks = [
    {
      title: "About Us",
    },
    {
      title: "Delivery Information",
    },
    {
      title: "Privacy Policy",
    },
    {
      title: "Blogs",
    },
    {
      title: "Innovation",
    },
  ];

  return (
    <div className="mt-12 sm:p-12 p-6 bg-[#222222] text-white grid lg:grid-cols-3 md:grid-cols-2  md:gap-16 sm:gap-10 gap-6 ">
      <span className="md:text-8xl sm:text-6xl text-4xl font-bold">MX.</span>
      <div className="flex gap-4 sm:mt-0 mt-4 ">
        <div className="">
          {useFullLinks.map((item, idx) => {
            return (
              <div key={idx} className="flex items-center ">
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="">
          {details.map((item, idx) => {
            return (
              <div key={idx} className="flex items-center ">
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:mt-0 mt-4 ">
        {/* socials */}

        {socials.map((social, idx) => {
          return (
            <div key={idx} className="flex items-center gap-4">
              <span className="bg-white text-xl p-2 rounded-full">{social.icon}</span>
              <span>{social.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
