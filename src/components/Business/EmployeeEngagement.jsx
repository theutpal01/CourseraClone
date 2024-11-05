import React from "react";
import Employee from "../../assets/business/employee.png";
import ProfilePic from "../../assets/business/adobe.png"; // Add path to the profile picture

function EmployeeEngagement() {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start px-5 lg:px-16 xl:px-28 py-8 lg:py-16 space-y-8 lg:space-y-0 lg:space-x-12">
			{/* Image Section */}
			<div className="w-full lg:w-1/2">
				<img
					src={Employee}
					alt="Employee Engagement"
					className="rounded-lg shadow-lg w-4/5 lg:w-full" // Ensures image is responsive
				/>
			</div>

			{/* Text Content Section */}
			<div className="w-full lg:w-1/2 space-y-4">
				<h2 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
					Engage Employees
				</h2>
				<h1 className="text-5xl font-semibold text-gray-800">
					Engage, retain, and develop <br /> your employees
				</h1>
				<p className="text-gray-700 text-xl">
					Promote continuous learning to boost employee engagement,
					<br />
					effectiveness, and professional growth.
				</p>

				{/* Bullet Points with blue ticks */}
				<ul className="list-inside space-y-2 text-lg text-gray-900">
					<li>
						<span className="text-blue-600 text-bold">✓</span> Invest in
						employee advancement with over 130 Professional Certificates
					</li>
					<li>
						<span className="text-blue-600 text-bold">✓</span> Speed up learning
						with support from our AI Coach
					</li>
					<li>
						<span className="text-blue-600 text-bold">✓</span> Help employees
						earn recognized career credentials
					</li>
				</ul>
				<br />
				<br />

				{/* Link with margin to push content down */}
				<a
					href="#"
					className="text-blue-600 hover:underline font-medium mb-12" // Added mb-6 for spacing
				>
					Explore targeted learning →
				</a>

				{/* Quote Section with top margin */}
				<div className="mt-6 border-gray-300 pl-4">
					<p className="text-gray-900 text-xl">
						“Training like this allows us to attract, develop, and
						<br /> retain the top talent that helps Adobe maintain its
						<br /> reputation as a technology leader.”
					</p>
					<div className="flex items-center mt-4">
						<img
							src={ProfilePic}
							alt="Profile of Tim C."
							className="w-20 mr-4"
						/>
						<div>
							<p className="text-gray-800 font-semibold">Tim C.</p>
							<p className="text-gray-500 text-sm">
								Senior Director of Applied Machine Learning, Adobe
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmployeeEngagement;
