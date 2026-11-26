import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  redirects: {
    '/writing': '/blog/',
    '/writing/welcome-to-arklogs': '/blog/welcome-to-arklogs/'
  }
});
