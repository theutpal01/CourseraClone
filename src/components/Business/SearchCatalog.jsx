import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchCatalog = () => {
	const handleTagClick = (tag) => {
		console.log(`Clicked on tag: ${tag}`);
	};

	return (
		<div className="flex flex-col items-center bg-blue-50 p-8 px-5 lg:px-16 xl:px-28 sm:h-[40vh] h-auto">
			{/* Heading */}
			<h1 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center px-2">
				Search our catalog of world-class content
			</h1>

			{/* Search Bar */}
			<div className="flex items-center w-full max-w-md md:max-w-xl bg-white border border-gray-300 p-2 shadow-sm rounded-lg">
				<FiSearch className="text-gray-500 mx-2" size={20} />
				<input
					type="text"
					placeholder="e.g. Data Science"
					className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
				/>
			</div>

			{/* Tags with Popular label */}
			<div className="mt-4 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
				<p className="text-gray-600 font-semibold text-center sm:text-left">
					Popular
				</p>
				<div className="flex flex-wrap gap-2 justify-center sm:justify-start">
					{[
						"Business",
						"Computer Science",
						"Data Science",
						"Information Technology",
						"Health",
						"Arts and Humanities",
					].map((tag) => (
						<a
							key={tag}
							onClick={() => handleTagClick(tag)}
							className="text-gray-700 bg-white border border-gray-300 rounded-full px-3 py-1 text-sm shadow-sm cursor-pointer hover:bg-gray-100 transition"
						>
							{tag}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchCatalog;
