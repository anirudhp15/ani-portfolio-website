import React from 'react';
import myImage from '/Users/anipotts/Desktop/portfolio_website/portfolio-website/src/pics/ani_city.jpg';
import { AiOutlineStock, AiOutlineCalculator, AiOutlineCode} from 'react-icons/ai';
import { FaLaptopCode, FaBrain, FaDatabase, FaSquareRootAlt } from 'react-icons/fa';
import { MdBarChart, MdMusicNote, MdOutlineCastForEducation } from 'react-icons/md';

const Introduction = () => {
    return (
        <div id='about-me' className="px-4 py-12 lg:py-[50px] bg-[#000300] h-auto">
            <div className="relative z-10 flex flex-col items-center w-5/6 py-12 m-auto lg:flex-row">
                <div className="flex justify-center lg:w-1/2">
                    <img src={myImage} alt="Ani Potts" className="object-cover mx-auto transition duration-300 ease-in-out rounded-lg shadow-2xl shadow-indigo-500/50 md:w-144 md:h-144 lg:w-[400px] lg:h-[400px] w-72 h-72 hover:scale-105 z-100 lg:mt-[100px]"/>
                </div>
                <div className="text-center lg:w-1/2 lg:text-left">
                    <h2 className="pt-12 pb-4 text-4xl font-semibold text-white dongle lg:text-5xl">About Me</h2>
                    <p className="pb-8 text-xl prose text-white lg:pb-4 font-extralight dongle line-spacing">
                        <div className="flex justify-center gap-8 p-4 text-3xl text-white">
                            <AiOutlineCalculator/>
                            <AiOutlineCode/>
                        </div>
                        I'm a sophomore studying <span className="font-bold text-transparent gradient-text animate-gradient">math and computer science</span> at <span className="font-bold text-transparent gradient-text animate-gradient">NYU</span>, and I will almost surely be learning math for the rest of my life.
                    </p>
                    <p className="pb-8 text-xl prose text-white lg:pb-4 font-extralight dongle line-spacing">
                        <div className="flex justify-center gap-8 p-4 text-3xl text-white">
                            <AiOutlineStock/>
                            <FaBrain/>
                            <FaDatabase/>
                        </div>
                        I'm passionate about <span className="font-bold text-transparent gradient-text animate-gradient">mathematical finance</span>, <span className="font-bold text-transparent gradient-text animate-gradient">machine learning</span>, and <span className="font-bold text-transparent gradient-text animate-gradient">data analysis</span>. 
                        Currently, I'm exploring these fields in two separate collegiate quantitative trading clubs as an analyst.
                    </p>
                    <p className="pb-8 text-xl prose text-white lg:pb-4 font-extralight dongle line-spacing">
                        <div className="flex justify-center gap-8 p-4 text-3xl text-white">
                            <FaLaptopCode/>
                            <MdBarChart/>
                            <MdMusicNote/>
                        </div>
                        I also have over a year of experience working with technology at <span className="font-bold text-transparent gradient-text animate-gradient">NYU IT</span> and <span className="font-bold text-transparent gradient-text animate-gradient">NYU College of Dentistry</span>, and I'm currently working on music data analytics for <span className='font-bold text-transparent gradient-text animate-gradient'>Our Bad Habit</span>.
                    </p>
                    <p className="pb-8 text-xl prose text-white lg:pb-4 font-extralight dongle line-spacing">
                        <div className="flex justify-center gap-8 p-4 text-3xl text-white">
                            <MdOutlineCastForEducation/>
                            <FaSquareRootAlt/>
                        </div>
                        In my free time I am a <span className="font-bold text-transparent gradient-text animate-gradient">math tutor</span> for elementary, middle, and high school students, and I help them get a jump start on 
                        advanced topics, such as <span className="font-bold text-transparent gradient-text animate-gradient">algebra</span>, <span className="font-bold text-transparent gradient-text animate-gradient">geometry</span>, and <span className="font-bold text-transparent gradient-text animate-gradient">calculus</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
