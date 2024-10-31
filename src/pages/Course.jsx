import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { courses } from "../data";
import Overview from "../components/Views/Overview";
import CourseDetails from "../components/Views/CourseDetails";

const Course = () => {
	const [course, setCourse] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const selectedCourse = courses.find((element) => element.id === id);
		if (selectedCourse) {
			setCourse(selectedCourse);
		}
	}, [id]);

	return (
		<div className="min-h-screen">
			{course && (
				<>
					<Overview course={course} />
					<CourseDetails />
				</>
			)}
			;
		</div>
	);
};

export default Course;
