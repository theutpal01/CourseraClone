import React, { useState } from "react";
import courseraLogo from "../../assets/business/courseraforbusiness.png";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const NavBusiness = () => {
	const direction = useScrollDirection();
	const [dropdownOpen, setDropdownOpen] = useState(null);

	const handleDropdown = (menu) => {
		setDropdownOpen(dropdownOpen === menu ? null : menu);
	};
	return (
		<nav
			className={`${
				direction === "down" ? "top-0" : "top-0 lg:top-9"
			} sticky bg-white z-20 flex items-center text-gray-500 transition-all duration-300 drop-shadow border-b border-gray-300 lg:px-16 xl:px-28 px-5 py-5`}
		>
			<img
				src={courseraLogo}
				alt="Coursera for Business"
				className="h-5 sm:h-6 flex-1"
			/>
			<div className="flex-grow justify-center space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row items-center">
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
								Our Mission
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Success Stories
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Leadership
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
								Case Studies
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Webinars
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
							>
								Reports
							</a>
						</div>
					)}
				</div>
				<a href="#" className="hover:text-blue-600 mr-5">
					For Teams
				</a>
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

export default NavBusiness;
