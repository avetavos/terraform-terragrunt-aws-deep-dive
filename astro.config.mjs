// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://deep-dive.avetavos.com',
  base: '/terraform-aws',
  output: 'static',
  integrations: [starlight({
      title: 'Terraform & Terragrunt for AWS — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/terraform-aws/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/terraform-aws/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/terraform-aws/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/terraform-aws/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#7B42BC' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Terraform & Terragrunt for AWS — From Zero to Hero" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/terraform-aws/sw.js',{scope:'/terraform-aws/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/terraform-terragrunt-aws-deep-dive' }],
      sidebar: [
        { label: 'Foundations', items: [{ autogenerate: { directory: 'foundations' } }] },
        { label: 'State Management', items: [{ autogenerate: { directory: 'state-management' } }] },
        { label: 'Variables & Data Flow', items: [{ autogenerate: { directory: 'variables-and-data-flow' } }] },
        { label: 'Modules', items: [{ autogenerate: { directory: 'modules' } }] },
        { label: 'Multi-Environment', items: [{ autogenerate: { directory: 'multi-environment' } }] },
        { label: 'Terragrunt Fundamentals', items: [{ autogenerate: { directory: 'terragrunt-fundamentals' } }] },
        { label: 'Production & Ecosystem', items: [{ autogenerate: { directory: 'production-and-ecosystem' } }] },
      ],
      }), preact()],
});
