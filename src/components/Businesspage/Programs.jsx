import React, { useState } from 'react';
import generativeai from "../../assets/home/feature/business/generativeai.png";
import techAcademyImage from "../../assets/home/feature/business/Tech-academy.png";
import dataAnalyticsImage from "../../assets/home/feature/business/data-analytics.png";
import leadershipImage from "../../assets/home/feature/business/leadership.png";
import marketingImage from "../../assets/home/feature/business/marketing-academy.png";
import financeImage from "../../assets/home/feature/business/finance.png";
import digitalMarketingImage from "../../assets/home/feature/business/career.png";

const programs = [
  {
    title: 'Generative AI Academy',
    description: 'Improve productivity, reduce risks, and stay current with the latest in generative AI. Courses range from beginner to advanced, taught by leading experts.',
    rating: '5 (Recently added)',
    image: generativeai,
    link: '/generative-ai-academy'
  },
  {
    title: 'Tech Academy',
    description: 'Streamline technology transformation with training for IT, engineering, and security teams.',
    rating: '4.73 (1,020k course reviews)',
    image: techAcademyImage,
    link: '/tech-academy'
  },
  {
    title: 'Data and Analytics Academy',
    description: 'Invest in data, AI, and ML skills to improve decision-making and increase innovation.',
    rating: '4.73 (933k course reviews)',
    image: dataAnalyticsImage,
    link: '/data-analytics-academy'
  },
  {
    title: 'Leadership Academy',
    description: 'Develop employees with the skills to collaborate, communicate, and lead teams.',
    rating: '4.74 (692k course reviews)',
    image: leadershipImage,
    link: '/leadership-academy'
  },
  {
    title: 'Marketing Academy',
    description: 'Supercharge your marketing team with hands-on martech and digital marketing training',
    rating: '4.73 (769k course reviews)',
    image: marketingImage,
    link: '/cybersecurity-academy'
  },
  {
    title: 'Finance Academy',
    description: 'Improve confidence in forecasting budgeting and major business decisions',
    rating: '4.75 (1,086k course reviews)',
    image: financeImage,
    link: '/cloud-computing-academy'
  },
  {
    title: 'Career Academy',
    description: 'Attract and retain your frontline workers with career development benefits',
    rating: '4.58 (671k course reviews)',
    image: digitalMarketingImage,
    link: '/digital-marketing-academy'
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalCards = programs.length;
  const totalSlides = Math.ceil(totalCards / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const startIndex = currentIndex * itemsPerPage;
  const displayedPrograms = programs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-blue-700 p-10 relative min-h-[70vh]">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-white text-sm font-bold">SKILLS FOR JOB ROLES</h2>
        <br />
        <h1 className="text-white text-4xl font-semibold mt-2">Strengthen workplace skills with customized learning pathways</h1>
        <p className="text-white mt-4 text-lg">Discover learning pathways and credentials designed to build high-impact skills that support your<br /> company’s strategic priorities.</p>

        <div className="mt-10 text-white text-2xl">Preview selected programs</div>

        <div className="relative mt-5">
          <div className="flex justify-center overflow-x-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 h-96 flex flex-col"
                >
                  <div className="relative h-40 rounded overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-md font-semibold text-black overflow-hidden text-ellipsis">{program.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 flex-grow overflow-hidden text-ellipsis">{program.description}</p>
                    <div className="text-sm text-black mt-1 flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-2">{program.rating.split(' ')[0]}</span>
                      <span className="text-gray-600 ml-1">({program.rating.split(' ').slice(1).join(' ')})</span>
                    </div>
                    <span className="text-sm text-blue-500 mt-1 inline-block">Learn more →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-[-30px] left-0 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition duration-300`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-[-40px] right-2 flex space-x-4 z-10">
            <span
              onClick={prevSlide}
              className={`cursor-pointer text-white text-xl ${currentIndex === 0 ? 'opacity-50' : ''}`}
            >
              ←
            </span>
            <span
              onClick={nextSlide}
              className={`cursor-pointer text-white text-xl ${currentIndex === totalSlides - 1 ? 'opacity-50' : ''}`}
            >
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
