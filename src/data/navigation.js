import { getPermalink } from '../utils/permalinks';

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
      href: '/projects',
    },
    {
      text: 'Contact',
      href: '/contact',
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
        { text: 'Projects', href: '/projects' },
        { text: 'Music', href: 'https://getalinafe.com' },
        { text: 'Speaking', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Tech Stack', href: '#' },
        { text: 'Old Site', href: 'https://old.chienda.com' },
        { text: 'Contacts', href: '/contact' },
      ],
    },
  ],

  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/liwucodes' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/liwoo' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/jchienda' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@liwucodes' },
  ],
  cryptoLinks: [
    { ariaLabel: 'Bitcoin', icon: 'tabler:currency-bitcoin', href: '#', color: 'bitcoin' },
    { ariaLabel: 'Ethereum', icon: 'tabler:currency-ethereum', href: '#', color: 'ethereum' },
    { ariaLabel: 'Solana', icon: 'tabler:currency-solana', href: '#', color: 'solana' },
  ],
  footNote: `
    © 2024. Crafted with ❤️ by Jeremiah Chienda. All rights reserved.
  `,
};
