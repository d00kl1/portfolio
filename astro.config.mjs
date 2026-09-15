// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    // Tells the adapter NOT to enable Cloudflare Images binding
    // and let Sharp process static assets into /_astro/ at build time
    imageService: 'passthrough',
  }),
});