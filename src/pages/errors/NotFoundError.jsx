import React from "react";
import Error404 from "../../components/Errors/Error404";
import ErrorNav from "../../components/Errors/ErrorNav";
import { NavLink } from "react-router-dom";

const NotFoundError = () => {
	return (
		<div className="w-auto h-screen overflow-y-hidden">
			<ErrorNav />
			<div className="flex flex-col pt-20 bg-gray-100 h-full px-16 gap-24">
				<div className="max-w-3xl w-full mx-auto flex">
					<Error404 />
				</div>
				<p className="text-neutral max-w-lg mx-auto *:text-primary text-justify">
					We were not able to find the page you're looking for. Try{" "}
					<NavLink to="/browse">browsing our course catalog</NavLink> or{" "}
					<NavLink to="/courses">searching our course catalog</NavLink> instead.
				</p>
			</div>
		</div>
	);
};

export default NotFoundError;
