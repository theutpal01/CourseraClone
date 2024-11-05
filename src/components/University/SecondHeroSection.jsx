import React from 'react';

const SecondHeroSection = () => {
    return (
            <div className="absolute m-5 max-w-7xl -bottom-8 translate-y-1/2 left-1/2 -translate-x-1/2 w-full mx-auto">
                <div className="bg-black text-white rounded-lg shadow-md flex">
                    {[
                        { percentage: '76%', description: 'Students are 76% more likely to enroll in a degree program that offers industry micro-credentials', footnote: '[1]' },
                        { percentage: '88%', description: 'Of employers believe that Professional Certificates strengthen a candidate’s job application', footnote: '[2]' },
                        { percentage: '90%', description: 'Of students agree that a Professional Certificate will help them secure a job', footnote: '[3]' },
                    ].map((item, index) => (
                        <div key={index} className="flex-1 relative">
                            <div className="flex items-center justify-between px-16 py-4 my-8">
                                <div className="text-4xl font-bold pr-4">{item.percentage}</div>
                                <div className="flex-grow text-left text-base">{item.description}</div>
                            </div>
                            <div className="absolute bottom-2 right-2 text-sm">{item.footnote}</div>
                            {index < 2 && (
                                <div className="absolute inset-y-0 right-0 w-px bg-gray-600" /> 
                            )}
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default SecondHeroSection;
