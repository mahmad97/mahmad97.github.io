import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

const config = defineConfig({
	plugins: [svgr(), tailwindcss(), reactRouter()],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
		},
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
});

export default config;
