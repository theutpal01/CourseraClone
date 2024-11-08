import React from "react";
import FilterGroup from "../components/Search/FilterGroup";
import DisplayData from "../components/Search/DisplayData";

const Courses = () => {
	return (
		<div className="flex flex-col lg:flex-row min-h-screen"> {/* Changed to flex-col for small screens */}
			<div className="p-5 max-w-xs w-full lg:max-w-sm lg:w-1/4"> {/* Adjusted width for larger screens */}
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
			<div className="flex-grow flex flex-col gap-5 p-5 lg:p-5"> {/* Maintained padding and flex-grow for content area */}
				<DisplayData />
			</div>
		</div>
	);
};

export default Courses;
