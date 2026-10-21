import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { azienda } from '@tutela/shared/azienda.ts';

export default defineConfig({
  site: azienda.siti.pensioni.url,
  integrations: [sitemap()],
});
