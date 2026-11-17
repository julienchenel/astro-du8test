import { rm } from 'node:fs/promises';
import { defineConfig } from 'astro/config';

/**
 * Decap CMS ne fonctionne qu'en local (voir public/admin/config.yml) :
 * on retire /admin du site publié pour ne pas exposer une page inutilisable.
 */
const sansAdminEnProduction = {
  name: 'sans-admin-en-production',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await rm(new URL('admin/', dir), { recursive: true, force: true });
    },
  },
};

// Publié sur GitHub Pages : https://julienchenel.github.io/astro-du8test/
export default defineConfig({
  site: 'https://julienchenel.github.io',
  base: '/astro-du8test',
  trailingSlash: 'always',
  integrations: [sansAdminEnProduction],
});
