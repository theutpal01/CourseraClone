import { NavLink } from "react-router-dom";
import NextStep from "../../assets/home/join/nextstep.png";
import BulkLogo from "../../assets/home/join/bulklogo.png";
import Button from "../UI/Button";

const Join = () => {
	return (
		<>
			<div className="container flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-8 px-5 lg:px-16 xl:px-28 py-28 bg-yellow-50">
				<div className="w-full lg:w-1/2 flex mb-8 lg:mb-0 justify-center">
					<img
						src={NextStep}
						alt="Next Step Image"
						className="w-full h-auto max-w-xs lg:max-w-md rounded-lg" // Adjusted for maximum width
					/>
				</div>
				<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
					<h2 className="text-3xl md:text-4xl mb-4 lg:mb-6 text-black">
						Take the next step toward your personal and professional goals with
						Coursera.
					</h2>
					<p className="text-md md:text-lg mb-4 lg:mb-6 text-gray-800">
						Join now to receive personalized recommendations from the full
						Coursera catalog.
					</p>
					<NavLink to="/home">
						<Button variant="primary" className="px-8">
							Join for Free
						</Button>
					</NavLink>
				</div>
			</div>

			{/* Coursera for Business Section */}
			<div className="container flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8 px-5 lg:px-16 xl:px-28 py-28">
				{/* Text Content */}
				<div className="w-full lg:w-1/2 mb-8 lg:mb-0">
					<h2 className="text-3xl md:text-4xl mb-4 lg:mb-10 text-black">
						Coursera for Business
					</h2>
					<p className="text-md md:text-lg mb-4 lg:mb-10 text-gray-800">
						We&apos;ve got the solution: world-class training and development
						programs developed by top universities and companies. All on
						Coursera for Business.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button variant="primary" className="px-8">
							Coursera For Enterprise
						</Button>
						<Button variant="primary" type="outlined" className="px-8">
							Coursera For Teams
						</Button>
					</div>
				</div>
				{/* Image */}
				<div className="w-full lg:w-auto flex justify-center">
					<img
						src={BulkLogo}
						alt="Coursera for Business Logo"
						className="w-full h-auto max-w-xs lg:max-w-md rounded-lg" // Adjusted for maximum width
					/>
				</div>
			</div>
		</>
	);
};

export default Join;
