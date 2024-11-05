import React from "react";
import dataskills from "../../assets/business/dataskills.png";
import dow from "../../assets/business/dow.png";

function TrainingProgramsPage() {
	return (
		<div className="flex flex-col md:flex-row w-full bg-blue-50 min-h-screen py-12 md:py-20 space-y-8 md:space-y-0 md:space-x-12 px-5 lg:px-16 xl:px-28">
			{/* Left side content */}
			<div className="md:w-1/2 space-y-6 mt-12">
				<h2 className="text-xl font-semibold text-gray-800">IMPROVE ROI</h2>
				<h1 className="text-5xl font-bold text-gray-900 leading-tight">
					Get the most from your training programs
				</h1>
				<p className="text-lg">
					Use AI to increase learning efficiency, customize skills training for
					your
					<br /> company, and translate content into preferred languages.
				</p>
				<ul className="space-y-2">
					<li className="flex items-center ">
						<span className="text-blue-500 mr-2">✓</span>
						Access over 4,000 courses in more than 20 languages
					</li>
					<li className="flex items-center ">
						<span className="text-blue-500 mr-2">✓</span>
						Offer employees real-time AI guidance and tailored suggestions
					</li>
					<li className="flex items-center ">
						<span className="text-blue-500 mr-2">✓</span>
						Easily create custom courses that include company-specific content
					</li>
				</ul>
				<a href="#" className="text-blue-600 font-semibold hover:underline">
					Learn about customizing your courses
					<br /> with AI →<br />
				</a>

				<a className="border-blue-500 mt-6 block text-xl">
					<p>
						“With Coursera's GenAI Content, over 80% of our IT
						<br /> workforce has achieved AI certification. It's exciting to
						<br /> see employees from all levels of our organization
						<br /> participate with such enthusiasm, as it showcases a<br />{" "}
						collective commitment to learning and growth.”
					</p>
					<footer className="mt-6 flex items-center">
						<img src={dow} alt="DOW Logo" className="w-20 h-20 mr-4" />
						<div>
							<span className="text-lg text-gray-900 font-semibold">
								A. Klein
							</span>
							<div className="text-sm text-black">
								Information Systems Talent Manager
							</div>
						</div>
					</footer>
				</a>
			</div>

			{/* Right side image */}
			<div className="md:w-1/2 flex justify-end items-start -mt-20 md:-mt-16">
				<img
					src={dataskills}
					alt="Training Programs Graphic"
					className="w-full max-w-xl h-auto rounded-lg"
				/>
			</div>
		</div>
	);
}

export default TrainingProgramsPage;
