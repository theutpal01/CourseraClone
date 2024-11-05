import { FaStar, FaThumbsUp } from "react-icons/fa";
import Button from "../../UI/Button";
import courseBG from "../../../assets/courses/course-bg.png";

const Overview = ({ course }) => {
	return (
		<div className="relative bg-primary/5 lg:h-[550px] flex flex-col justify-center ">
			<div className="flex flex-col gap-3 py-10 px-5 lg:px-16 xl:px-28">
				<h2 className="text-neutral text-4xl font-bold max-w-4xl z-10">
					{course.course_title}
				</h2>
				<p className="text-neutral">
					Instructor: {course.instructors[0].name}{" "}
					<span className="font-semibold">
						{course.instructors.length > 1
							? "+" + (course.instructors.length - 1) + " more"
							: ""}
					</span>
				</p>
				<Button
					variant="primary"
					className="flex flex-col justify-center items-center w-full lg:w-fit px-20 mt-7"
				>
					Enroll for{" "}
					{course.certificate.offered ? course.certificate.price : "Free"}
					<span className="text-xs font-normal">
						Starts{" "}
						{new Date().toLocaleDateString("en-US", {
							month: "short",
							day: "numeric",
						})}
					</span>
				</Button>
				<p className="text-neutral text-sm">
					<strong>{course.ratings.enrollment}</strong> alreay enrolled.
				</p>
			</div>

			<div className="hidden lg:block absolute z-0 right-0 bottom-0 h-full overflow-hidden">
				<img src={courseBG} className="object-contain" />
			</div>

			<div className="flex relative lg:absolute lg:border-b-0  lg:items-center lg:z-10 lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2 w-full lg:px-16 xl:px-28">
			<div className="flex flex-col w-full lg:flex-row py-4 text-neutral bg-white lg:drop-shadow-lg lg:rounded-md border-b-2 divide-gray-300 divide-x *:px-5 xl:*:px-10 *:py-4 lg:*:w-1/5">
				<div>
					<p className="font-medium text-lg">2 modules</p>
					<p className="text-xs text-wrap">
						Gain insight into a topic and learn the fundamentals.
					</p>
				</div>
				<div className="lg:*:px-5">
					<p className="flex font-medium gap-2 items-center text-lg">
						{course.ratings.average_rating} <FaStar className="text-blue-800" />
					</p>
					<span className="text-xs">
						({course.ratings.number_of_reviews} Reviews)
					</span>
				</div>
				<div>
					<p className="font-medium text-lg">
						{course.duration.total_hours} hours to complete
					</p>
					<p className="text-xs">
						{course.duration.weeks} weeks at{" "}
						{course.duration.weekly_effort_hours} hours a week
					</p>
				</div>
				<div>
					<p className="font-medium text-lg">Flexible Schedule</p>
					<p className="text-xs">Learn at your own pace</p>
				</div>
				<div>
					<p className="flex font-medium gap-2 items-center text-lg">
						<FaThumbsUp className="text-blue-800" />
						95%
					</p>
					<p className="text-xs">Most learners liked this course</p>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Overview;
