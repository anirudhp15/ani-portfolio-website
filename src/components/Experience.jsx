import React from 'react';
import placeholderLogo from '/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/ani_pfp.jpg'; // Add the path to your placeholder logo image
import pgi from '/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/pgi.jpg'; // Add the path to your company logo image
import badhabit from '/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/badhabit.jpg'; // Add the path to your company logo image
import nyulogo from '/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/NYU-Logo.jpeg'; // Add the path to your company logo image
import mfg from '/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/mfg.jpeg'; // Add the path to your company logo image

const Experience = () => {
    const companies = [
        // Your companies data
        {
            name: "Mathematical Finance Group",
            logo: mfg,
            roles: [
                {
                    title: "Quantitative Trading Analyst",
                    duration: "Feb 2024 - Present",
                    description: "Engaged in quantitative trading analysis and strategy development in the New York City Metropolitan Area."
                }
            ]
        },
        {
            name: "Mathematics Tutor",
            logo: placeholderLogo,
            roles: [
                {
                    title: "Self-Employed Tutor",
                    duration: "Jan 2024 - Present",
                    description: "Tutored elementary school students in advanced arithmetic, algebra, and calculus in New Jersey."
                }
            ]
        },
        {
            name: "Our Bad Habit",
            logo: badhabit,
            roles: [
                {
                    title: "Data Analytics & Machine Learning Intern",
                    duration: "Dec 2023 - Present",
                    description: "Designed and engineered a music artist trend-tracking analytics dashboard using Chartmetric’s API & webscraping techniques for LA based artist distribution company."
                }
            ]
        },
        {
            name: "Paragon Global Investments",
            logo: pgi,
            roles: [
                {
                    title: "Quantitative Analyst",
                    duration: "Nov 2023 - Present",
                    description: "Analyzed value investing and quantitative trading strategies for a student-run investment fund with ~30k AUM in the New York City Metropolitan Area."
                }
            ]
        },
        {
            name: "Student Technology Centers",
            logo: nyulogo,
            roles: [
                {
                    title: "Student Technology Assistant",
                    duration: "Jul 2023 - Present",
                    description: "Provided technical support and assistance at NYU's Student Technology Center in New York."
                }
            ]
        },
        {
            name: "College of Dentistry",
            logo: nyulogo,
            roles: [
                {
                    title: "Student Computer Technician",
                    duration: "May 2023 - Aug 2023",
                    description: "Worked as a Computer Technician at NYU College of Dentistry in New York."
                }
            ]
        },
        {
            name: "Information Technology",
            logo: nyulogo,
            roles: [
                {
                    title: "Service Desk Support Agent",
                    duration: "Apr 2023 - Aug 2023",
                    description: "Offered service desk support and technical assistance at NYU IT in New York."
                }
            ]
        }
    ];

    return (
        <div className="py-8 bg-[#000300] z-1 pb-[100px]">
            <div className="max-w-4xl px-4 mx-auto">
                <h2 className="mb-6 text-5xl font-bold text-center text-white lg:ml-8 lg:text-left dongle">Experience</h2>
                <div className="relative">
                    <div className="absolute hidden w-[4px] bg-[#c3b5ff] left-2 lg:block" style={{ top: '120px', bottom: '10px', left: '53px'}}></div>
                    {companies.map((company, index) => (
                        <div key={index} className="relative mt-6 lg:mt-12">
                            <div className="absolute hidden w-6 h-6 transform rotate-45 rounded-sm lg:shadow-2xl bg-gradient-to-br from-[#8d83ff] to-[#5a48ff] lg:block" style={{left: '43px', top: '120px'}}></div>
                            <div className="flex flex-col items-center lg:flex-row lg:items-center">
                                <div className="flex items-center flex-shrink-0 space-x-4">
                                    <div className="lg:-ml-6">
                                        <img src={company.logo} alt={`${company.name} Logo`} className="object-cover object-center w-12 h-12 border-2 border-white rounded-lg" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white dongle lg:p-10 whitespace-nowrap">{company.name}</h3>
                                </div>
                                <div className="w-full px-8 lg:pl-4 md:px-2">
                                    {company.roles.map((role, roleIndex) => (
                                        <div key={roleIndex} className="p-4 mt-4 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-2xl">
                                            <p className="text-lg font-semibold">{role.title}</p>
                                            <p className="text-gray-600">{role.duration}</p>
                                            <p>{role.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
