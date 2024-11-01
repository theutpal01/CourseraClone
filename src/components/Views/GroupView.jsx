import { useState, useEffect } from "react";
import Button from "../UI/Button";
import { courses } from "../../data";
import CourseCard from "./CourseCard";

const GroupView = ({ heading, data }) => {
	const [visibleCards, setVisibleCards] = useState(
		data.length >= 4 ? 4 : data.length
	);
	const [filteredCourses, setFilteredCourses] = useState([]);
	
	const updateVisibleCards = () => {
		if (window.innerWidth >= 1024) {
			setVisibleCards(data.length >= 4 ? 4 : data.length); // Show 4 cards on large screens and above (lg and up)
		} else {
			setVisibleCards(data.length >= 2 ? 2 : data.length); // Show 2 cards on smaller screens
		}
		setFilteredCourses(
			data
				.slice(0, visibleCards)
				.map((id) => courses.find((course) => course.id === id))
				.filter(Boolean)
		);
	};

	useEffect(() => {
		updateVisibleCards(); // Initial setup
		window.addEventListener("resize", updateVisibleCards);

		return () => window.removeEventListener("resize", updateVisibleCards);
	}, [visibleCards]);

	return (
		<div className="flex flex-col gap-4 text-neutral">
			<h2 className="text-2xl font-semibold">{heading}</h2>
			<div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				{filteredCourses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
			{data.length - visibleCards > 0 && (
				<Button
					className="p-3 font-medium"
					variant="primary"
					type="outlined"
					size="sm"
				>
					Show {data.length - visibleCards} more
				</Button>
			)}
		</div>
	);
};

export default GroupView;
