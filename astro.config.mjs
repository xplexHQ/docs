import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.xplex.me',
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      credits: true,
      title: 'xplex',
      logo: {
        src: './public/logo.svg',
      },
      tableOfContents: false,
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
      head: [{
        tag: 'meta',
        attrs: {
          property: 'og:image',
          content: 'https://docs.xplex.me/preview.png',
        },
      }],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/xplexHQ' },
        { icon: 'x.com', label: '𝕏', href: 'https://x.com/xplexHQ' },
      ],
      sidebar: [
        {
          label: 'Introduction',
          items: [ 'deepdive', 'index'],
        },
        {
          label: 'Setup Guide',
          autogenerate: { directory: 'setup' },
        },
        {
          label: 'References',
          items: [
            {
              label: 'Choose',
              autogenerate: { directory: 'refs/choose' },
            },
            {
              label: 'Check',
              autogenerate: { directory: 'refs/check' },
            },
            {
              label: 'Change',
              autogenerate: { directory: 'refs/change' },
            },
          ],
        },
      ],
    }),
  ],
  markdown: {
    // markdown configuration options
  },
  build: {
    // build configuration options
  },
});
