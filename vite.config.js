// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/post-application',  // <-- set your repo name here, including leading slash and trailing slash
  plugins: [react()],
});
