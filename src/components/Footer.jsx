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

  return (
    <div className="mt-12 p-12 bg-[#222222] text-white flex justify-center sm:flex-row flex-col md:gap-32 sm:gap-20 gap-10 items-center">
      <span className="md:text-8xl text-6xl font-bold">MX.</span>
      <div className="grid grid-cols-2 gap-8">
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
