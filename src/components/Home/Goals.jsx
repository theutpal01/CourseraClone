import Icon1 from "../../assets/home/goals/icon1.png";
import Icon2 from "../../assets/home/goals/icon2.png";
import Icon3 from "../../assets/home/goals/icon3.png";
import Icon4 from "../../assets/home/goals/icon4.png";

const Goals = () => {
	return (
		<div className="w-full bg-white py-10 md:py-16 px-5 lg:px-16 xl:px-28">
			<div className="container mx-auto px-6 md:px-8 text-center text-black">
				<h2 className="text-3xl md:text-4xl mb-8 md:mb-12 font-medium">
					Achieve Your Goals With Coursera
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="text-center">
						<img
							src={Icon1}
							alt="Learn The Latest Skills"
							className="h-20 md:h-24 mx-auto mb-4"
						/>
						<h3 className="text-lg md:text-xl font-semibold mb-2">
							Learn The Latest Skills
						</h3>
						<p className="text-gray-600 text-sm md:text-base">
							Like Business Analytics, Graphic Design, Python, And More
						</p>
					</div>

					<div className="text-center">
						<img
							src={Icon2}
							alt="Get Ready For a Career"
							className="h-20 md:h-24 mx-auto mb-4"
						/>
						<h3 className="text-lg md:text-xl font-semibold mb-2">
							Get Ready For a Career
						</h3>
						<p className="text-gray-600 text-sm md:text-base">
							In high-demand fields like IT, AI, and Cloud Engineering
						</p>
					</div>

					<div className="text-center">
						<img
							src={Icon3}
							alt="Earn a Degree"
							className="h-20 md:h-24 mx-auto mb-4"
						/>
						<h3 className="text-lg md:text-xl font-semibold mb-2">
							Earn a Degree
						</h3>
						<p className="text-gray-600 text-sm md:text-base">
							From a leading university in Business, Computer Science, and more
						</p>
					</div>

					<div className="text-center">
						<img
							src={Icon4}
							alt="Upskill Your Organization"
							className="h-20 md:h-24 mx-auto mb-4"
						/>
						<h3 className="text-lg md:text-xl font-semibold mb-2">
							Upskill Your Organization
						</h3>
						<p className="text-gray-600 text-sm md:text-base">
							With on-demand training and development programs
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Goals;
