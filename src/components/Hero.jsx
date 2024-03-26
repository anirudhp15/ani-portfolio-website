import React from "react";
import { ReactTyped } from "react-typed";
import {
  AiOutlineDownload,
  AiOutlineLinkedin,
  AiOutlineCalendar,
  AiOutlineArrowDown,
} from "react-icons/ai";
import GradientBackground from "./GradientBackground";
import pfp from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/ani_pfp.jpg";

const Hero = () => {
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutMe = () => {
    const aboutMeElement = document.getElementById("about-me");
    if (aboutMeElement) {
      aboutMeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="text-white bg-[#000300] relative h-auto pt-12 pb-20"
    >
      <GradientBackground />
      <div className="z-10 flex flex-col justify-center w-3/4 h-auto mx-auto hero-content">
        <div className="m-0 mb-4 text-3xl text-right md:text-center dongle">
          <p className="py-1 thin">Hi, my name is </p>
          <span className="font-bold text-transparent gradient-text animate-gradient whitespace-nowrap">
            Anirudh Pottammal<span className="text-white">.</span>
          </span>
        </div>
        <div>
          <img
            src={pfp}
            alt="Ani Potts"
            className="object-cover mx-auto transition duration-300 ease-in-out rounded-lg shadow-2xl w-72 h-72 md:w-144 md:h-144 lg:w-[325px] lg:h-[325px] hover:scale-105 z-100 mb-8 mt-4 md:my-8 lg:mt-8 lg:mb-12"
          />
        </div>
        <div className="flex flex-col md:text-left md:mx-auto md:flex-row">
          <p className="pb-2 pr-3 text-4xl font-bold lg:text-5xl whitespace-nowrap dongle">
            I really love
          </p>
          <ReactTyped
            className="pb-2 text-4xl font-bold text-left text-transparent md:text-center lg:text-5xl dongle gradient-text animate-gradient whitespace-nowrap"
            strings={[
              "math",
              "programming",
              "quantitative finance",
              "solving puzzles",
              "probability theory",
              "machine learning",
              "data analysis",
              "stochastic calculus",
            ]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </div>
        <div className="flex flex-row gap-8 mt-4 font-thin md:justify-center lg:mt-6 dongle">
          <button
            onClick={scrollToAboutMe}
            className="flex flex-row cursor-n-resize px-2 py-[6px] text-white bg-[#5a48ff] hover:text-[#5a48ff] rounded-lg hover:bg-[#ddd5ff] shadow-xl lg:shadow-none hover:scale-105 transition duration-300 whitespace-nowrap md:hidden outline outline-offset-4 outline-white hover:animate-pulse"
          >
            <AiOutlineArrowDown className="mr-1 text-2xl animate-bounce" />{" "}
            <span className="mr-1 font-semibold">More About Me</span>
          </button>
          <a
            href="https://www.linkedin.com/in/anirudh-pottammal-01b186216/"
            target="_blank"
            rel="noreferrer"
            className="cursor-n-resize px-6 text-white hover:text-[#5a48ff] rounded-lg hover:bg-[#ddd5ff] hover:scale-105 transition duration-300 items-center justify-center whitespace-nowrap hidden md:flex"
          >
            <AiOutlineLinkedin className="mr-2" /> <span>LinkedIn</span>
          </a>
          <a
            href="/ani.pottammal_nyu_2026_resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="cursor-n-resize px-6 py-2 text-white hover:text-[#5a48ff] rounded-lg hover:bg-[#ddd5ff] hover:scale-105 transition duration-300 items-center justify-center whitespace-nowrap hidden md:flex">
              <AiOutlineDownload className="mr-2" /> <span>My Resume</span>
            </button>
          </a>
          <button
            onClick={scrollToFooter}
            className="cursor-n-resize px-6 py-2 text-white hover:text-[#5a48ff] rounded-lg hover:bg-[#ddd5ff] hover:scale-105 items-center transition duration-300 justify-center whitespace-nowrap hidden md:flex"
          >
            <AiOutlineCalendar className="mr-2" />{" "}
            <span>Tutoring Services</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
