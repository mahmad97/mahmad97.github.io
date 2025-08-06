import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
const config = defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	preview: {
		port: 3001,
	},
});

export default config;
