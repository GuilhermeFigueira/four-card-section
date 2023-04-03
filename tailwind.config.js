/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				red: "hsl(0, 78%, 62%)",
				cyan: " hsl(180, 62%, 55%)",
				orange: "hsl(34, 97%, 64%)",
				blue: {
					regular: "hsl(212, 86%, 64%)",
					dark: "hsl(234, 12%, 34%)",
					gray: "hsl(229, 6%, 66%)",
				},
				gray: "hsl(0, 0%, 98%)",
			},
		},
	},
	plugins: [],
};
