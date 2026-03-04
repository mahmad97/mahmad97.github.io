import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
const config = defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
});

export default config;
