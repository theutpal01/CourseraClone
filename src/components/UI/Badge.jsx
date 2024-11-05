import React from "react";

const Badge = ({
	id,
	type = "outlined",
	variant = "light",
	size = "md",
	active = false,
	className,
	onClick = () => {},
	children,
}) => {
	const variants = {
		primary: `${
			type == "outlined"
				? "border-primary/30 text-primary-dark hover:bg-primary/10"
				: "text-primary hover:bg-primary/10"
		} ${active ? "!text-white !bg-primary !border-primary" : ""}`,
		secondary: `${
			type == "outlined"
				? "border-secondary30 text-secondary-dark hover:bg-secondary/10"
				: "text-secondary hover:bg-secondary/10"
		} ${active ? "!text-white !bg-secondary !border-secondary" : ""}`,
		tertiary: `${
			type == "outlined"
				? "border-tertiary/30 text-tertiary-dark hover:bg-tertiary/10"
				: "text-tertiary hover:bg-tertiary/10"
		} ${active ? "!text-white !bg-tertiary !border-tertiary" : ""}`,
		light: `${
			type == "outlined"
				? "border-slate-400 text-slate-500 hover:bg-slate-100"
				: "text-black hover:bg-black/10"
		} ${active ? "!text-white !bg-black !border-black" : ""}`,
	};

	const types = {
		outlined: "border-2 bg-transparent",
		ghost: "border-2 border-transparent",
	};

	const sizes = {
		xs: "text-xs",
		sm: "text-sm",
		md: "",
		lg: "text-lg",
		xl: "text-2xl",
	};

	return (
		<button
			id={id}
			name={id}
			className={`${className ? className : ""} ${variants[variant]} ${
				types[type]
			} ${
				sizes[size]
			} text-neutral font-medium rounded-badge py-1 px-3 w-fit active:scale-95 cursor-pointer transition-all duration-100`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Badge;
