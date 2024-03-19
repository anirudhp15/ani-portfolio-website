import React from "react";
import comingSoon from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/coming_soon.jpg";
import password from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/password.jpg";
import portfolio from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/portfolio_optimization.jpg";
import option from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/option_pricing.jpg";
import strategy from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/option_strategy.jpg";
import habittracker from "/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/habittracker.jpg";

const Projects = () => {
  const projects = [
    {
      title: "HabitTracker",
      brief: "This is a brief description of HabitTracker.",
      description: "This is a long description of Portfolio Optimization.",
      imageUrl: habittracker,
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Option/Equity Trading Strategy",
      brief: "This is a brief description of Option Trading Strategy.",
      description: "CloudQuant notebook that implements ",
      imageUrl: strategy,
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Portfolio Optimization",
      brief: "This is a brief description of Portfolio Optimization.",
      description:
        "Jupyter notebook that uses the Efficient Frontier to optimize a portfolio of stocks during the COVID pandemic, and uses Sharpe Ratio to determine the best portfolio.",
      imageUrl: portfolio,
      projectUrl:
        "https://github.com/anirudhp15/Portfolio-Optimization/tree/main",
      codeUrl:
        "https://github.com/anirudhp15/Portfolio-Optimization/blob/main/portfolio_optimization.ipynb",
    },
    {
      title: "Option Pricing & Sensitivity Analysis",
      brief:
        "This is a brief description of Option Pricing & Sensitivity Analysis.",
      description:
        "Python program that prices options using the Black-Scholes model and binomial pricing model, and performs sensitivity analysis with respect to changes in the underlying asset, volatility, and time to maturity.",
      imageUrl: option,
      projectUrl:
        "https://github.com/anirudhp15/Options-Pricing-and-Sensitivity-Analysis-Tool/tree/main",
      codeUrl:
        "https://github.com/anirudhp15/Options-Pricing-and-Sensitivity-Analysis-Tool/blob/main/options_pricing.py",
    },
    {
      title: "Password Generator & Validator",
      brief: "This is a brief description of Password Generator & Validator.",
      description:
        "Python program that generates a random password of preferred complexity, and validates password strength to user",
      imageUrl: password,
      projectUrl: "https://github.com/anirudhp15/Password-Generator-Validator",
      codeUrl:
        "https://github.com/anirudhp15/Password-Generator-Validator/blob/main/project/project.py",
    },
    {
      title: "Coming Soon!",
      brief: "This is a brief description of Coming Soon!",
      description: "Will be uploaded in March 2024",
      imageUrl: comingSoon,
      projectUrl: "#",
      codeUrl: "#",
    },
    // Add more projects here
  ];

  return (
    <div id="projects" className="relative z-10 py-12 mx-auto bg-transparent">
      <h2 className="w-3/4 py-8 m-auto text-5xl font-bold text-center text-white dongle lg:text-left">
        Projects
      </h2>
      <div className="grid w-5/6 grid-cols-1 gap-4 m-auto lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-1 m-4 overflow-hidden transition duration-300 ease-in-out bg-white rounded-lg shadow-lg lg:m-0 hover:shadow-2xl hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.brief}</p>
              <div className="mt-4 mb-4">
                <a
                  href={project.projectUrl}
                  role="button"
                  className="px-4 py-[8px] font-bold mr-4 text-white bg-[#5a48ff] hover:text-[#5a48ff] rounded-lg hover:bg-[#ddd5ff] shadow-md hover:shadow-xl hover:scale-105 transition duration-300 whitespace-nowrap"
                >
                  View Details
                </a>
                <a
                  href={project.codeUrl}
                  role="button"
                  className="px-4 py-[8px] font-bold text-white bg-[#5a48ff] hover:text-[#5a48ff] rounded-lg hover:bg-[#ddd5ff] shadow-md hover:shadow-xl hover:scale-105 transition duration-300 whitespace-nowrap"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
