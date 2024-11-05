import React from "react";
import exampleImage from "../../assets/business/logos.png";

const OfferSection = () => {
	return (
		<div>
			<div className="flex bg-white py-40 mt-10 px-5 lg:px-16 xl:px-28">
				<div className="w-1/2 flex flex-col justify-start">
					<h2
						className="text-5xl font-semibold"
						style={{ color: "#373A3C" }}
						data-testid="how_module_hero_heading"
					>
						Offer students 6,800 courses from 325+ leading universities and
						industry partners
					</h2>
				</div>
				<div className="w-1/2 flex justify-end items-start">
					<img
						src={exampleImage}
						alt="Descriptive alt text"
						className="w-[519px] h-[433px] rounded-lg"
					/>
				</div>
			</div>
			<div className="flex bg-[#F2F5FA] py-16 px-5 lg:px-16 xl:px-28">
				<div className="w-1/2 flex justify-center items-start">
					<img
						src="https://images.ctfassets.net/2pudprfttvy6/22Idxx2D2dyALpIoJznkQD/fba6cc9a2cce8aa1832a5af642af6dfb/c4c-image-home-career-academy.jpg"
						alt="C4C Career Academy"
						width="543"
						className="rounded-lg"
					/>
				</div>
				<div className="w-1/2 flex flex-col justify-start">
					<p className="text-lg font-bold" style={{ color: "#373A3C" }}>
						Career Academy
					</p>
					<h2
						className="text-5xl font-semibold"
						style={{ color: "#373A3C" }}
						data-testid="how_module_hero_heading"
					>
						Prepare your students for in-demand jobs
					</h2>
					<div className="mt-4">
						<p style={{ color: "#373A3C" }}>
							Strengthen student employability with skills training from the
							world's leading companies.
						</p>
						<p style={{ color: "#373A3C" }}>
							With Career Academy, enable your students to:
						</p>
					</div>
					<ul className="list-disc ml-5 mt-2">
						<li className="flex items-center" style={{ color: "#373A3C" }}>
							<svg
								aria-hidden="true"
								fill="none"
								height="16"
								viewBox="0 0 16 16"
								width="16"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
									fill="currentColor"
								></path>
							</svg>
							<span className="ml-2">
								Earn a Professional Certificate designed to get them job-ready
							</span>
						</li>
						<li className="flex items-center" style={{ color: "#373A3C" }}>
							<svg
								aria-hidden="true"
								fill="none"
								height="16"
								viewBox="0 0 16 16"
								width="16"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
									fill="currentColor"
								></path>
							</svg>
							<span className="ml-2">
								Gain common job skills employers demand
							</span>
						</li>
						<li className="flex items-center" style={{ color: "#373A3C" }}>
							<svg
								aria-hidden="true"
								fill="none"
								height="16"
								viewBox="0 0 16 16"
								width="16"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
									fill="currentColor"
								></path>
							</svg>
							<span className="ml-2">
								Showcase skill mastery with a portfolio of work
							</span>
						</li>
						<li className="flex items-center" style={{ color: "#373A3C" }}>
							<svg
								aria-hidden="true"
								fill="none"
								height="16"
								viewBox="0 0 16 16"
								width="16"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
									fill="currentColor"
								></path>
							</svg>
							<span className="ml-2">
								Explore a range of in-demand roles across industries
							</span>
						</li>
					</ul>
					<div className="mt-4">
						<a
							className="inline-block bg-blue-600 text-white py-2 px-4 rounded"
							href="https://www.coursera.org/campus/career-academy"
							trackingname="EntWebsiteHow_prepare_your_students_for_in_demand_jobs_button_0"
						>
							Learn more about Career Academy
						</a>
					</div>
				</div>
			</div>

			<div className="flex py-16 px-5 lg:px-16 xl:px-28">
				<div className="w-1/2 text-[#373A3C]">
					<p className="text-xl font-semibold mb-6">
						Professional Certificates
					</p>
					<h2
						className="text-5xl font-bold mb-6"
						data-testid="how_module_hero_heading"
					>
						Learn why students and employers value Professional Certificates
					</h2>
					<div className="text-xl mb-4">
						<p className="mb-4">
							A survey of 5,000 students and employers in 11 countries finds
							that the majority value Professional Certificates for driving
							employment outcomes. Professional Certificates help students
							demonstrate to employers that they are qualified and job-ready.
						</p>
						<p className="mb-4">
							Use these insights to enhance your curriculum, and strengthen
							employment outcomes.
						</p>
					</div>
					<div className="py-3">
						<a
							className="cds-149 ContentfulButton cds-button-disableElevation cds-button-ghost inline-flex items-center text-blue-600"
							href="https://www.coursera.org/campus/resources/ebooks/industry-micro-credentials"
							tabIndex="0"
							trackingname="EntWebsiteHow_learn_why_students_and_employers_value_professional_certificates_button_0"
						>
							<span className="cds-button-label">Get report</span>
							<span className="cds-button-endIcon ml-1">
								<svg
									aria-hidden="true"
									fill="none"
									focusable="false"
									height="20"
									viewBox="0 0 20 20"
									width="20"
									className="css-0"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z"
										fill="currentColor"
									/>
								</svg>
							</span>
						</a>
					</div>
				</div>

				<div className="w-1/2 flex items-center justify-end">
					<div className="overflow-hidden rounded-lg">
						<video
							tabIndex="-1"
							controls
							width="542"
							height="305"
							className="object-cover"
							controlsList="nodownload"
						>
							<source
								src="https://videos.ctfassets.net/2pudprfttvy6/6b2EfyipwGqDqpB8zqJPDH/f9bb19fd48c78afff047e809b4b73c2d/courseramicrocred_09may23__720p_.mp4"
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OfferSection;
