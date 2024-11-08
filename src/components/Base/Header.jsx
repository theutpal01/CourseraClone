import React, { useState } from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = ({ tab, setTab }) => {
	const direction = useScrollDirection();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleClick = (state) => {
		setTab(state);
		setIsMobileMenuOpen(false); // Close menu after selecting a tab
	};

	return (
		<div className={`${direction === "down" ? "top-0 lg:-top-9" : "top-0"} sticky z-50 bg-black transition-all duration-300`}>
			<div className="lg:flex gap-4 p-1 text-white font-normal border-b-4 transition-all duration-300 hidden lg:px-16 xl:px-28 px-5 h-9">
				<NavLink
					to="/"
					className={`${tab === "individual" ? "border-white" : "border-black"}`}
					onClick={() => handleClick("individual")}
				>
					For Individuals
				</NavLink>
				<NavLink
					to="/business"
					className={`${tab === "business" ? "border-white" : "border-black"}`}
					onClick={() => handleClick("business")}
				>
					For Businesses
				</NavLink>
				<NavLink
					to="/campus"
					className={`${tab === "campus" ? "border-white" : "border-black"}`}
					onClick={() => handleClick("campus")}
				>
					For Universities
				</NavLink>
				<NavLink
					to="/government"
					className={`${tab === "government" ? "border-white" : "border-black"}`}
					onClick={() => handleClick("government")}
				>
					For Governments
				</NavLink>
			</div>

			{/* Mobile Menu */}
			<div className="lg:hidden p-4 flex justify-between items-center bg-black text-white">
				<span className="font-semibold">Menu</span>
				<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
					<FiMenu className="text-2xl" />
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isMobileMenuOpen && (
				<div className="lg:hidden bg-black text-white text-center transition-all duration-300">
					<NavLink
						to="/"
						className={`block py-2 ${tab === "individual" ? "font-bold" : "font-normal"}`}
						onClick={() => handleClick("individual")}
					>
						For Individuals
					</NavLink>
					<NavLink
						to="/business"
						className={`block py-2 ${tab === "business" ? "font-bold" : "font-normal"}`}
						onClick={() => handleClick("business")}
					>
						For Businesses
					</NavLink>
					<NavLink
						to="/campus"
						className={`block py-2 ${tab === "campus" ? "font-bold" : "font-normal"}`}
						onClick={() => handleClick("campus")}
					>
						For Universities
					</NavLink>
					<NavLink
						to="/government"
						className={`block py-2 ${tab === "government" ? "font-bold" : "font-normal"}`}
						onClick={() => handleClick("government")}
					>
						For Governments
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default Header;
