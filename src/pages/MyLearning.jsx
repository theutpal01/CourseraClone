import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Image from "../assets/codingteam.jpg";

function MyLearning() {
	const {user} = useContext(UserContext);
	const [activeButton, setActiveButton] = useState("in-progress"); // State to track active button

	// Sample course data
	const courses = {
		inProgress: [
			{ title: "Course 1", progress: 50, imageUrl: Image },
			{ title: "Course 4", progress: 30, imageUrl: Image },
			{ title: "Course 7", progress: 70, imageUrl: Image },
			{ title: "Course 10", progress: 70, imageUrl: Image },
			{ title: "Course 11", progress: 70, imageUrl: Image },
		],
		completed: [
			{ title: "Course 2", progress: 100, imageUrl: Image },
			{ title: "Course 3", progress: 100, imageUrl: Image },
			{ title: "Course 5", progress: 100, imageUrl: Image },
			{ title: "Course 6", progress: 100, imageUrl: Image },
			{ title: "Course 8", progress: 100, imageUrl: Image },
			{ title: "Course 9", progress: 100, imageUrl: Image },
		],
	};

	return (
		<>
			{user && (
				<div className="flex flex-col gap-5 px-5 lg:px-16 xl:px-28 py-10">
					<h1 className="text-3xl text-slate-800 font-bold">My Learning</h1>

					{/* Buttons for "In Progress" and "Completed" */}
					<div className="space-x-2">
						<button
							className={`btn ${
								activeButton === "in-progress"
									? "bg-gray-500 text-white"
									: "bg-white text-gray-500"
							} rounded-full`}
							onClick={() => setActiveButton("in-progress")}
						>
							In Progress
						</button>
						<button
							className={`btn ${
								activeButton === "completed"
									? "bg-gray-500 text-white"
									: "bg-white text-gray-500"
							} rounded-full`}
							onClick={() => setActiveButton("completed")}
						>
							Completed
						</button>
					</div>

					{/* Course cards based on the active button */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
						{activeButton === "in-progress" &&
							courses.inProgress.map((course, index) => (
								<div
									key={index}
									className="card card-compact shadow-lg p-4 bg-white transform transition-transform duration-200 ease-out hover:scale-105 hover:shadow-2xl"
								>
									<figure>
										<img
											src={course.imageUrl}
											alt="Course Image"
											className="rounded-lg"
										/>
									</figure>
									<div className="card-body">
										<h2 className="card-title">{course.title}</h2>
										<div className="flex items-center mt-2">
											<progress
												className="progress progress-primary w-full"
												value={course.progress}
												max="100"
											></progress>
											<span className="ml-3 text-gray-600">
												{course.progress}%
											</span>
										</div>
									</div>
								</div>
							))}

						{activeButton === "completed" &&
							courses.completed.map((course, index) => (
								<div
									key={index}
									className="card card-compact shadow-lg p-4 bg-white transform transition-transform duration-200 ease-out hover:scale-105 hover:shadow-2xl"
								>
									<figure>
										<img
											src={course.imageUrl}
											alt="Course Image"
											className="rounded-lg"
										/>
									</figure>
									<div className="card-body">
										<h2 className="card-title">{course.title}</h2>
										<div className="flex items-center mt-2">
											<progress
												className="progress progress-primary w-full"
												value={course.progress}
												max="100"
											></progress>
											<span className="ml-3 text-gray-600">
												{course.progress}%
											</span>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			)}
		</>
	);
}

export default MyLearning;