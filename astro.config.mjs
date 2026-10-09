// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://selenepestanas.es',
  integrations: [
    sitemap({
      // Las páginas legales son plantillas con noindex hasta que tengan su texto definitivo.
      filter: (page) => !/\/(aviso-legal|privacidad|cookies)\/?$/.test(page),
    }),
  ],
});
