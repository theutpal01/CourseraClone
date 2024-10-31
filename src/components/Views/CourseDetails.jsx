import React, { useState } from "react";
import Tabs from "../UI/Tabs";
import { NavLink } from "react-router-dom";

const CourseDetails = () => {
	const [tab, setTab] = useState("about");

	const handleTabChange = (tabname) => {
		setTab(tabname);
	};

	return (
		<div>
			<div className="mt-5 lg:mt-20 lg:w-2/3 px-5 lg:px-16 xl:px-28">
				<Tabs variant="primary" className="hidden lg:flex border-b-2">
					<NavLink
						className={`${tab === "about" ? "bg-black/5 " : ""}`}
						onClick={() => handleTabChange("about")}
					>
						About
					</NavLink>
					<NavLink
						className={`${tab === "modules" ? "bg-black/5 " : ""}`}
						onClick={() => handleTabChange("modules")}
					>
						Modules
					</NavLink>
					<NavLink
						className={`${tab === "testimonials" ? "bg-black/5 " : ""}`}
						onClick={() => handleTabChange("testimonials")}
					>
						Testimonials
					</NavLink>
					<NavLink
						className={`${tab === "reviews" ? "bg-black/5 " : ""}`}
						onClick={() => handleTabChange("reviews")}
					>
						Reviews
					</NavLink>
				</Tabs>
			</div>
		</div>
	);
};

export default CourseDetails;
