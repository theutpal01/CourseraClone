import React from "react";

const ResourcesBlock = () => {
	return (
		<div className="flex py-16 px-5 lg:px-16 xl:px-28">
			<div className="p-2">
				<div
					className="relative flex flex-col justify-between p-6 rounded-lg bg-cover bg-no-repeat h-64 w-80"
					style={{
						backgroundImage:
							"url(https://images.ctfassets.net/2pudprfttvy6/2CuH2rm4msSbuQpG7dlbjY/5730eb1.../promo-bg-drk-blue.png)",
						backgroundPosition: "bottom right",
					}}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
					<div className="relative z-10">
						<h2 className="text-xl font-bold text-white mb-2">
							The Global Skills Report 2024
						</h2>
						<p className="text-white mb-4">
							Identify critical skills and drive career outcomes for a
							competitive workforce.
						</p>
						<button className="bg-transparent text-white border border-white rounded py-2 px-4 hover:bg-white hover:text-black transition">
							Get report
							<span className="ml-2">
								<svg
									aria-hidden="true"
									fill="none"
									height="20"
									viewBox="0 0 20 20"
									width="20"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z"
										fill="currentColor"
									></path>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>

			<div className="p-2">
				<div
					className="relative flex flex-col justify-between p-6 rounded-lg bg-cover bg-no-repeat h-64 w-80"
					style={{
						backgroundImage:
							"url(https://images.ctfassets.net/2pudprfttvy6/2CuH2rm4msSbuQpG7dlbjY/5730eb1.../promo-bg-drk-blue.png)",
						backgroundPosition: "bottom right",
					}}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
					<div className="relative z-10">
						<h2 className="text-xl font-bold text-white mb-2">
							GUIDE: The Impact of Digital Transformation on Higher Ed
						</h2>
						<p className="text-white mb-4">
							Learn new strategies to maximize student value with blended
							learning.
						</p>
						<button className="bg-transparent text-white border border-white rounded py-2 px-4 hover:bg-white hover:text-black transition">
							Get guide
							<span className="ml-2">
								<svg
									aria-hidden="true"
									fill="none"
									height="20"
									viewBox="0 0 20 20"
									width="20"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z"
										fill="currentColor"
									></path>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>

			<div className="p-2">
				<div
					className="relative flex flex-col justify-between p-6 rounded-lg bg-cover bg-no-repeat h-64 w-80"
					style={{
						backgroundImage:
							"url(https://images.ctfassets.net/2pudprfttvy6/2CuH2rm4msSbuQpG7dlbjY/5730eb1.../promo-bg-drk-blue.png)",
						backgroundPosition: "bottom right",
					}}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
					<div className="relative z-10">
						<h2 className="text-xl font-bold text-white mb-2">
							The Job Skills of 2024 Report
						</h2>
						<p className="text-white mb-4">
							Uncover the fastest-growing skills to prepare students for future
							careers.
						</p>
						<button className="bg-transparent text-white border border-white rounded py-2 px-4 hover:bg-white hover:text-black transition">
							Get report
							<span className="ml-2">
								<svg
									aria-hidden="true"
									fill="none"
									height="20"
									viewBox="0 0 20 20"
									width="20"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z"
										fill="currentColor"
									></path>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourcesBlock;
