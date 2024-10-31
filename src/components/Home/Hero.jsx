import { NavLink } from "react-router-dom";

import Image1 from "../../assets/home/hero/hero-bg.png";
import CompanyLogo1 from "../../assets/home/hero/company1.png";
import CompanyLogo2 from "../../assets/home/hero/company2.png";
import CompanyLogo3 from "../../assets/home/hero/company3.png";
import CompanyLogo4 from "../../assets/home/hero/company4.png";
import CompanyLogo5 from "../../assets/home/hero/company5.png";
import CompanyLogo6 from "../../assets/home/hero/company6.png";
import CompanyLogo7 from "../../assets/home/hero/company7.png";
import CompanyLogo8 from "../../assets/home/hero/company8.png";
import Button from "../UI/Button";

const Hero = () => {
	return (
		<>
			<div className="px-5 lg:px-16 xl:p-28 w-full py-20 flex gap-24 flex-row items-center justify-between">
				<div className="flex flex-col gap-8 w-full md:w-3/4 lg:w-3/5 mb-8 lg:mb-0">
					<h1 className="text-6xl lg:text-8xl mb-6 lg:mb-8 text-black font-semibold">
						Your Course To Success
					</h1>
					<p className="lg:text-xl mt-5 text-gray-800 font-medium text-justify">
						Build skills with courses, certificates, and degrees online from
						world-class universities and companies.
					</p>
					<div className="flex gap-2">
						<NavLink to="/">
							<Button variant="primary" size="lg" className="px-10 font-medium">
								Join for Free
							</Button>
						</NavLink>
						<NavLink to="/business">
							<Button
								variant="primary"
								type="outlined"
								size="lg"
								className="px-10 font-medium"
							>
								Try coursera for business
							</Button>
						</NavLink>
					</div>
				</div>
				{/* Image */}
				<div className="hidden md:block md:w-1/4 lg:w-2/5">
					<img
						src={Image1}
						alt="Hero Image"
						className="w-full h-auto lg:max-h-96 rounded-lg object-contain"
					/>
				</div>
			</div>
			<div className="w-full bg-gray-200 py-16 text-center flex flex-col gap-14 px-5 lg:px-16 xl:px-28">
				<h2 className="text-2xl font-semibold text-black">
					We Collaborate With{" "}
					<span className="text-blue-800">
						200+ Leading Universities And Companies
					</span>
				</h2>
				<div className="flex gap-6 justify-center items-center flex-wrap *:h-10">
					<img src={CompanyLogo1} alt="Company" />
					<img src={CompanyLogo2} alt="Company" />
					<img src={CompanyLogo3} alt="Company" />
					<img src={CompanyLogo4} alt="Company" />
					<img src={CompanyLogo5} alt="Company" />
					<img src={CompanyLogo6} alt="Company" />
					<img src={CompanyLogo7} alt="Company" />{" "}
					<img src={CompanyLogo8} alt="Company" />
				</div>
			</div>
		</>
	);
};

export default Hero;
