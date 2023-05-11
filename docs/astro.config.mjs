import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), sitemap()],
  site: `https://openapi-ts.pages.dev`,
  vite: {
    define: {
      "import.meta.env.VITE_ALGOLIA_APP_ID": JSON.stringify(process.env.ALGOLIA_APP_ID ?? ""),
      "import.meta.env.VITE_ALGOLIA_INDEX_NAME": JSON.stringify(process.env.ALGOLIA_INDEX_NAME ?? ""),
      "import.meta.env.VITE_ALGOLIA_SEARCH_KEY": JSON.stringify(process.env.ALGOLIA_SEARCH_KEY ?? ""),
    },
  },
});
