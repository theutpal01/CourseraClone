import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate(`/courses/${course.id}`);
	};

	return (
		<div
			className="max-w-xs md:max-w-md lg:max-w-lg p-2 w-full rounded-xl overflow-hidden border-2 drop-shadow hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
			onClick={handleRedirect}
		>
			<div className="rounded-xl overflow-hidden m-2">
				<img
					src={""}
					alt=""
					className="h-44 w-full object-cover"
				/>
			</div>
			<div className="px-4 py-2 flex flex-col min-h-44 justify-between">
				<div className="text-neutral">
					<h2 className="font-semibold leading-relaxed overflow-ellipsis line-clamp-2">
						{course.course_title}
					</h2>
					<p className="my-2 text-xs overflow-ellipsis line-clamp-2">
						<span className="font-semibold">Skills you'll gain: </span>
						{course.skills_covered.join(", ")}
					</p>
				</div>
				<div className="text-xs text-neutral">
					<p className="mt-5 flex items-center gap-2">
						<FaStar className="text-yellow-400" />{" "}
						{course.ratings.average_rating} ({course.ratings.number_of_reviews})
					</p>
					<p>
						{course.difficulty_level} · {course.duration.total_hours} Hours
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
