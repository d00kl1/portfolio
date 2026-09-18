// astro.config.mjs
import { defineConfig } from 'astro/config';


export default defineConfig({
  output: 'static',
  i18n: {
    locales: ["en", "ml"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,      
    }
  }
});


  