import React from 'react';
import SecondHeroSection from "./SecondHeroSection";
import Button from '../../components/UI/Button';
import codingimage from '../../assets/university/hero.jpg';

const HeroSection = () => {
    return (
        <div className="relative flex bg-blue-50 px-5 lg:px-16 xl:px-28 py-28 items-center">
            <div className="w-1/2 flex flex-col justify-center">
                <h1 
                    className="text-7xl font-semibold mb-6 leading-none tracking-tighter" 
                    style={{ color: '#373A3C' }}
                >
                    <span className="block">Strengthen</span>
                    <span className="block">employability to</span>
                    <span className="block">attract more students</span>
                </h1>
                <p 
                    className="text-xl mb-10" 
                    style={{ color: '#373A3C' }}
                >
                    Equip students with the most in-demand skills and prepare them for job success.
                </p>
                <a href="https://www.coursera.org/campus/learn-more">
                    <Button 
                        type="filled" 
                        variant="primary" 
                        size="md"
                        className="py-2 px-4"
                    >
                        Contact Us
                    </Button>
                </a>
                <div className="mt-4">
                    <p style={{ color: '#373A3C' }}>
                        See your options, 
                        <a 
                            href="https://www.coursera.org/campus/compare-plans" 
                            className="text-blue-600 underline"
                        >
                            compare plans
                        </a>
                    </p>
                </div>
            </div>
            <div className="w-1/2 flex justify-end items-center">
                <img 
                    src={codingimage}
                    alt="Descriptive alt text" 
                    className="max-w-lg h-auto object-contain" 
                />
            </div>
			<SecondHeroSection />
        </div>
    );
};

export default HeroSection;