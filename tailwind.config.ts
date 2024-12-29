import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	plugins: [],
	theme: {
		extend: {},
		fontFamily: {
			mono: ['var(--font-roboto-mono)'],
			sans: ['var(--font-inter)'],
			serif: ['var(--font-eb-garamond)'],
		},
	},
};

export default config;
