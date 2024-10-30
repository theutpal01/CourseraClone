import React from "react";
import Hero from "../components/Home/Hero";
import Goals from "../components/Home/Goals";
import Join from "../components/Home/Join";
import Browse from "../components/Services/Browse";
import Promote from "../components/Home/Promote";
import Feature from "../components/Home/Feature";
import Testimonial from "../components/Home/Testimonial";

const Home = ({ login }) => {
	return (
		<div>
			{!login && (
				<div>
					<Hero />
					<Goals />
					<Promote />
					<Feature />
					<Testimonial />
					<Join />
				</div>
			)}

			{login && (
				<div>
					<Browse />
				</div>
			)}
		</div>
	);
};

export default Home;
