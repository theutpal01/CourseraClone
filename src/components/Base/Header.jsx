import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Coursera from "../../assets/base/coursera.png";
import { FiMenu, FiX } from "react-icons/fi";
import {
	LuChevronDown,
	LuChevronUp,
	LuSearch,
	LuGlobe,
	LuBell,
	LuUser,
} from "react-icons/lu";

function Header({ login, setLogin }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [languageDropdown, setLanguageDropdown] = useState(false);
	const [notificationsDropdown, setNotificationsDropdown] = useState(false);
	const [profileDropdown, setProfileDropdown] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState("Language");

	const languageRef = useRef(null);
	const notificationsRef = useRef(null);
	const profileRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (languageRef.current && !languageRef.current.contains(event.target)) {
				setLanguageDropdown(false);
			}
			if (
				notificationsRef.current &&
				!notificationsRef.current.contains(event.target)
			) {
				setNotificationsDropdown(false);
			}
			if (profileRef.current && !profileRef.current.contains(event.target)) {
				setProfileDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLanguageSelect = (language) => {
		setSelectedLanguage(language);
		setLanguageDropdown(false);
	};

	const handleLogout = () => {
		setLogin(false); // Set logged out state
		setProfileDropdown(false); // Close profile dropdown
	};

	const handleLogin = () => {
		setLogin(true); // Reset logged out state
		setIsMobileMenuOpen(false); // Close mobile menu if it's open
	};

	return (
		<header className="p-4">
			<nav className="flex justify-between items-center text-gray-500 mb-3">
				{/* Logo and Explore Dropdown */}
				<div className="flex items-center space-x-6">
					<NavLink to="/" className="text-xl font-bold">
						<img src={Coursera} alt="Coursera Logo" className="h-6 w-auto" />
					</NavLink>

					<div className="hidden md:block relative px-4">
						<button
							onClick={toggleDropdown}
							className="text-white bg-blue-600 font-semibold btn btn-outline rounded-lg hover:bg-white hover:text-black"
						>
							Explore
							{isDropdownOpen ? <LuChevronUp /> : <LuChevronDown />}
						</button>
						{isDropdownOpen && (
							<div className="absolute mt-2 w-64 bg-white border rounded-md shadow-lg p-4 z-50">
								{/* Goals Section */}
								<div className="mb-4">
									<h3 className="font-semibold text-gray-800">Goals</h3>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Take a free course
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Earn a degree
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Earn a Certificate
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Find your new career
									</NavLink>
								</div>

								{/* Subjects Section */}
								<div className="mb-4">
									<h3 className="font-semibold text-gray-800">Subjects</h3>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Data Science
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Business
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Computer Science
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Information Technology
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Language Learning
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Health
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Personal Development
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Physical Science and Engineering
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Social Sciences
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Arts and Humanities
									</NavLink>
									<NavLink
										to="/home"
										className="block px-2 py-1 text-gray-700 hover:bg-gray-100"
									>
										Math and Logic
									</NavLink>
								</div>

								{/* Browse All Subjects Button */}
								<NavLink
									to="/home"
									className="block text-center py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
								>
									Browse all subjects
								</NavLink>
							</div>
						)}
					</div>

					<div className="hidden md:flex items-center relative w-96">
						<input
							type="text"
							placeholder="What do you want to learn?"
							className="pl-4 pr-12 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 w-full"
						/>
						<div className="absolute right-[5px] cursor-pointer hover:bg-blue-500/80 duration-300 transition-all bg-blue-500 rounded-full active:scale-90 text-white text-xl origin-center w-auto h-auto p-[10px]">
							<LuSearch />
						</div>
					</div>
				</div>

				<div className="hidden md:flex space-x-6 items-center">
					{!login ? (
						// Display links when logged out
						<>
							<NavLink to="/" className="font-bold hover:text-gray-700">
								For Enterprise
							</NavLink>
							<NavLink to="/" className="font-bold hover:text-gray-700">
								Students
							</NavLink>
							<NavLink
								to="/"
								className="font-bold text-blue-600 hover:text-gray-700"
								onClick={handleLogin}
							>
								Log In
							</NavLink>
							<NavLink
								to="/"
								className="font-bold btn bg-blue-600 text-white hover:bg-white hover:text-black"
							>
								Join for Free
							</NavLink>
						</>
					) : (
						// Show Home and My Learning along with existing dropdowns
						<>
							<div className="relative">
								<button
									className="flex items-center space-x-1 hover:text-gray-700"
									onClick={() => setLanguageDropdown(!languageDropdown)}
								>
									<LuGlobe />
									<span>{selectedLanguage}</span>
									{languageDropdown ? <LuChevronUp /> : <LuChevronDown />}
								</button>
								{languageDropdown && (
									<div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg p-2">
										<button
											onClick={() => handleLanguageSelect("English")}
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											English
										</button>
										<button
											onClick={() => handleLanguageSelect("Spanish")}
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											Spanish
										</button>
									</div>
								)}
							</div>

							<div ref={notificationsRef} className="relative">
								<button
									className="flex items-center space-x-1 hover:text-gray-700"
									onClick={() =>
										setNotificationsDropdown(!notificationsDropdown)
									}
								>
									<LuBell />
									<span>Notifications</span>
									{notificationsDropdown ? <LuChevronUp /> : <LuChevronDown />}
								</button>
								{notificationsDropdown && (
									<div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg p-2">
										<NavLink
											to="#"
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											New Notification 1
										</NavLink>
										<NavLink
											to="#"
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											New Notification 2
										</NavLink>
									</div>
								)}
							</div>

							<div ref={profileRef} className="relative">
								<button
									className="flex items-center space-x-1 hover:text-gray-700"
									onClick={() => setProfileDropdown(!profileDropdown)}
								>
									<LuUser />
									<span>Profile</span>
									{profileDropdown ? <LuChevronUp /> : <LuChevronDown />}
								</button>
								{profileDropdown && (
									<div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg p-2">
										<NavLink
											to="#"
											className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											My Account
										</NavLink>
										<button
											onClick={handleLogout}
											className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											Log Out
										</button>
									</div>
								)}
							</div>
						</>
					)}
				</div>

				<button className="md:hidden text-xl" onClick={toggleMobileMenu}>
					{isMobileMenuOpen ? <FiX /> : <FiMenu />}
				</button>
			</nav>

			<div>
				{!login ? (
					<></>
				) : (
					<>
						{/* New Row with Home and My Learning Links in a new line */}
						<div className="mt-4 flex justify-start space-x-6 *:transition-all *:duration-300 *:border-b-4 *:py-2 *:px-4 *:hover:text-blue-600">
							<NavLink
								to="/"
								className={({ isActive }) => {
									return isActive
										? "text-blue-600 border-blue-600"
										: "text-gray-700 border-transparent";
								}}
							>
								Home
							</NavLink>
							<NavLink
								to="/my-learning"
								className={({ isActive }) => {
									return isActive
										? "text-blue-600 border-blue-600"
										: "text-gray-700 border-transparent";
								}}
							>
								My Learning
							</NavLink>
						</div>
					</>
				)}
			</div>
			<hr />

			{isMobileMenuOpen && (
				<div className="md:hidden bg-white shadow-md p-4">
					{!login ? (
						<>
							<NavLink to="/" className="block py-2 hover:text-gray-700">
								For Enterprise
							</NavLink>
							<NavLink to="/" className="block py-2 hover:text-gray-700">
								Students
							</NavLink>
							<NavLink
								to="/"
								className="block py-2 hover:text-gray-700"
								onClick={handleLogin}
							>
								Log In
							</NavLink>
							<NavLink to="/" className="block py-2 hover:text-gray-700">
								Join for Free
							</NavLink>
						</>
					) : (
						<>
							<NavLink to="" className="block py-2 hover:text-gray-700">
								Language
							</NavLink>
							<NavLink to="" className="block py-2 hover:text-gray-700">
								Notifications
							</NavLink>
							<NavLink to="" className="block py-2 hover:text-gray-700">
								Profile
							</NavLink>
							<button
								onClick={handleLogout}
								className="block w-full text-left py-2 hover:text-gray-700"
							>
								Log Out
							</button>
						</>
					)}
				</div>
			)}
		</header>
	);
}

export default Header;
