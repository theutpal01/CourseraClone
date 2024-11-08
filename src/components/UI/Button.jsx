import React from "react";

const Button = ({
	type = "filled",
	variant = "light",
	size = "md",
	className,
	onCLick,
	children,
}) => {
	const variants = {
		"primary": `${
			type == "outlined"
				? "border-primary text-primary-dark hover:bg-primary/10"
				: `${type === "ghost" ? "hover:border-primary/20" : ""} border-primary bg-primary text-white hover:bg-primary-dark`
		}`,
		"secondary": `${
			type == "outlined"
				? "border-secondary text-secondary-dark hover:bg-secondary/10"
				: `${type === "ghost" ? "hover:border-secondary/20" : ""} border-secondary bg-secondary text-black hover:bg-secondary-dark`
		}`,
		"tertiary": `${
			type == "outlined"
				? "border-tertiary text-tertiary-dark hover:bg-tertiary/10"
				: `${type === "ghost" ? "hover:border-tertiary/20" : ""} border-tertiary bg-tertiary text-white hover:bg-tertiary-dark`
		}`,
		"light": `${
			type == "outlined"
				? "border-black text-black hover:bg-black/20"
				: `${type === "ghost" ? "hover:border-black/20" : ""} border-black bg-black text-white hover:bg-slate-900`
		}`,
	};

	const types = {
		"filled": "border-2",
		"outlined": "border-2 bg-transparent",
		"ghost" : "border-2 border-transparent"
	};

	const sizes = {
		"sm": "text-sm p-2 md:p-3",
		"md": "p-4 md:p-5",
		"lg": "text-lg p-5 md:p-6",
		"xl": "text-2xl p-6 md:p-7",
	};

	return (
		<button
			className={`${className ? className : ""} ${variants[variant]} ${
				types[type]
			} ${
				sizes[size]
			} text-neutral rounded w-fit active:scale-95 shadow cursor-pointer transition-all duration-150`}
			onClick={onCLick}
		>
			{children}
		</button>
	);
};

export default Button;
