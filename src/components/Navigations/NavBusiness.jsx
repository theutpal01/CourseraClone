import React, { useState } from "react";
import courseraLogo from "../../assets/business/courseraforbusiness.png";
import { AiOutlineDown, AiOutlineUp, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useScrollDirection } from "../../hooks/useScrollDirection";

const NavBusiness = () => {
	const direction = useScrollDirection();
	const [dropdownOpen, setDropdownOpen] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleDropdown = (menu) => {
		setDropdownOpen(dropdownOpen === menu ? null : menu);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav
			className={`${
				direction === "down" ? "top-0" : "top-0 lg:top-9"
			} sticky bg-white z-20 flex items-center justify-between text-gray-500 transition-all duration-300 drop-shadow border-b border-gray-300 px-5 py-5 lg:px-16 xl:px-28`}
		>
			{/* Logo */}
			<img
				src={courseraLogo}
				alt="Coursera for Business"
				className="h-5 sm:h-6 flex-shrink-0 mr-4"
			/>

			{/* Desktop Navbar */}
			<div className="hidden lg:flex flex-grow justify-center flex-wrap items-center space-x-6">
				<div className="relative">
					<button
						onClick={() => handleDropdown("whyCoursera")}
						className="flex items-center hover:text-blue-600"
					>
						Why Coursera{" "}
						{dropdownOpen === "whyCoursera" ? (
							<AiOutlineUp className="h-3 w-4 text-gray-600 ml-1" />
						) : (
							<AiOutlineDown className="h-3 w-4 text-gray-600 ml-1" />
						)}
					</button>
					{dropdownOpen === "whyCoursera" && (
						<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-48 left-0">
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								Our Mission
							</a>
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								Success Stories
							</a>
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								Leadership
							</a>
						</div>
					)}
				</div>

				<div className="relative">
					<button
						onClick={() => handleDropdown("solutions")}
						className="flex items-center hover:text-blue-600"
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
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								For Corporates
							</a>
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								For Governments
							</a>
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								For Education
							</a>
						</div>
					)}
				</div>

				<div className="relative">
					<button
						onClick={() => handleDropdown("resources")}
						className="flex items-center hover:text-blue-600"
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
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								Case Studies
							</a>
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								Webinars
							</a>
							<a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
								Reports
							</a>
						</div>
					)}
				</div>

				<a href="#" className="hover:text-blue-600">
					For Teams
				</a>
				<a href="#" className="hover:text-blue-600">
					Compare Plans
				</a>
			</div>

			{/* Contact Sales Button for Desktop */}
			<div className="hidden lg:block">
				<button className="bg-blue-700 text-white px-4 py-2 rounded text-lg font-semibold">
					Contact Sales
				</button>
			</div>

			{/* Hamburger Icon for Mobile */}
			<div className="lg:hidden flex items-center">
				<button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
					{menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="absolute top-full left-0 w-full bg-white shadow-lg z-10 p-5 lg:hidden">
					<div className="flex flex-col space-y-4">
						<button onClick={() => handleDropdown("whyCoursera")} className="text-left hover:text-blue-600">
							Why Coursera {dropdownOpen === "whyCoursera" ? <AiOutlineUp /> : <AiOutlineDown />}
						</button>
						{dropdownOpen === "whyCoursera" && (
							<div className="pl-4 space-y-2">
								<a href="#" className="block text-gray-700 hover:text-blue-600">Our Mission</a>
								<a href="#" className="block text-gray-700 hover:text-blue-600">Success Stories</a>
								<a href="#" className="block text-gray-700 hover:text-blue-600">Leadership</a>
							</div>
						)}

						<button onClick={() => handleDropdown("solutions")} className="text-left hover:text-blue-600">
							Solutions {dropdownOpen === "solutions" ? <AiOutlineUp /> : <AiOutlineDown />}
						</button>
						{dropdownOpen === "solutions" && (
							<div className="pl-4 space-y-2">
								<a href="#" className="block text-gray-700 hover:text-blue-600">For Corporates</a>
								<a href="#" className="block text-gray-700 hover:text-blue-600">For Governments</a>
								<a href="#" className="block text-gray-700 hover:text-blue-600">For Education</a>
							</div>
						)}

						<button onClick={() => handleDropdown("resources")} className="text-left hover:text-blue-600">
							Resources {dropdownOpen === "resources" ? <AiOutlineUp /> : <AiOutlineDown />}
						</button>
						{dropdownOpen === "resources" && (
							<div className="pl-4 space-y-2">
								<a href="#" className="block text-gray-700 hover:text-blue-600">Case Studies</a>
								<a href="#" className="block text-gray-700 hover:text-blue-600">Webinars</a>
								<a href="#" className="block text-gray-700 hover:text-blue-600">Reports</a>
							</div>
						)}

						<a href="#" className="hover:text-blue-600">For Teams</a>
						<a href="#" className="hover:text-blue-600">Compare Plans</a>

						{/* Contact Sales Button for Mobile */}
						<button className="bg-blue-700 text-white px-4 py-2 rounded text-lg font-semibold mt-4">
							Contact Sales
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavBusiness;
