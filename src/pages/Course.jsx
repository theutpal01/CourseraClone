import { useParams } from "react-router-dom";
import { test } from "../data";
import { useEffect, useState } from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";

const Course = () => {
	const [course, setCourse] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const selectedCourse = test.find((element) => element.id === parseInt(id));
		if (selectedCourse) {
			setCourse(selectedCourse);
		}
	}, [id]);

	return (
		<div className="min-h-screen">
			{course && (
				<div className="relative bg-slate-200 h-[500px] flex flex-col justify-center px-16 gap-2">
					<div>
						<h2 className="text-neutral text-4xl font-bold">{course.name}</h2>
						<p className="text-neutral">
							Instructor: {course.courseOverview.instructor}
						</p>
						<button className="mt-4 rounded-sm btn text-white bg-blue-600 border-none hover:bg-blue-500 max-w-64 h-auto py-4 leading-4 flex flex-col font-medium">
							Enroll for {course.price}
							<span className="text-xs font-normal">
								Starts{" "}
								{new Date().toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								})}
							</span>
						</button>
						<p className="text-neutral text-sm">
							<strong>{course.courseOverview.enrollment}</strong> alreay
							enrolled.
						</p>
					</div>

					<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10/12 py-4 bg-white drop-shadow-xl rounded-md flex divide-gray-300 divide-x *:text-neutral *:p-4 *:flex-grow items-center *:px-8 *:w-1/5">
						<div>
							<p className="font-medium text-lg">
								{course.modules.length} module
								{course.modules.length > 1 ? "s" : ""}
							</p>
							<p className="text-sm text-wrap">
								Gain insight into a topic and learn the fundamentals.
							</p>
						</div>
						<div>
							<p className="flex font-medium gap-2 items-center text-lg">
								{course.rating} <FaStar className="text-blue-800" />
							</p>
							<span className="text-sm">({course.reviews} Reviews)</span>
						</div>
						<div>
							<p className="font-medium text-lg">
								{course.duration} to complete
							</p>
							<p className="text-sm">Average time for course</p>
						</div>
						<div>
							<p className="font-medium text-lg">Flexible Schedule</p>
							<p className="text-sm">Learn at your own pace</p>
						</div>
						<div>
							<p className="flex font-medium gap-2 items-center text-lg">
								<FaThumbsUp className="text-blue-800" />
								95%
							</p>
							<p className="text-sm">Most learners liked this course</p>
						</div>
					</div>
				</div>
			)}
			;
		</div>
	);
};

export default Course;
