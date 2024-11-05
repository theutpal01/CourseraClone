import React from "react";

const AdditionalInformation = () => {
	return (
		<div className="p-4 bg-white border border-gray-800 rounded">
			<h2 className="text-xl font-bold mb-4 text-[#373A3C]">
				Additional Information
			</h2>
			<form className="space-y-4">
				<div className="flex items-center space-x-4">
					<input
						id="FirstName"
						name="FirstName"
						placeholder="First Name"
						maxLength="255"
						type="text"
						className="mktoField mktoTextField mktoRequired w-1/2 p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
						required
					/>
					<input
						id="LastName"
						name="LastName"
						placeholder="Last Name"
						maxLength="255"
						type="text"
						className="mktoField mktoTextField mktoRequired w-1/2 p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
						required
					/>
				</div>

				<div className="flex items-center space-x-4">
					<input
						id="Email"
						name="Email"
						placeholder="Work Email Address"
						type="email"
						className="mktoField mktoTextField mktoRequired w-1/2 p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
						required
					/>
					<input
						id="Phone"
						name="Phone"
						placeholder="Phone Number"
						type="tel"
						className="mktoField mktoTextField mktoRequired w-1/2 p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
						required
					/>
				</div>

				<div className="flex items-center space-x-4">
					<select
						id="InstitutionType"
						name="InstitutionType"
						className="mktoField mktoTextField w-1/2 p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
					>
						<option>Institution Type...</option>
						<option>University/4 Year College</option>
						<option>2 Year College</option>
						<option>Graduate or Professional School</option>
						<option>Ministry of Education</option>
						<option>Other</option>
					</select>
					<input
						id="InstitutionName"
						name="InstitutionName"
						placeholder="Institution Name"
						type="text"
						className="mktoField mktoTextField w-1/2 p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
					/>
				</div>

				<div className="flex items-center space-x-4">
					<select
						id="JobRole"
						name="JobRole"
						className="mktoField mktoTextField w-1/2 p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
					>
						<option>Job Role...</option>
						<option>President/Provost</option>
						<option>Chancellor/Rector</option>
						<option>Vice-Chancellor/Vice-Rector</option>
						<option>Vice-President/Vice-Provost</option>
						<option>Registor</option>
						<option>CEO</option>
						<option>COO/CIO</option>
						<option>Dean</option>
						<option>Department Head</option>
						<option>Director</option>
						<option>Professor</option>
						<option>Student</option>
					</select>
					<select
						id="Department"
						name="Department"
						className="mktoField mktoTextField w-1/2 p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
					>
						<option>Select Department...</option>
						<option>Academic Affairs</option>
						<option>Career Services</option>
						<option>Continuing Education</option>
						<option>Enrollment Management</option>
						<option>Executive Leadership</option>
						<option>International</option>
						<option>Strategic Planning</option>
						<option>Student Affairs</option>
						<option>Teaching/Faculty/Research</option>
						<option>Other</option>
					</select>
				</div>

				<div className="flex items-center">
					<select
						id="NeedsDescription"
						name="NeedsDescription"
						className="mktoField mktoTextField w-full p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
					>
						<option>What best describes your needs?</option>
						<option>Get in touch with sales</option>
						<option>Existing Customer Support</option>
						<option>Learner Support</option>
						<option>Courses for myself</option>
						<option>Other</option>
					</select>
				</div>

				<div className="flex items-center">
					<input
						id="Country"
						name="Country"
						placeholder="Country"
						type="text"
						className="mktoField mktoTextField w-full p-2 border border-gray-800 rounded bg-white text-[#373A3C]"
					/>
				</div>

				<p className="text-gray-500 text-base mt-10 px-6">
					By submitting your info in the form above, you agree to our Terms of
					Use and Privacy Notice. We may use this info to contact you and/or use
					data from third parties to personalize your experience.
				</p>

				<div className="flex justify-end">
					<button
						type="submit"
						className="mt-4 bg-blue-500 text-white w-full p-2 rounded"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

const SalesTeamContact = () => {
	return (
		<div>
			<div className="grid grid-cols-2 py-16 gap-5 px-5 md:px-16 xl:px-28">
				<div className="flex flex-col">
					<div className="mb-12">
						<h2
							className="text-5xl font-bold pb-6"
							data-testid="how_module_hero_heading"
							style={{ color: "#373a3c" }}
						>
							Get in touch with our sales team
						</h2>
						<p className="text-xl mb-4" style={{ color: "#373a3c" }}>
							Learn more about how you can:
						</p>
						<ul className="list-disc">
							<li
								className="flex items-center mb-3"
								style={{ color: "#373a3c" }}
							>
								<svg
									aria-hidden="true"
									fill="none"
									focusable="false"
									height="16"
									viewBox="0 0 16 16"
									width="16"
									className="mr-2"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
										fill="currentColor"
									/>
								</svg>
								<span>Connect curriculum to careers</span>
							</li>
							<li
								className="flex items-center mb-3"
								style={{ color: "#373a3c" }}
							>
								<svg
									aria-hidden="true"
									fill="none"
									focusable="false"
									height="16"
									viewBox="0 0 16 16"
									width="16"
									className="mr-2"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
										fill="currentColor"
									/>
								</svg>
								<span>Strengthen employment outcomes</span>
							</li>
							<li className="flex items-center" style={{ color: "#373a3c" }}>
								<svg
									aria-hidden="true"
									fill="none"
									focusable="false"
									height="16"
									viewBox="0 0 16 16"
									width="16"
									className="mr-2"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z"
										fill="currentColor"
									/>
								</svg>
								<span>Enhance learning experiences</span>
							</li>
						</ul>
					</div>
					<div className="flex-1 px-16">
						<ul className="grid grid-cols-3">
							<li className="flex justify-center items-center">
								<img
									src="https://images.ctfassets.net/2pudprfttvy6/2XqR8ObqoLUWLg9re09bNX/f577e3e2a72b79133226650961636371/tec-de-monterrey-seeklogo.com.svg"
									alt="Tecnológico de Monterrey"
									className="w-[86.54px] h-[48.06px]"
								/>
							</li>
							<li className="flex justify-center items-center">
								<img
									src="https://images.ctfassets.net/2pudprfttvy6/54lbV33tUKvvBcwNGtckG2/49c39bdb7dc526bf46e28a564768e50e/University_of_Michigan_logo.svg"
									alt="University of Michigan"
									className="w-[86.54px] h-[48.06px]"
								/>
							</li>
							<li className="flex justify-center items-center">
								<img
									src="https://images.ctfassets.net/2pudprfttvy6/6GkQMj8kJka4rbRfUZssA9/2dff6059d6fd92717503aa1e6bd25a20/Imperial_College_London.svg"
									alt="Imperial College London"
									className="w-[86.54px] h-[48.06px]"
								/>
							</li>
							<li className="flex justify-center items-center">
								<img
									src="https://images.ctfassets.net/2pudprfttvy6/5xhVcB29RK2Bt6AThlokKU/ccff5cdcf16619740cf6bbff12e0a711/the-university-of-melbourne-vector-logo.png"
									alt="The University of Melbourne"
									className="w-[86.54px] h-[48.06px]"
								/>
							</li>
							<li className="flex justify-center items-center">
								<img
									src="https://images.ctfassets.net/2pudprfttvy6/4vDQPYaiX1yJ2juCP44eSS/7fb188a6ef815fb09ca1e5dc39467c21/manipal-university-logo.png"
									alt="Manipal University"
									className="w-[86.54px] h-[48.06px]"
								/>
							</li>
							<li className="flex justify-center items-center">
								<img
									src="https://images.ctfassets.net/2pudprfttvy6/29R4WJGFio5DXNxgm9re49/72e4ae122728f41dffcb32d4095d30bd/nmims-logo.png"
									alt="NMIMS"
									className="w-[86.54px] h-[48.06px]"
								/>
							</li>
						</ul>
					</div>
					<div>
						<p className="text-2xl mb-8 " style={{ color: "#373a3c" }}>
							No one professor or university can offer the breadth of choices
							students have with Coursera. And since they can find courses
							relevant to their industry, Coursera is a great bridge between the
							classroom and the workplace.
						</p>
						<div className="flex items-center mt-8">
							<img
								src="https://images.ctfassets.net/2pudprfttvy6/lz88PsDSJSx5EnUG94dy7/f0713dd44cf292ec7c4af79a5afb7935/ivey-logo.svg"
								alt="Ivey Business School"
								width="100"
								height="49.2"
							/>
							<div className="ml-4" style={{ color: "#373a3c" }}>
								<div className="font-bold text-[20px] mb-2">Lameck O.</div>
								<div className="text-gray-500">
									Lecturer and IT project manager
								</div>
							</div>
						</div>
					</div>
				</div>
				<AdditionalInformation />
			</div>

			<div className="px-5 lg:px-16 xl:px-28 py-16">
				<div className="flex flex-col items-center justify-center bg-black rounded-lg px-8 py-28 text-white text-center">
					<h2 className="text-6xl mt-4 mb-8">
						Help prepare career-ready graduates
					</h2>
					<p className="text-2xl mb-3">
						Widen your reach, enhance your curriculum, and empower students and
						faculty with Coursera for Campus.
					</p>
					<div className="flex space-x-4 mt-12 mb-8">
						<a
							className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded shadow transition"
							href="https://www.coursera.org/campus/learn-more"
							tabIndex="0"
						>
							Contact us
						</a>
						<a
							className="bg-gray-300 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded shadow transition"
							href="https://www.coursera.org/campus/compare-plans"
							tabIndex="0"
						>
							Compare plans
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SalesTeamContact;
