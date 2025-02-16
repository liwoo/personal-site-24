import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, squooshImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import htmx from 'astro-htmx';
import vercel from '@astrojs/vercel/serverless';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';
import { ANALYTICS, SITE } from './src/utils/config.ts';
import react from "@astrojs/react";
import mdxMermaid from 'mdx-mermaid';
import {Mermaid} from 'mdx-mermaid/lib/Mermaid'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true,
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [tailwind({
    applyBaseStyles: false
  }), htmx(), sitemap(), mdx(), icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'voice-presentation', 'business-contact', 'database']
    }
  }), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), tasks(), react()],
  image: {
    service: squooshImageService()
  },
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin, [mdxMermaid, {
      output: 'svg',
      // Additional mermaid options if needed
      mermaidConfig: {
        theme: 'default',
        themeVariables: {
          // Your theme customizations
        }
      }
    }]],
    components: {mermaid: Mermaid, Mermaid},
    rehypePlugins: [responsiveTablesRehypePlugin]
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});
