import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import path from 'path';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '').GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': process.cwd(),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    }
  }
});