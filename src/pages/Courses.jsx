import React from "react";
import FilterGroup from "../components/Search/FilterGroup";
import DisplayData from "../components/Search/DisplayData";
import { courses } from "../data";

const Courses = () => {
	return (
		<div className="flex min-h-screen mt-10 px-5 lg:px-16 xl:px-28">
			<div className="hidden lg:block py-5 max-w-48 xl:max-w-80 w-full">
				<h2 className="text-xl text-neutral font-medium">Filter by</h2>
				<FilterGroup
					heading="Levels"
					options={["Beginner", "Intermediate", "Advanced", "Free"]}
				/>

				<FilterGroup
					heading="Subjects"
					options={["Beginner", "Intermediate", "Advanced", "Free"]}
				/>

				<FilterGroup
					heading="Ratings"
					options={["Beginner", "Intermediate", "Advanced", "Free"]}
				/>

				<FilterGroup
					heading="Language"
					options={["Beginner", "Intermediate", "Advanced", "Free"]}
				/>

				<FilterGroup
					heading="Subtitles"
					options={["Beginner", "Intermediate", "Advanced", "Free"]}
				/>

				<FilterGroup
					heading="Skills"
					options={["Beginner", "Intermediate", "Advanced", "Free"]}
				/>

				<FilterGroup
					heading="Educators"
					options={["Beginner", "Intermediate", "Advanced", "Free"]}
				/>
			</div>
			<div className="flex-grow flex flex-col gap-5 py-5">
				<DisplayData data={courses} />
			</div>
		</div>
	);
};

export default Courses;
