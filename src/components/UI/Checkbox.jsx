import React from "react";

const Checkbox = ({ name, text }) => {
	return (
		<label className="inline-flex items-center gap-2 cursor-pointer flex-wrap">
			<div className="relative flex items-center">
				<input
					id={name}
					name={name}
					type="checkbox"
					className="appearance-none transition-all duration-300 peer bg-white border-black border rounded-sm cursor-pointer checked:bg-black w-6 h-6"
				/>

				<svg
					className="absolute w-4 h-4 left-1/2 -top-full peer-checked:top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-all duration-300"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="20 3 9 15 4 9"></polyline>
				</svg>
			</div>
			{text && <span className="text-neutral select-none">{text}</span>}
		</label>
	);
};

export default Checkbox;
