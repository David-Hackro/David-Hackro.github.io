import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config.mjs';

// https://vitejs.dev/config/
export default defineConfig({
  // If you are deploying to https://David-Hackro.github.io/, set base to '/'.
  // If you are deploying to https://David-Hackro.github.io/David-Hackro.github.io/, for example your repository is at https://github.com/David-Hackro/David-Hackro.github.io, then set base to '/David-Hackro.github.io/'.
  base: 'https://David-Hackro.github.io/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
});
