import React from "react";

const Tabs = ({ className, variant = "primary", children }) => {
	const variants = {
		primary: "*:text-neutral hover:*:text-primary hover:*:bg-primary/10",
		secondary: "*:text-neutral hover:*:text-secondary hover:*:bg-secondary/10",
		tertiary: "*:text-neutral hover:*:text-tertiary hover:*:bg-tertiary/10",
		light: "*:text-neutral hover:*:text-white hover:*:bg-black/10",
	};

	return (
		<div className={`flex gap-5 w-full p-3 *:p-3 *:rounded *:font-medium text-sm ${variants[variant]} ${className}`}>
			{children}
		</div>
	);
};

export default Tabs;
