import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
const config = defineConfig({
	plugins: [tailwindcss(), react()],
	server: {
		port: 3000,
	},
	preview: {
		port: 3001,
	},
});

export default config;
