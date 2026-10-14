import { defineConfig } from 'vite';

export default defineConfig({
  // Needed so the site works at https://vaswanipranjal.github.io/Instahelp_PRD/
  base: '/Instahelp_PRD/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});
