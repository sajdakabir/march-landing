import { defineConfig, envField } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";
import { transformerNotationDiff, transformerNotationHighlight, transformerNotationWordHighlight, transformerNotationFocus, transformerNotationErrorLevel, transformerRenderWhitespace, transformerMetaHighlight, transformerMetaWordHighlight, transformerCompactLineOptions } from "@shikijs/transformers";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  devToolbar: {
    enabled: false
  },
  experimental: {
    env: {
        schema: {
            NEWSLETTER_LOOPS_API: envField.string({ context: "server", access: "secret" }),
        }
    }
},
  markdown: {
    shikiConfig: {
      theme: "vitesse-dark",
      transformers: [transformerNotationDiff(), transformerNotationFocus(), transformerMetaHighlight(), transformerMetaWordHighlight(), transformerNotationHighlight(), transformerNotationWordHighlight(), transformerNotationErrorLevel(), transformerRenderWhitespace(), transformerCompactLineOptions()]
    }
  },
  integrations: [tailwind(), mdx()],
  adapter: vercel()
});