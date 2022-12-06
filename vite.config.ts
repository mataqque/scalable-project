import { defineConfig } from 'vite';
import vitePluginRequire from 'vite-plugin-require';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				app: './public/index.html',
			},
		},
	},
	plugins: [react(), sassDts(), vitePluginRequire()],
});
