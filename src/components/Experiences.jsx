import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholderLogo from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/ani_pfp.jpg";
import pgi from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/pgi.jpg";
import badhabit from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/badhabit.jpg";
import nyulogo from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/NYU-Logo.jpeg";
import nyudentistry from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/nyudentistry.jpeg";
import nyuit from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/nyuit.png";
import mfg from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/mfg.jpeg";
import GradientBackground2 from "./GradientBackground2";

Modal.setAppElement("#root"); // Properly set the app element for accessibility

const Experiences = () => {
  // Add your experiences array and Carousel components here as before
  const experiences = [
    {
      name: "Mathematical Finance Group",
      logo: mfg,
      roles: [
        {
          title: "Quantitative Trading Analyst",
          duration: "February 2024 - Present",
          description:
            "Engaged in quantitative trading analysis and strategy development in the New York City Metropolitan Area.",
        },
      ],
    },
    {
      name: "Online Mathematics Tutor",
      logo: placeholderLogo,
      roles: [
        {
          title: "Self-Employed Tutor",
          duration: "January 2024 - Present",
          description:
            "Tutored elementary school students in advanced arithmetic, algebra, and calculus in New Jersey.",
        },
      ],
    },
    {
      name: "Our Bad Habit",
      logo: badhabit,
      roles: [
        {
          title: "Data Analytics & Machine Learning Intern",
          duration: "December 2023 - Present",
          description:
            "Designed and engineered a music artist trend-tracking analytics dashboard using Chartmetric’s API & webscraping techniques.",
        },
      ],
    },
    {
      name: "Paragon Global Investments",
      logo: pgi,
      roles: [
        {
          title: "Quantitative Analyst",
          duration: "November 2023 - Present",
          description:
            "Analyzed value investing and quantitative trading strategies for a student-run investment fund with ~30k AUM in the New York City Metropolitan Area.",
        },
      ],
    },
    {
      name: "Student Technology Centers",
      logo: nyulogo,
      roles: [
        {
          title: "Student Technology Assistant",
          duration: "July 2023 - Present",
          description:
            "Provided technical support and assistance at NYU's Student Technology Center in New York.",
        },
      ],
    },
    {
      name: "NYU College of Dentistry",
      logo: nyudentistry,
      roles: [
        {
          title: "Student Computer Technician",
          duration: "May 2023 - August 2023",
          description:
            "Worked as a Computer Technician at NYU College of Dentistry in New York.",
        },
      ],
    },
    {
      name: "NYU IT",
      logo: nyuit,
      roles: [
        {
          title: "Service Desk Support Agent",
          duration: "April 2023 - August 2023",
          description:
            "Offered service desk support and technical assistance at NYU Information Technology's onsite location in Astor Place, New York.",
        },
      ],
    },
  ];

  const CustomDot = ({ onClick, active }) => (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition duration-300 ${
        active ? "bg-white" : "bg-white opacity-50"
      }`}
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "-30px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <CustomDot />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="experience" className="bg-[#000300]">
      <GradientBackground2 />
      <div className="w-5/6 mx-auto my-[200px] h-auto experience-content">
        <h2 className="py-6 text-5xl font-bold text-center text-white md:pr-8 md:text-right">
          Experience
        </h2>
        <Slider {...settings}>
          {experiences.map((company, index) => (
            <div
              key={index}
              className="p-4 my-4 transition duration-300 bg-white rounded-lg shadow-lg experience-card hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {company.name}
              </h3>
              <div className="flex card-content">
                <div className="flex flex-col flex-1 mr-4">
                  {company.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="mt-2">
                      <p className="text-sm font-semibold text-blue-600">
                        {role.title}
                      </p>
                      <p className="text-xs text-gray-500">{role.duration}</p>
                      <div className="mt-8">
                        <p className="text-sm italic font-semibold text-gray-800">
                          Role Description
                        </p>
                        <p className="text-sm text-gray-800">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="self-center flex-shrink-0 mr-2">
                  <img
                    src={company.logo}
                    alt={`${company.name} Logo`}
                    className="object-cover w-24 h-24 transition duration-300 ease-in-out rounded-lg shadow-md hover:shadow-xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Experiences;
