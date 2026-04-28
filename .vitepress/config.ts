import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SnapPoint",
  description: "An AI-powered browser extension for instant context-aware summarization.",
  head: [
    ['link', { rel: 'icon', href: '/snappoint_logo.svg', type: 'image/svg+xml' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-M7Z9Q3V8XQ' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`
    ]
  ],
  themeConfig: {
    logo: '/snappoint_logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Use Cases', link: '/guide/use-cases' },
      { text: 'Privacy', link: '/privacy' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Snap Button', link: '/guide/snap-button' },
          { text: 'Advanced Features', link: '/guide/features' },
          { text: 'FAQ', link: '/guide/faq' },
        ]
      },
      {
        text: 'Showcase',
        items: [
          { text: 'Use Cases', link: '/guide/use-cases' },
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Privacy Policy', link: '/privacy' },
        ]
      }
    ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/iamyb/SnapPoint/issues' }
    // ],
    footer: {
      copyright: 'Copyright © 2026-present SnapPoint'
    }
  },
  sitemap: {
    hostname: 'https://snappoint.vercel.app'
  }
})
