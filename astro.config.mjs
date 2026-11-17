import { defineConfig } from 'astro/config';

// Publié sur GitHub Pages : https://julienchenel.github.io/astro-du8test/
// L'admin Sveltia CMS est servi tel quel depuis public/admin/.
export default defineConfig({
  site: 'https://julienchenel.github.io',
  base: '/astro-du8test',
  trailingSlash: 'always',
});
