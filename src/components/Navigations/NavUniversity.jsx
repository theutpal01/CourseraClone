import React, { useState } from "react";
import courseraLogo from "../../assets/university/courseraCampus.png";
import { AiOutlineDown } from "react-icons/ai";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const NavUniversity = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const direction = useScrollDirection();

	return (
		<nav
			className={`${
				direction === "down" ? "top-0" : "top-0 lg:top-9"
			} sticky bg-white z-20 flex items-center text-gray-500 transition-all duration-300 drop-shadow border-b border-gray-300 lg:px-16 xl:px-28 px-5 py-5`}
		>
			<img
				src={courseraLogo}
				alt="Coursera for campus"
				className="h-5 sm:h-6 flex-1 object-contain"
			/>
			<div className="flex-grow justify-center space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row items-center ml-0 sm:ml-4">
				<div className="relative">
					<button
						onClick={() => handleDropdown("whyCoursera")}
						className="flex items-center hover:text-blue-600 mr-5"
					>
						Why Coursera{" "}
						{dropdownOpen === "whyCoursera" ? (
							<AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" />
						) : (
							<AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />
						)}
					</button>
					{dropdownOpen === "whyCoursera" && (
						<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 left-[-25px]">
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Connect Curriculum to Careers
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Enhance Learning Experiences
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Strengthen Employment Outcomes
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								World-Class Content
							</a>
						</div>
					)}
				</div>
				<div className="relative">
					<button
						onClick={() => handleDropdown("solutions")}
						className="flex items-center hover:text-blue-600 mr-5"
					>
						Solutions{" "}
						{dropdownOpen === "solutions" ? (
							<AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" />
						) : (
							<AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />
						)}
					</button>
					{dropdownOpen === "solutions" && (
						<div>
							<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
								<a
									href="#"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
								>
									Generative AI Courses(New)
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
								>
									Course Builder(New)
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
								>
									Academic Integrity
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
								>
									Career Academy
								</a>
							</div>
							<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
								<a
									href="#"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
								>
									For Corporates
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
								>
									For Governments
								</a>
								<a
									href="#"
									className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
								>
									For Education
								</a>
							</div>
						</div>
					)}
				</div>
				<div className="relative">
					<button
						onClick={() => handleDropdown("resources")}
						className="flex items-center hover:text-blue-600 mr-5"
					>
						Resources{" "}
						{dropdownOpen === "resources" ? (
							<AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" />
						) : (
							<AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />
						)}
					</button>
					{dropdownOpen === "resources" && (
						<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Insights
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Resource Hub
							</a>
						</div>
					)}
				</div>
				<a href="#" className="hover:text-blue-600 mr-5">
					Compare Plans
				</a>
			</div>
			<button className="flex-1 bg-blue-700 text-white px-6 py-2 rounded text-lg font-semibold mt-4 sm:mt-0">
				Contact Sales
			</button>
		</nav>
	);
};

export default NavUniversity;
