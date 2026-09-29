// @ts-check
import { defineConfig } from 'astro/config';
import {satteri} from "@astrojs/markdown-satteri";
import mermaidSatteri from 'astro-mermaid-satteri';
import satteriCallouts from "satteri-callouts";

// https://astro.build/config
export default defineConfig({
    markdown: {
      shikiConfig: {
          theme: 'dark-plus'
      },
      syntaxHighlight: {
          type: 'shiki',
          excludeLangs: ['mermaid'],
      },
      processor: satteri({
          hastPlugins: [satteriCallouts({
              theme: 'obsidian',
          })],
      })
    },
    integrations: [mermaidSatteri({
      theme: 'neutral',
      autoTheme: false,
      themeVariables: {
          fontSize: 'var(--text-sm)',
          fontFamily: 'var(--font-mono)'
      }
  })],
    redirects: {
        '/projects': '/#projects',
        '/past-work': '/#past-work',
    }
});