import React from 'react';

const infoCards = [
  {
    title: 'The Global Skills Report 2024',
    description: 'Identify critical skills and drive career outcomes for a competitive workforce.',
    linkText: 'Get report',
    link: '/global-skills-report',
  },
  {
    title: 'The Job Skills of 2024 Report',
    description: 'Uncover the fastest-growing skills driving employee productivity.',
    linkText: 'Get report',
    link: '/job-skills-report',
  },
  {
    title: 'WEBINAR: The Fastest-Growing Job Skills of 2024',
    description: 'Explore the key trends shaping the evolving skills landscape.',
    linkText: 'Watch now',
    link: '/webinar-job-skills-2024',
  },
];

const CallToAction = () => (
  <div className="flex justify-center py-8 px-4 sm:px-6 lg:px-8">
    <div className="bg-black text-white py-8 px-4 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-screen-lg text-center" style={{ minHeight: '50vh', margin: '0 2rem' }}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4">
        Find a plan that's right for you
      </h2>
      <p className="text-lg sm:text-xl mb-6">
        Connect with our team to learn how you can prepare your business for rapid change.
      </p>
      <p className="mb-12" /> {/* Extra space for pushing buttons down */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <button className="bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded text-base sm:text-lg">
          Contact us
        </button>
        <button className="bg-transparent border border-white text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded text-base sm:text-lg hover:bg-white hover:text-blue-600 hover:underline">
          Compare plans
        </button>
      </div>
      <p className="text-gray-400 text-xs sm:text-sm">
        Upskilling fewer than 125 employees? <a href="/coursera-teams" className="text-blue-500 underline">Get Coursera for Teams</a>
      </p>
    </div>
  </div>
);

const CardSection = () => (
  <div className="py-10 mt-4 px-4 sm:px-6 lg:px-8">
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {infoCards.map((card, index) => (
        <div key={index} className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-base sm:text-lg font-semibold mb-2">{card.title}</h3>
          <p className="text-sm sm:text-base mb-4">{card.description}</p>
          <a href={card.link} className="text-blue-400 hover:text-blue-300 text-sm">
            {card.linkText} →
          </a>
        </div>
      ))}
    </div>
  </div>
);

const InfoPage = () => (
  <div>
    <CallToAction />
    <CardSection />
  </div>
);

export default InfoPage;
