import React from 'react';
import skillscore from "../../assets/home/feature/business/skillscore.png";
import pgLogo from "../../assets/home/feature/business/p&g.png";

function SkillBuildingSection() {
  return (
    <div className="bg-blue-50 py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
      <div className="flex flex-col md:flex-row items-start md:space-x-10 space-y-8 md:space-y-0">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <p className="text-sm text-black font-semibold uppercase tracking-wide">Upskill Your Company</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Build critical skills across teams
          </h1>
          <p className="text-gray-800 text-base sm:text-lg mt-4">
            Adapting to change can be challenging. Provide your employees with<br className="hidden md:block" /> 
            expert-led Generative AI, tech, data, and leadership training for all<br className="hidden md:block" /> 
            levels and roles.
          </p>
          <ul className="text-black mt-6 space-y-2">
            <li className="flex items-start">
              <span className="text-blue-700 mr-2">✓</span>
              Build high-impact tech, data, and business skills
            </li>
            <li className="flex items-start">
              <span className="text-blue-700 mr-2">✓</span>
              Upskill effectively with content made and verified by learning and development experts
            </li>
            <li className="flex items-start">
              <span className="text-blue-700 mr-2">✓</span>
              Cut through content chaos with clear learning paths
            </li>
            <li className="flex items-start">
              <span className="text-blue-700 mr-2">✓</span>
              Foster a learning culture with flexible, engaging content
            </li>
          </ul>
          <a href="#" className="text-blue-600 mt-4 inline-block font-semibold hover:underline">
            Explore skill-based learning →
          </a>
        </div>

        {/* Right Side - Image Placeholder with Actual Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img
              src={skillscore}
              alt="Skill Score and Recommended Content"
              className="w-full h-48 sm:h-64 lg:h-72 rounded-md object-cover"
            />
            <div className="flex justify-around mt-4 w-full space-x-2 sm:space-x-4">
              <div className="w-20 sm:w-24 h-28 sm:h-32 bg-gray-100 rounded-md shadow-md"></div>
              <div className="w-20 sm:w-24 h-28 sm:h-32 bg-gray-100 rounded-md shadow-md"></div>
              <div className="w-20 sm:w-24 h-28 sm:h-32 bg-gray-100 rounded-md shadow-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-12 text-left">
        <p className="text-black text-base sm:text-lg font-medium"> 
          “What I’ve learned through Coursera allows me to better<br className="hidden md:block" /> 
          guide and inform the professional data analysts on my<br className="hidden md:block" />
          team to solve tough business problems and accelerate<br className="hidden md:block" /> 
          the development of our digital capabilities.”
        </p>
        <div className="flex items-center mt-4">
          <img src={pgLogo} alt="P&G Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" /> 
          <div className="ml-3">
            <p className="text-gray-800 font-semibold">Sabine M.</p>
            <p className="text-gray-900 text-sm">Research Fellow, Procter & Gamble</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillBuildingSection;
