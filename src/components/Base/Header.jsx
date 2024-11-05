import React, { useEffect } from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { NavLink, useLocation } from "react-router-dom";

const Header = ({ tab, setTab }) => {
	const direction = useScrollDirection();
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case "/":
				setTab("individual");
				break;
			case "/business":
				setTab("business");
				break;
			case "/campus":
				setTab("campus");
				break;
			case "/government":
				setTab("government");
				break;
			default:
				break;
		}
	}, [location]);

	return (
		<div
			className={`${
				direction === "down" ? "top-0 lg:-top-9" : "top-0"
			} hidden h-9 lg:block sticky z-20 lg:px-16 xl:px-28 px-5 bg-black transition-all duration-300`}
		>
			<div className="flex gap-4 *:p-1  *:text-white h-full *:border-b-4 *:transition-all *:duration-200 hover:*:bg-white hover:*:border-white hover:*:text-black">
				<NavLink
					to="/"
					className={`${
						tab === "individual" ? "border-white font-medium" : "border-black"
					}`}
				>
					For Individuals
				</NavLink>
				<NavLink
					to="/business"
					className={`${
						tab === "business" ? "border-white font-medium" : "border-black"
					}`}
				>
					For Businesses
				</NavLink>
				<NavLink
					to="/campus"
					className={`${
						tab === "campus" ? "border-white font-medium" : "border-black"
					}`}
				>
					For Universities
				</NavLink>
				<NavLink
					to="/government"
					className={`${
						tab === "government" ? "border-white font-medium" : "border-black"
					}`}
				>
					For Governments
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
