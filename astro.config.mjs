import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify/functions'; // Import the Netlify adapter
import sitemap from "@inox-tools/sitemap-ext";

// Flag for determining if the build is for production or development
const prodBuild = true;

// Set the site URL based on the build environment
const site = prodBuild ? "https://aluu.xyz" : "http://localhost:3000";

export default defineConfig({
  site: site,
  integrations: [
    sitemap({
      includeByDefault: true,
      lastmod: new Date(),
    }),
  ],
  output: "hybrid", // Keep 'hybrid' if you need both static and SSR rendering or change to 'static' or 'server'
  adapter: netlify(), // Use the Netlify adapter
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
