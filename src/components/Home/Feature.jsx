import previewImg from "../../assets/home/feature/preview.png";
import statsImg from "../../assets/home/feature/stats.png";
import quizImg from "../../assets/home/feature/quiz.png";
import discussImg from "../../assets/home/feature/discuss.png";

const Feature = () => {
	return (
		<div className="py-16 px-5 sm:px-8 lg:px-16 xl:px-28">
			<h2 className="text-2xl sm:text-3xl text-neutral font-semibold text-center mb-6">
				World-class learning for anyone, anywhere
			</h2>
			{/* First Feature Section */}
			<div className="flex flex-col items-center py-5 bg-white">
				<div className="flex flex-col md:flex-row items-center justify-between w-full">
					{/* Text Section */}
					<div className="flex flex-col py-4 md:w-1/2 w-full px-4 sm:px-0">
						<h2 className="text-blue-600 text-xs sm:text-sm mb-2">Top Quality</h2>
						<h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
							Learn from leading universities and companies
						</h3>
						<p className="text-sm sm:text-base text-gray-900">
							Start streaming on-demand video lectures today from top
							instructors in subjects like <span className="text-blue-500">business</span>,{" "}
							<span className="text-blue-500">computer science</span>,{" "}
							<span className="text-blue-500">data science</span>,{" "}
							<span className="text-blue-500">language learning</span> & more.
						</p>
					</div>
					{/* Image Section */}
					<div className="py-4 hidden md:block md:w-1/2 flex justify-center">
						<img
							src={previewImg}
							alt="Learning Platform Screenshot"
							className="max-w-full md:max-w-md object-contain drop-shadow"
						/>
					</div>
				</div>
			</div>

			{/* Second Feature Section */}
			<div className="flex flex-col items-center py-5 bg-white">
				<div className="flex flex-col md:flex-row items-center w-full">
					{/* Circles Image Section */}
					<div className="py-4 hidden md:block md:w-1/2 flex justify-center">
						<img
							src={statsImg}
							alt="Statistics Circles"
							className="max-w-full md:max-w-md object-contain drop-shadow"
						/>
					</div>

					{/* Text Section */}
					<div className="flex flex-col py-4 md:w-1/2 w-full px-4 sm:px-0">
						<h2 className="text-blue-600 text-xs sm:text-sm mb-2">Accessible</h2>
						<h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
							Find flexible, affordable options
						</h3>
						<p className="text-sm sm:text-base text-gray-900">
							Choose from many options including free courses and{" "}
							<span className="text-blue-500">university degrees</span> at a
							breakthrough price. Learn at your own pace, 100% online.
						</p>
					</div>
				</div>
			</div>

			{/* Third Feature Section */}
			<div className="flex flex-col items-center py-5 bg-white">
				<div className="flex flex-col md:flex-row items-center w-full">
					{/* Text Section */}
					<div className="flex flex-col py-4 md:w-1/2 w-full px-4 sm:px-0">
						<h2 className="text-blue-600 text-xs sm:text-sm mb-2">Applied Learning</h2>
						<h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
							Master Skills With In-Depth Learning
						</h3>
						<p className="text-sm sm:text-base text-gray-900">
							Apply what you learn with self-paced quizzes and hands-on
							projects. Get feedback from a global community of learners.
						</p>
					</div>
					{/* Quiz Image Section */}
					<div className="py-4 hidden md:block md:w-1/2 flex justify-center">
						<img
							src={quizImg}
							alt="Quiz Module Screenshot"
							className="max-w-full md:max-w-md drop-shadow"
						/>
					</div>
				</div>
			</div>

			{/* Fourth Feature Section */}
			<div className="flex flex-col items-center py-5 bg-white">
				<div className="flex flex-col md:flex-row items-center w-full">
					{/* Shareable Certificates Image Section */}
					<div className="py-4 hidden md:block md:w-1/2 flex justify-center">
						<img
							src={discussImg}
							alt="People discussing"
							className="max-w-full md:max-w-md drop-shadow"
						/>
					</div>
					{/* Text Section */}
					<div className="flex flex-col py-4 md:w-1/2 w-full px-4 sm:px-0">
						<h2 className="text-blue-600 text-xs sm:text-sm mb-2">
							Shareable Certificates
						</h2>
						<h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
							Earn industry-recognized credentials
						</h3>
						<p className="text-sm sm:text-base text-gray-900">
							Demonstrate your new skills by sharing your course certificate,{" "}
							<span className="text-blue-600">professional certificate</span>,{" "}
							<span className="text-blue-600">mastertrack™ certificate</span>,
							or diploma with your network.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;
