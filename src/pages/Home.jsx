import { useEffect } from "react";
import Hero from "../components/Home/Hero";
import Goals from "../components/Home/Goals";
import Join from "../components/Home/Join";
import Display from "../components/Services/Display";
import Promote from "../components/Home/Promote";
import Feature from "../components/Home/Feature";
import Testimonial from "../components/Home/Testimonial";

const Home = ({ login }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [login]);
	
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
					<Display />
				</div>
			)}
		</div>
	);
};

export default Home;
