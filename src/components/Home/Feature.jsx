import previewImg from "../../assets/home/feature/preview.png";
import statsImg from "../../assets/home/feature/stats.png";
import quizImg from "../../assets/home/feature/quiz.png";
import discussImg from "../../assets/home/feature/discuss.png";

const Feature = () => {
	return (
		<div className="py-16">
			<h2 className="text-3xl text-neutral font-semibold text-center mb-6">
				World-class learning for anyone, anywhere
			</h2>
			<div className="flex flex-col items-center p-5 bg-white">
				<div className="flex flex-col md:flex-row items-center max-w-5xl">
					{/* Text Section */}
					<div className="flex flex-col p-4 md:w-1/2 w-full">
						<h2 className="text-blue-600 text-sm mb-2">Top Quality</h2>
						<h3 className="text-2xl font-medium text-gray-800 mb-4">
							Learn from leading universities and companies
						</h3>
						<p className="mb-4 text-gray-900">
							Start streaming on-demand video lectures today from top
							instructors in subjects like
							<span className="text-blue-500">business</span>,{" "}
							<span className="text-blue-500">computer science</span>,{" "}
							<span className="text-blue-500">data science</span>,{" "}
							<span className="text-blue-500">language learning</span> & more.
						</p>
					</div>
					{/* Image Section */}
					<div className="p-4 hidden md:block md:w-1/2">
						<div className="relative">
							<img
								src={previewImg}
								alt="Learning Platform Screenshot"
								className="w-full drop-shadow"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center p-5 bg-white">
				<div className="flex flex-col md:flex-row items-center max-w-5xl">
					{/* Circles Image Section */}
					<div className="p-4 hidden md:block md:w-1/2">
						<img
							src={statsImg}
							alt="Statistics Circles"
							className="w-full drop-shadow"
						/>
					</div>

					{/* Text Section */}
					<div className="flex flex-col p-4 md:w-1/2 w-full">
						<h2 className="text-blue-600 text-sm  mb-2">Accessible</h2>
						<h3 className="text-2xl font-medium text-gray-800 mb-4">
							Find flexible, affordable options
						</h3>
						<p className="mb-4 text-gray-900">
							Choose from many options including free courses and{" "}
							<span className="text-blue-500">university degrees</span> at a
							breakthrough price. Learn at your own pace, 100% online.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center p-5 bg-white">
				<div className="flex flex-col md:flex-row items-center max-w-5xl">
					{/* Text Section */}
					<div className="flex flex-col p-4 md:w-1/2 w-full">
						<h2 className="text-blue-600 text-sm  mb-2">Applied Learning</h2>
						<h3 className="text-2xl font-medium text-gray-800 mb-4">
							Master Skills With In-Depth Learning
						</h3>
						<p className="mb-4 text-gray-900">
							Apply what you learn with self-paced quizzes and hands-on
							projects. Get feedback from a global community of learners.
						</p>
					</div>
					{/* Quiz Image Section */}
					<div className="p-4 hidden md:block md:w-1/2">
						<img
							src={quizImg}
							alt="Quiz Module Screenshot"
							className="w-full drop-shadow"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center p-5 bg-white">
				<div className="flex flex-col md:flex-row items-center max-w-5xl">
					{/* Sharaable Certificates Image Section */}
					<div className="p-4 hidden md:block md:w-1/2">
						<img
							src={discussImg}
							alt="People discussing"
							className="w-full drop-shadow"
						/>
					</div>
					{/* Text Section */}
					<div className="flex flex-col p-4 md:w-1/2 w-full">
						<h2 className="text-blue-600 text-sm  mb-2">
							Shareable Certificates
						</h2>
						<h3 className="text-2xl font-medium text-gray-800 mb-4">
							Earn industry-recognized credentials
						</h3>
						<p className="mb-4 text-gray-900">
							Demonstrate your new skills by sharing your course certificate,{" "}
							<span className="text-blue-600">professional certificate,</span>{" "}
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
