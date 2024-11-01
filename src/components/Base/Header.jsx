import React from "react";
import {useScrollDirection } from "../../hooks/useScrollDirection"
import { NavLink } from "react-router-dom";

const Header = ({ tab, setTab }) => {
	const direction = useScrollDirection()

	const handleClick = (state) => {
		setTab(state);
	};
	

	return (
		<div className={`${direction === "down" ? "top-0 lg:-top-9" : "top-0"} hidden h-9 lg:block sticky z-20 lg:px-16 xl:px-28 px-5 bg-black transition-all duration-300`}>
			<div className="flex gap-4 *:p-1  *:text-white h-full *:font-normal *:border-b-4 *:transition-all *:duration-300">
				<NavLink
					to="/"
					className={`${
						tab === "individual" ? "border-white" : "border-black"
					}`}
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
					className={`${
						tab === "government" ? "border-white" : "border-black"
					}`}
					onClick={() => handleClick("government")}
				>
					For Governments
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
