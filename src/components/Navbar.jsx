import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineSolution,
} from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const experienceElement = document.getElementById("experience");
    if (experienceElement) {
      experienceElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutMe = () => {
    const aboutMeElement = document.getElementById("about-me");
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-[100] flex items-center justify-between h-24 px-8 text-white bg-transparent backdrop-blur-xl">
      <div className="p-2 logo-container">
        <button
          onClick={scrollToHome}
          className="text-4xl font-thin transition-colors ease-out duration-100 text-[#ddd5ff] hover:text-[#5a48ff] hover:font-bold logo-ap"
        >
          <span className="logo-a">A</span>
          <span className="hidden ani-part">n</span>
          <span className="hidden ani-part1">i</span>
          <span className="logo-p">P</span>
          <span className="hidden potts-part">o</span>
          <span className="hidden potts-part1">t</span>
          <span className="hidden potts-part2">t</span>
          <span className="hidden potts-part3">s</span>
        </button>
      </div>
      <ul className="hidden gap-4 text-sm font-bold lg:text-md md:flex">
        <button
          onClick={scrollToHome}
          className="cursor-pointer px-4 py-3 text-[#ddd5ff] transition duration-200 ease-in-out transform hover:scale-105 rounded-lg hover:bg-[#ddd5ff] hover:text-[#5a48ff] flex items-center space-x-2 hover:shadow-lg"
        >
          <AiOutlineHome />
          <span>Home</span>
        </button>
        <button
          onClick={scrollToAboutMe}
          className="cursor-pointer px-4 py-3 text-[#ddd5ff] transition duration-200 ease-in-out transform hover:scale-105 rounded-lg hover:bg-[#ddd5ff] hover:text-[#5a48ff] flex items-center space-x-2 hover:shadow-lg"
        >
          <AiOutlineUser />
          <span>About</span>
        </button>
        <button
          onClick={scrollToExperience}
          className="cursor-pointer px-4 py-3 text-[#ddd5ff] transition duration-200 ease-in-out transform hover:scale-105 rounded-lg hover:bg-[#ddd5ff] hover:text-[#5a48ff] flex items-center space-x-2 hover:shadow-lg"
        >
          <AiOutlineSolution />
          <span>Experience</span>
        </button>
        <button
          onClick={scrollToProjects}
          className="cursor-pointer px-4 py-3 text-[#ddd5ff] transition duration-200 ease-in-out transform hover:scale-105 rounded-lg hover:bg-[#ddd5ff] hover:text-[#5a48ff] flex items-center space-x-2 hover:shadow-lg"
        >
          <AiOutlineProject />
          <span>Projects</span>
        </button>
      </ul>

      <div
        onClick={handleShowNav}
        className="block md:hidden text-[#c3b5ff] hover:text-[#5a48ff] transition duration-200"
      >
        {!showNav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>

      <div
        className={`fixed left-0 top-0 w-[60%] h-[100vh] md:hidden border-r border-r-gray-900 bg-black ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out shadow-lg`}
      >
        <div className="pl-8 logo-container2">
          <div className="text-4xl font-thin transition-colors ease-out text-[#ddd5ff] hover:text-[#5a48ff] hover:font-bold logo-ap">
            <span className="logo-a">A</span>
            <span className="hidden ani-part">n</span>
            <span className="hidden ani-part1">i</span>
            <span className="logo-p">P</span>
            <span className="hidden potts-part">o</span>
            <span className="hidden potts-part1">t</span>
            <span className="hidden potts-part2">t</span>
            <span className="hidden potts-part3">s</span>
          </div>
        </div>
        <ul className="p-4 font-bold uppercase">
          <button
            onClick={scrollToHome}
            className="flex items-center w-full p-4 border-b border-gray-600 nav-item"
          >
            <AiOutlineHome className="mr-2 text-[#c3b5ff]" />
            <span className="text-transparent gradient-text animate-gradient">
              Home
            </span>
          </button>
          <button
            onClick={scrollToAboutMe}
            className="flex items-center w-full p-4 border-b border-gray-600 nav-item"
          >
            <AiOutlineUser className="mr-2 text-[#c3b5ff]" />
            <span className="text-transparent gradient-text animate-gradient">
              About Me
            </span>
          </button>
          <button
            onClick={scrollToExperience}
            className="flex items-center w-full p-4 border-b border-gray-600 nav-item"
          >
            <AiOutlineSolution className="mr-2 text-[#c3b5ff]" />
            <span className="text-transparent gradient-text animate-gradient">
              Experience
            </span>
          </button>
          <button
            onClick={scrollToProjects}
            className="flex items-center w-full p-4 border-b border-gray-600 nav-item"
          >
            <AiOutlineProject className="mr-2 text-[#c3b5ff]" />
            <span className="text-transparent gradient-text animate-gradient">
              Projects
            </span>
          </button>
          <button
            onClick={scrollToFooter}
            className="flex items-center w-full p-4 nav-item"
          >
            <AiOutlineMail className="mr-2 text-[#c3b5ff]" />
            <span className="text-transparent gradient-text animate-gradient">
              Contact
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
