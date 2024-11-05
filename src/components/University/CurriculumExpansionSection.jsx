import React from 'react';

const CurriculumExpansionSection = () => {
    return (
        <div className="text-white">
            <div className="flex flex-col px-5 lg:px-16 xl:px-28 py-16 bg-blue-700 md:flex-row">
                <div className="flex-1">
                    <h2 className="text-5xl font-bold mt-4 mb-8">Expand your curriculum and empower your faculty</h2>
                    <p className="text-xl mb-16">
                        Deliver practical, job-relevant learning experiences with professional content and courses from university and industry experts.
                    </p>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-left text-left text-white-700 rounded-lg pr-16 pb-16">
                        <img 
                            src="https://images.ctfassets.net/2pudprfttvy6/4XMrz5se3QIJusI0TKe8Vp/2e71bff5bf8f587e24bb7b2d4fb515f5/icon_website.svg" 
                            alt="World-Class Content" 
                            width="56" 
                            height="50" 
                            className="mb-8"
                        />
                        <p className="font-semibold text-xl mb-2">World-Class Content</p>
                        <p>Connect students to a wide range of content from hundreds of industry leaders and universities.</p>
                    </div>
                    <div className="flex flex-col items-left text-left text-white-700 rounded-lg pr-16 pb-16">
                        <img 
                            src="https://images.ctfassets.net/2pudprfttvy6/14Ncu21DhOvd6FxJYVX8zk/3fc2089321031b72a380553f7ca7f0a2/icon-instructor.svg" 
                            alt="Guided Projects icon" 
                            width="63" 
                            height="60" 
                            className="mb-8"
                        />
                        <p className="font-semibold text-xl mb-2">Guided Projects</p>
                        <p>Give students hands-on projects to practice skills and stand out to employers.</p>
                    </div>
                    <div className="flex flex-col items-left text-left text-white-700 rounded-lg pr-16 pb-16">
                        <img 
                            src="https://images.ctfassets.net/2pudprfttvy6/4weCx1DOOp7qrFXKOQhOVr/c3ed49c7d07bbcacf569012056f7a900/CourseraIcon_Diplomas_Black.svg" 
                            alt="Professional Certificates" 
                            width="68" 
                            height="55" 
                            className="mb-8"
                        />
                        <p className="font-semibold text-xl mb-2">Professional Certificates</p>
                        <p>Help your students grow job confidence, apply learning, and hone critical skills in high-growth fields.</p>
                    </div>
                    <div className="flex flex-col items-left text-left text-white-700 rounded-lg pr-16 pb-16">
                        <img 
                            src="https://images.ctfassets.net/2pudprfttvy6/55nWm7sKBNc29Ey0gfWsgo/230dfdcbbb963ea06109df7c30094e6c/icon-integration.svg" 
                            alt="LMS Integration icon" 
                            width="61" 
                            height="54" 
                            className="mb-8"
                        />
                        <p className="font-semibold text-xl mb-2">LMS Integration</p>
                        <p>Streamline the learning experience by linking Coursera to your learning management system.</p>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row bg-white text-black mb-16">
                <div className="flex-1 px-5 lg:px-16 xl:px-28">
                    <ul className="flex flex-wrap">
                        <li>
                            <img 
                                src="https://images.ctfassets.net/2pudprfttvy6/2XqR8ObqoLUWLg9re09bNX/f577e3e2a72b79133226650961636371/tec-de-monterrey-seeklogo.com.svg" 
                                alt="Tecnológico de Monterrey" 
                                className="w-auto h-[98px] max-w-[180px] px-6 py-2"
                            />
                        </li>
                        <li>
                            <img 
                                src="https://images.ctfassets.net/2pudprfttvy6/54lbV33tUKvvBcwNGtckG2/49c39bdb7dc526bf46e28a564768e50e/University_of_Michigan_logo.svg" 
                                alt="University of Michigan" 
                                className="w-auto h-[98px] max-w-[180px] px-6 py-2"
                            />
                        </li>
                        <li>
                            <img 
                                src="https://images.ctfassets.net/2pudprfttvy6/6GkQMj8kJka4rbRfUZssA9/2dff6059d6fd92717503aa1e6bd25a20/Imperial_College_London.svg" 
                                alt="Imperial College London" 
                                className="w-auto h-[98px] max-w-[180px] px-6 py-2"
                            />
                        </li>
                        <li>
                            <img 
                                src="https://images.ctfassets.net/2pudprfttvy6/5xhVcB29RK2Bt6AThlokKU/ccff5cdcf16619740cf6bbff12e0a711/the-university-of-melbourne-vector-logo.png" 
                                alt="The University of Melbourne" 
                                className="w-auto h-[98px] max-w-[180px] px-6 py-2"
                            />
                        </li>
                        <li>
                            <img 
                                src="https://images.ctfassets.net/2pudprfttvy6/4vDQPYaiX1yJ2juCP44eSS/7fb188a6ef815fb09ca1e5dc39467c21/manipal-university-logo.png" 
                                alt="Manipal University" 
                                className="w-auto h-[98px] max-w-[180px] px-6 py-2"
                            />
                        </li>
                        <li>
                            <img 
                                src="https://images.ctfassets.net/2pudprfttvy6/29R4WJGFio5DXNxgm9re49/72e4ae122728f41dffcb32d4095d30bd/nmims-logo.png" 
                                alt="NMIMS" 
                                className="w-auto h-[98px] max-w-[180px] px-6 py-2"
                            />
                        </li>
                    </ul>
                </div>
                <div className="flex-1 flex flex-col justify-center items-start px-16">
                    <h2 className="text-5xl font-bold mb-12">Join colleges and universities worldwide that choose Coursera for Campus</h2>
                </div>
            </div>

            <div className="bg-white text-black py-16">
                <div className="px-5 lg:px-16 xl:px-28">
                    <h2 className="text-5xl font-semibold mb-8">Here's how innovative universities are using Coursera for Campus</h2>
                    <p className="text-2xl">
                        Coursera gives us confidence that we're providing our students high-quality education that furthers their career opportunities. Without Coursera, we couldn’t become ‘University 4.0,’ because we couldn’t develop courses so quickly on our own.
                    </p>
                    <div className="flex items-start mt-16">
                        <img 
                            src="https://images.ctfassets.net/2pudprfttvy6/5JO0OLOWgsSYsI627yrDh7/816962f77671f3e08f58a6009d9fcacd/int-u-logo.png" 
                            alt="International Information Technology University (IITU)" 
                            className="w-[91px] h-auto mr-8"
                        />
                        <div>
                            <div className="font-semibold text-xl mb-2">Yevgenia D.</div>
                            <div className="text-base">Vice-Rector for Science and International Collaboration</div>
                            <div className="text-base">International Information Technology University (IITU)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumExpansionSection;
