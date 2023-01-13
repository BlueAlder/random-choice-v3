/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'white': "#FEFEFE",
				'blue': "#D6EFFF",
				'orange': "#FED18C",
				'yellow': "#FED99B",
				'red-p': "#FE654F",
			}
		},
		container: {
			center: true
		},
		

	},
	plugins: [],
}
