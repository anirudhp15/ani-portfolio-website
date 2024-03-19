import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineInfoCircle,
  AiOutlineMessage,
} from "react-icons/ai";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:anirudhpottammal@nyu.edu?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      message
    )}%0D%0A%0D%0AFrom:%20${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
    setEmail(""); // Clear the input fields after submission
    setSubject("");
    setMessage("");
  };

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const [isChildAccordionOpen, setIsChildAccordionOpen] = useState(false);

  const toggleChildAccordion = () => {
    setIsChildAccordionOpen(!isChildAccordionOpen);
  };

  return (
    <footer
      id="footer"
      className="py-8 text-white bg-gradient-to-r from-[#5a48ff] to-[#8d83ff] z-10 relative"
    >
      <div className="max-w-3xl px-4 mx-auto">
        <h2 className="mb-4 text-2xl font-bold text-center">Contact Me!</h2>
        <div className="mt-8 rounded-lg outline outline-white outline-offset-2">
          <button
            onClick={toggleAccordion}
            className="flex items-center justify-between w-full px-4 py-2 text-left text-white bg-[#5a48ff] rounded-lg hover:bg-[#8d83ff] transition-colors duration-300"
          >
            <span className="flex flex-row font-bold">
              Tutoring Services <AiOutlineInfoCircle className="mx-2 mt-1" />
            </span>
            <span>{isAccordionOpen ? "−" : "+"}</span>
          </button>
          {isAccordionOpen && (
            <div className="p-4 mt-2 text-black bg-white rounded-lg">
              <h3 className="font-bold">
                Below is a detailed overview of the topics I offer:
              </h3>
              <button
                onClick={toggleChildAccordion}
                className="flex items-center justify-between w-full px-4 py-2 my-4 text-left text-black bg-[#ddd] rounded-lg hover:bg-[#ccc] transition-colors duration-300"
              >
                <span className="flex flex-row font-bold">
                  Elementary School Mathematics:{" "}
                  <AiOutlineInfoCircle className="mx-2 mt-1" />
                </span>
                <span>{isChildAccordionOpen ? "−" : "+"}</span>
              </button>
              {isChildAccordionOpen && (
                <ul className="p-2 pl-5 font-normal list-disc bg-gray-100 rounded-sm">
                  <li>
                    <span className="font-semibold">Basic Arithmetic:</span>{" "}
                    Addition, Subtraction, Multiplication, Division
                  </li>
                  <li>
                    <span className="font-semibold">
                      Fractions and Decimals
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Basic Geometry:</span>{" "}
                    Shapes and their properties
                  </li>
                  <li>
                    <span className="font-semibold">
                      Introduction to Measurements:
                    </span>{" "}
                    Length, Volume, Weight
                  </li>
                  <li>
                    <span className="font-semibold">Time and Money</span>
                  </li>
                </ul>
              )}
              <button
                onClick={toggleChildAccordion}
                className="flex items-center justify-between w-full px-4 py-2 my-4 text-left text-black bg-[#ddd] rounded-lg hover:bg-[#ccc] transition-colors duration-300"
              >
                <span className="flex flex-row font-bold">
                  Middle School Mathematics:{" "}
                  <AiOutlineInfoCircle className="mx-2 mt-1" />
                </span>
                <span>{isChildAccordionOpen ? "−" : "+"}</span>
              </button>
              {isChildAccordionOpen && (
                <ul className="p-2 pl-5 font-normal list-disc bg-gray-100 rounded-sm">
                  <li>
                    <span className="font-semibold">Pre-Algebra:</span>{" "}
                    Fundamental Concepts, Equations, and Inequalities
                  </li>
                  <li>
                    <span className="font-semibold">Geometry:</span> Perimeter,
                    Area, Volume, Angles
                  </li>
                  <li>
                    <span className="font-semibold">
                      Ratios, Proportions, and Percentages
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Basic Statistics:</span>{" "}
                    Mean, Median, Mode, Range
                  </li>
                  <li>
                    <span className="font-semibold">
                      Graphing and Introduction to the Coordinate Plane
                    </span>
                  </li>
                </ul>
              )}
              <button
                onClick={toggleChildAccordion}
                className="flex items-center justify-between w-full px-4 py-2 my-4 text-left text-black bg-[#ddd] rounded-lg hover:bg-[#ccc] transition-colors duration-300"
              >
                <span className="flex flex-row font-bold">
                  High School Mathematics:{" "}
                  <AiOutlineInfoCircle className="mx-2 mt-1" />
                </span>
                <span>{isChildAccordionOpen ? "−" : "+"}</span>
              </button>
              {isChildAccordionOpen && (
                <ul className="p-2 pl-5 font-normal list-disc bg-gray-100 rounded-sm">
                  <li>
                    <span className="font-semibold">Algebra I & II:</span>{" "}
                    Linear Equations, Quadratics, Polynomials, Rational
                    Expressions, Exponential and Logarithmic Functions
                  </li>
                  <li>
                    <span className="font-semibold">Geometry:</span> Proof,
                    Congruence, Similarity, Trigonometry, Circles, and Volume
                  </li>
                  <li>
                    <span className="font-semibold">Trigonometry:</span> Ratios,
                    Functions, Graphs, and Identities
                  </li>
                  <li>
                    <span className="font-semibold">Pre-Calculus:</span>{" "}
                    Functions, Series, Limits, and Intro to Calculus Concepts
                  </li>
                  <li>
                    <span className="font-semibold">Calculus:</span>{" "}
                    Derivatives, Integrals, and their Applications
                  </li>
                  <li>
                    <span className="font-semibold">Discrete Mathematics:</span>{" "}
                    Logic, Set Theory, Combinatorics, Graph Theory, and
                    Algorithms
                  </li>
                  <li>
                    <span className="font-semibold">Probability Theory:</span>{" "}
                    Axioms, Distributions, Expected Value, Combinatoric
                    Applications, and Conditional Probability
                  </li>
                </ul>
              )}
              <p className="mt-2 text-center">
                <span className="font-bold">Note: </span>I provide original
                worksheets in LaTeX as practice assignments or homework for my
                teachings.
              </p>
              <h3 className="mt-8 font-bold text-center">
                Methods of Communication:
              </h3>
              <p className="text-center">
                Zoom, Google Meet, or In-person (Manhattan/Brooklyn)
              </p>
              <p className="mt-8 font-semibold text-center">
                Feel free to reach out via email at anirudhpottammal@nyu.edu to
                discuss scheduling and rates.
              </p>
            </div>
          )}
        </div>
        <p className="my-6 text-center">
          Feel free to reach out for collaborations or inquiries regarding my
          tutoring services.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 text-black rounded-lg md:w-1/2"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2 mb-4 text-black rounded-lg md:w-1/2"
            required
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 mb-4 text-black rounded-lg md:w-1/2"
            required
          />
          <button
            type="submit"
            className="flex items-center px-6 py-2 bg-[#5a48ff] font-bold text-white hover:text-[#5a48ff] rounded-lg hover:bg-[#ddd5ff] transition-colors duration-300 outline outline-2 shadow-xl hover:shadow-2xl outline-white outline-offset-2 hover:animate-pulse"
          >
            <AiOutlineMessage className="mr-2" />
            Start the Convo!
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <a
          href="https://www.linkedin.com/in/anirudh-pottammal-01b186216/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-3xl hover:text-[#0e76a8] transition duration-200" />
        </a>
        <a
          href="https://github.com/anirudhp15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-3xl hover:text-[#333] transition duration-200" />
        </a>
        <a
          href="https://www.instagram.com/anirxdhp/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="text-3xl hover:text-[#ff71a0] transition duration-200" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCOgvBdaN7lrWmgbf_wD8zyw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube className="text-3xl hover:text-[#FF0000] transition duration-200" />
        </a>
      </div>
      <p className="mt-8 text-center">
        © {new Date().getFullYear()} Anirudh Pottammal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
