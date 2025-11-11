// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  adapter: netlify(),
  site: 'https://kateblake.dev',
  image: {
    layout: 'constrained'
  }
});