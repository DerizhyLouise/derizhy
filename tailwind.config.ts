/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				gray: "#2B303B",
				lightgray: "#373D49",
				green: "#5CECC6",
				maroon: "#C32148",
				yellow: "#F8E9A1",
				navy: "#0D192B",
			},
		},
	},
	plugins: [],
};
