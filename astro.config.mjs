import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://foxi-pro.netlify.app",
  output: "server",
  adapter: netlify(),
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  },
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    lottie(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react(),
    markdoc(),
    keystatic(),
  ],
});
