import React from "react";
import Checkbox from "../UI/Checkbox";

const FilterGroup = ({ heading, options }) => {
	return (
		<div className="my-8 flex align-middle gap-1 flex-col">
			<h3 className="text-lg text-black">{heading}</h3>
			{options.map((item, index) => (
				<Checkbox key={index} name={String(item).toLowerCase()} text={item} />
			))}
		</div>
	);
};

export default FilterGroup;
