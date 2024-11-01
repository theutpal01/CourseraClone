import React from "react";
import homeImg from "../../assets/base/coursera.png";
import { NavLink } from "react-router-dom";

const ErrorNav = () => {
	return (
		<div className="flex w-full p-5">
			<NavLink to="/">
				<img className="object-contain h-5" src={homeImg} alt="Home" />
			</NavLink>
		</div>
	);
};

export default ErrorNav;
