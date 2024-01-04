import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Aritcles',
      href: '/blog',
    },
    {
      text: 'Projects',
      href: '#',
    },
    {
      text: 'Contact',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Articles', href: '/blog' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Projects', href: '#' },
        { text: 'Music', href: '#' },
        { text: 'Speaking', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Tech Stack', href: '#' },
        { text: 'NFTs', href: '#' },
        { text: 'Contacts', href: '#' },
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/li_woo' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/liwoo' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/jchienda' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
  ],
  cryptoLinks: [
    { ariaLabel: 'Bitcoin', icon: 'tabler:currency-bitcoin', href: 'https://x.com/li_woo', color: 'bitcoin' },
    { ariaLabel: 'Ethereum', icon: 'tabler:currency-ethereum', href: 'https://github.com/liwoo', color: 'ethereum' },
    { ariaLabel: 'Solana', icon: 'tabler:currency-solana', href: 'https://linkedin.com/in/jchienda', color: 'solana' },
  ],
  footNote: `
    © 2024. Crafted with ❤️ by Jeremiah Chienda. All rights reserved.
  `,
};
