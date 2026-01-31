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
  }), htmx(), sitemap({
    customPages: [
      'https://chienda.com/',
      'https://chienda.com/about',
      'https://chienda.com/blog',
      'https://chienda.com/privacy',
      'https://chienda.com/48-hours-of-pure-innovation',
      'https://chienda.com/6-accessibility-hacks',
      'https://chienda.com/7-javascript-alternatives-2021',
      'https://chienda.com/accidental-ai-engineer',
      'https://chienda.com/ai-agents-use-cases',
      'https://chienda.com/algorithm-within-e1s1',
      'https://chienda.com/evs-in-malawi',
      'https://chienda.com/get-started-website-with-astro-tailwind-css',
      'https://chienda.com/health-interoperability-in-malawi',
      'https://chienda.com/how-to-customize-astrowind-to-your-brand',
      'https://chienda.com/learn-code-in-2021',
      'https://chienda.com/maui-vs-flutter-2024',
      'https://chienda.com/nosql-data-modelling',
      'https://chienda.com/rag-is-all-you-need',
      'https://chienda.com/rag-is-all-you-need-2',
      'https://chienda.com/ssr-vs-csr',
      'https://chienda.com/stop-undercharging',
      'https://chienda.com/the-day-the-dollar-die',
      'https://chienda.com/the-machine-minder',
      'https://chienda.com/the-new-electricity',
      'https://chienda.com/the-power-platform-awakening',
      'https://chienda.com/the-telala-effect',
      'https://chienda.com/top-5-tech-2021',
      'https://chienda.com/whats-your-game-mode',
    ]
  }), mdx(), icon({
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
    remarkPlugins: [readingTimeRemarkPlugin],
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
