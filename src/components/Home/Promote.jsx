import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import promoteImg from "../../assets/home/promote/promote.png"

const Promote = () => {
	return (
		<div className="bg-blue-50 my-16 py-8 px-5 lg:px-16 xl:px-28 mx-auto">
			<div className="relative mx-auto flex flex-col lg:flex-row-reverse items-center">
				{/* Image Section */}
				<div className="hidden lg:absolute left-0 lg:flex justify-center items-start lg:w-1/2 mb-8 lg:mb-0">
					{" "}
					{/* Center image on small screens */}
					<img
						src={promoteImg}
						alt="Hero"
						className="w-fit p-16 h-auto max-w-xs lg:max-w-full"
					/>{" "}
					{/* Responsive image */}
				</div>

				{/* Text Section */}
				<div className="lg:w-1/2 space-y-4 text-center lg:text-left lg:ml-8 md:ml-6 sm:ml-4">
					<h1 className="text-3xl lg:text-4xl text-neutral font-calibri mb-4">
						{" "}
						{/* Reduced boldness */}
						Learner Outcomes On Coursera
					</h1>
					<p className="text-lg">
						<span className="text-black font-semibold font-calibri">
							87% of people learning
						</span>
						<span className="text-lg text-gray-600 font-calibri">
							{" "}
							for professional development<br></br>
						</span>
						<span className="font-semibold text-gray-700 font-calibri">
							{" "}
							report career benefits
						</span>
						<span className="text-gray-600 font-calibri">
							{" "}
							like getting a promotion, a <br></br>raise, or starting a new
							career.
						</span>
						<br />
						<br />
						<br></br>
						<span className="text-lg text-gray-500 font-calibri">
							{" "}
							- coursera learner Outcomes survey(2019)
						</span>
					</p>
					<div className="flex gap-2">
						<NavLink to="/">
							<Button variant="primary" size="sm" className="px-10">
								Join for Free
							</Button>
						</NavLink>
						<NavLink to="/business">
							<Button
								variant="primary"
								type="outlined"
								size="sm"
								className="px-10"
							>
								Try coursera for business
							</Button>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Promote;
