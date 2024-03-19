import { AiOutlineSend } from "react-icons/ai";

const EducationComponent = () => {
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="education"
      className="relative z-50 py-8 text-white bg-transparent"
    >
      <div className="w-3/4 px-4 mx-auto">
        <h2 className="mb-6 ml-4 text-5xl font-bold text-center md: md:text-left">
          Education
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-8 mx-4 my-2 text-black transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">New York University</h3>
                <p className="mb-2 font-semibold text-md">
                  Courant Institute of Mathematical Sciences
                </p>

                <p className="text-sm font-semibold text-blue-600">
                  Bachelor of Arts, Math and Computer Science
                </p>
                <p className="mb-2 text-xs text-gray-500">
                  August 2022 - May 2026
                </p>
                <p className="mb-2 text-sm">
                  Bachelor of Arts, Math and Computer Science
                </p>
                <p className="text-sm">
                  Activities: Mathematical Finance Group, Paragon Global
                  Investments
                </p>
              </div>
              <div className="p-4 bg-gray-200 rounded-md">
                <h4 className="mt-4 text-xl italic font-semibold md:mt-0">
                  Relevant Coursework
                </h4>
                <ul className="pl-5 mt-2 text-sm list-disc">
                  <li>
                    Differential / Integral Calculus (Singular & Multivariate)
                  </li>
                  <li>Linear Algebra</li>
                  <li>Discrete Mathematics</li>
                  <li>Real Analysis</li>
                  <li>Abstract Algebra</li>
                  <li>Data Structures</li>
                  <li>Macroeconomics</li>
                  <li>Theory of Probability</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 mx-4 my-2 text-black transition-transform duration-300 bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-2xl font-bold">
                  South Brunswick High School
                </h3>
                <p className="text-sm font-semibold text-blue-600">
                  High School Diploma
                </p>
                <p className="mb-2 text-xs text-gray-500">
                  September 2018 to June 2022
                </p>
                <p className="mb-2 text-sm">
                  SAT Score: 1550 (Math: 800, English: 750)
                </p>
                <p className="text-sm">
                  Activities: Junior State of America, Public Health Club, Math
                  Club
                </p>
              </div>
              <div className="p-4 bg-gray-200 rounded-md">
                <h4 className="mt-4 text-xl italic font-semibold md:mt-0">
                  Relevant Coursework
                </h4>
                <ul className="pl-5 mt-2 text-sm list-disc">
                  <li>Advanced Placement Calculus (AB & BC)</li>
                  <li>Advanced Placement Physics C (E&M and Mechanics)</li>
                  <li>Advanced Placement Computer Science</li>
                  <li>Advanced Placement Micro/Macro</li>
                  <li>Advanced Placement Statistics</li>
                  <li>Honors Algebra II</li>
                  <li>Honors Pre-Calculus</li>
                  <li>Advanced Geometry</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other education sections */}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={scrollToFooter}
            className="flex mx-auto px-4 py-2 bg-[#5a48ff] font-bold text-white hover:text-[#5a48ff] rounded-lg hover:bg-[#ddd5ff] transition-colors duration-300 outline outline-2 shadow-xl hover:shadow-2xl outline-white outline-offset-2 hover:animate-pulse"
          >
            <AiOutlineSend className="mt-1 mr-2" />
            Contact Me for Collaboration
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
