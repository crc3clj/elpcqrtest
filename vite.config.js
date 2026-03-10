import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/elpcqrtest/", // Asigură-te că e setat la './' pentru a funcționa corect local și pe GitHub Pages
});
