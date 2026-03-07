import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

// https://vite.dev/config/
const config = defineConfig({
	plugins: [react(), svgr(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
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
