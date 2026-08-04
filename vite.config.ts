import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

// https://vite.dev/config/
const config = defineConfig({
	// `reactRouter()` supplies the React plugin, so `@vitejs/plugin-react` is not
	// needed alongside it.
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
