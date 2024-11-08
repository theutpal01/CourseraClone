/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					dark: "#0048B0",
					light: "#629BF8",
					DEFAULT: "#0056D2"
				},
				secondary: {
					dark: "#01B0CB",
					light: "#48E6FE",
					DEFAULT: "#01C2DF"
				},
				tertiary: {
					dark: "#A2678A",
					light: "#C19AB1",
					DEFAULT: "#AD7A99"
				}
			},
			fontFamily: {
				sans: ['Calibri', 'Open Sans', 'sans-serif'], // Add Calibri and Open Sans here
			},
		},
	},
	plugins: [require("daisyui")],
};
