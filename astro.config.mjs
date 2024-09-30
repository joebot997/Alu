import { defineConfig } from "astro/config";
import sitemap from "@inox-tools/sitemap-ext";

const prodBuild = true;

const site = prodBuild ? "https://aluu.xyz" : "http://localhost:3000";

export default defineConfig({
  site: site,
  integrations: [
    sitemap({
      includeByDefault: true,
      lastmod: new Date(),
    }),
  ],
  output: "hybrid", // Change from 'server' to 'static'
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
