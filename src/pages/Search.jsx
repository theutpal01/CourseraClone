import React from "react";
import Button from "../components/UI/Button";
import Badge from "../components/UI/Badge";
import DisplayData from "../components/Search/DisplayData";
import { courses } from "../data";

const Search = () => {
	return (
		<div className="px-5 lg:px-16 xl:px-28 py-10">
			<div className="flex gap-2">
				<Badge size="sm">Product Type</Badge>
				<Badge active size="sm">Difficulty</Badge>
				<Badge size="sm">Subject</Badge>
				<Badge size="sm">English</Badge>
				<Badge size="sm">All Filters</Badge>
			</div>
			<div className="py-10 mx-auto">
			<DisplayData data={courses} />
			</div>
		</div>
	);
};

export default Search;
