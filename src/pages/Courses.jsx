import React from "react";
import FilterGroup from "../components/Search/FilterGroup";
import DisplayData from "../components/Search/DisplayData";

const Courses = () => {
	return (
		<div className="flex min-h-screen">
			<div className="p-5 px-20 max-w-sm w-full">
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
			<div className="flex-grow flex flex-col gap-5 p-5">
				<DisplayData />
			</div>
		</div>
	);
};

export default Courses;
