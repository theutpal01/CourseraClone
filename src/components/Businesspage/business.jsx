import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import girl from "../../assets/home/feature/business/girl.png";
import courseraLogo from "../../assets/home/feature/business/courseraforbusiness.png";
import hubspotLogo from "../../assets/home/feature/business/hubspotLogo.png";
import sapLogo from "../../assets/home/feature/business/sap.png";
import ibmLogo from "../../assets/home/feature/business/ibm.png";
import nvidiaLogo from "../../assets/home/feature/business/nvidia.png";
import ciscoLogo from "../../assets/home/feature/business/cisco.png";
import toshibaLogo from "../../assets/home/feature/business/toshiba.png";
import SkillBuildingSection from './SkillBuildingSection';
import HighQualityContent from './HighQualityContent';
import SearchCatalog from './SearchCatalog';
import Programs from './programs';
import TrainingProgramsPage from './TrainingProgramsPage';
import EmployeeEngagement from './EmployeeEngagement';
import LeadYourCompany from './LeadYourCompany';
import InfoSection from './InfoSection';

const CompanyLogos = () => (
  <div className="max-w-5xl mx-auto my-12 px-4 sm:px-6 lg:px-12 flex flex-wrap items-center">
    <div className="flex-1 mb-6 sm:mb-0">
      <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
        <img src={hubspotLogo} alt="HubSpot" className="h-16 w-auto" />
        <img src={sapLogo} alt="SAP" className="h-16 w-auto" />
        <img src={ibmLogo} alt="IBM" className="h-16 w-auto" />
        <img src={nvidiaLogo} alt="NVIDIA" className="h-16 w-auto" />
        <img src={ciscoLogo} alt="Cisco" className="h-16 w-auto" />
        <img src={toshibaLogo} alt="Toshiba" className="h-16 w-auto" />
      </div>
    </div>
    <div className="flex-1 text-center sm:text-left pl-0 sm:pl-12">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
        Join over 3,700 companies using Coursera to develop talent
      </h2>
    </div>
  </div>
);

const Business = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 sm:px-12 py-6 sm:py-8 sm:h-36 flex flex-col sm:flex-row justify-between items-center w-full z-10 fixed top-0">
        <div className="flex items-center w-full sm:w-auto">
          <img src={courseraLogo} alt="Coursera for Business" className="h-5 sm:h-6 mr-24" />
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row items-center ml-0 sm:ml-4">
            <div className="relative">
              <button onClick={() => handleDropdown("whyCoursera")} className="flex items-center hover:text-blue-600 mr-5">
                Why Coursera {dropdownOpen === "whyCoursera" ? <AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" /> : <AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />}
              </button>
              {dropdownOpen === "whyCoursera" && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 left-[-25px]">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Mission</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Success Stories</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Leadership</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => handleDropdown("solutions")} className="flex items-center hover:text-blue-600 mr-5">
                Solutions {dropdownOpen === "solutions" ? <AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" /> : <AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />}
              </button>
              {dropdownOpen === "solutions" && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">For Corporates</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">For Governments</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">For Education</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => handleDropdown("resources")} className="flex items-center hover:text-blue-600 mr-5">
                Resources {dropdownOpen === "resources" ? <AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" /> : <AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />}
              </button>
              {dropdownOpen === "resources" && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Case Studies</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Webinars</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Reports</a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-blue-600 mr-5">For Teams</a>
            <a href="#" className="hover:text-blue-600 mr-5">Compare Plans</a>
          </div>
        </div>
        <button className="bg-blue-700 text-white px-6 py-2 rounded text-lg font-semibold mt-4 sm:mt-0">Contact Sales</button>
      </nav>

      {/* Main Image Section */}
      <div className="flex flex-col sm:flex-row items-center bg-blue-50 pt-12 px-6 sm:px-10">
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl sm:text-7xl font-semibold font-sans text-gray-800 mb-14">
            Empower your talent<br />to drive your business forward
          </h1>
          <ul className="pl-5 text-lg text-black space-y-2">
            <li className="flex items-center">
              <FaCheck className="text-blue-700 mr-2" />
              Train teams with respected industry experts and top universities
            </li>
            <li className="flex items-center">
              <FaCheck className="text-blue-700 mr-2" />
              Enrich learning solutions with tailored paths and AI tools
            </li>
            <li className="flex items-center">
              <FaCheck className="text-blue-700 mr-2" />
              Boost employee engagement with globally recognized credentials
            </li>
            <li className="flex items-center">
              <FaCheck className="text-blue-700 mr-2" />
              Customize scalable learning solutions efficiently
            </li>
          </ul>
          <button className="bg-blue-600 text-white mt-8 px-8 py-4 font-semibold rounded w-40">Contact us</button>
          <p className="mt-4 text-gray-600">Upskilling fewer than 125 employees? <a href="#" className="text-blue-600 underline">Get Coursera for Teams</a></p>
        </div>
        <div className="flex-1 flex justify-center mt-10 sm:mt-0">
          <img src={girl} alt="Empower your talent" className="rounded-lg shadow-lg object-cover h-80 sm:h-full w-auto" />
        </div>
      </div>

      {/* Black Section */}
      <div className="max-w-7xl rounded mx-auto flex flex-col sm:flex-row items-center justify-center bg-black text-white py-8 -mt-22 space-y-6 sm:space-y-0">
  <div className="flex flex-col items-center text-center space-y-1 mx-4">
    <h2 className="text-4xl font-bold">24%</h2>
    <p className="text-white">Reduction in training costs</p>
    <span className="text-blue-400 mt-2">[1]</span>
  </div>
  <div className="hidden sm:block w-px h-16 bg-gray-600 mx-4"></div>
  <div className="flex flex-col items-center text-center space-y-1 mx-4">
    <h2 className="text-4xl font-bold">38%</h2>
    <p className="text-white">Higher retention rates</p>
    <span className="text-blue-400 mt-4">[2]</span>
  </div>
  <div className="hidden sm:block w-px h-16 bg-gray-600 mx-4"></div>
  <div className="flex flex-col items-center text-center space-y-1 mx-4">
    <h2 className="text-4xl font-bold">25%</h2>
    <p className="text-white">Improvement in performance</p>
    <span className="text-blue-400 mt-4">[3]</span>
  </div>
</div>


      {/* Company Logos Section */}
      <CompanyLogos />

      <SkillBuildingSection />
      <HighQualityContent />
      <SearchCatalog />
      <Programs />
      <TrainingProgramsPage />
      <EmployeeEngagement />
      <LeadYourCompany />
      <InfoSection />
    </div>
  );
};

export default Business;
