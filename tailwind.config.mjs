import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			mono: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				gray: colors.neutral,
			},
			typography: {
				DEFAULT: {
				  css: {
					p: {
					  marginTop: '1rem',
					  marginBottom: '1rem',
					},
				  },
				},
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
