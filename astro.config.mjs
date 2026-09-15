// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Force static image processing at build time for static hosts like Cloudflare Pages
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});