import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Hero from "../components/Home/Hero";
import Goals from "../components/Home/Goals";
import Join from "../components/Home/Join";
import Display from "../components/Services/Display";
import Promote from "../components/Home/Promote";
import Feature from "../components/Home/Feature";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
	const { user } = useContext(UserContext);
	useEffect(() => {
		console.log(user)
		window.scrollTo(0, 0);
	}, [user]);

	return (
		<div>
			{!user && (
				<div>
					<Hero />
					<Goals />
					<Promote />
					<Feature />
					<Testimonial />
					<Join />
				</div>
			)}

			{user && (
				<div>
					<Display />
				</div>
			)}
		</div>
	);
};

export default Home;
