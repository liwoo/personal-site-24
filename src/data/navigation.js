import { getPermalink } from '../utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Articles',
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
        { text: 'Using', href: '/using' },
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
    {
      ariaLabel: 'Bitcoin',
      icon: 'tabler:currency-bitcoin',
      color: 'bg-orange-500 hover:bg-orange-600',
      address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', // Replace with your actual Bitcoin address
      qrCode: 'https://minio-api.dartsmw.com/chienda.com/qr-bitcoin.png', // Optional: Add QR code image
    },
    {
      ariaLabel: 'Ethereum',
      icon: 'tabler:currency-ethereum',
      color: 'bg-blue-500 hover:bg-blue-600',
      address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb', // Replace with your actual Ethereum address
      qrCode: 'https://minio-api.dartsmw.com/chienda.com/qr-ethereum.png', // Optional: Add QR code image
    },
    {
      ariaLabel: 'Solana',
      icon: 'tabler:currency-solana',
      color: 'bg-purple-500 hover:bg-purple-600',
      address: '7v91N7iZ9mNicL8WfG6cgSCKyRXydQjLh6UYBWwm6y1Q', // Replace with your actual Solana address
      qrCode: 'https://minio-api.dartsmw.com/chienda.com/qr-solana.png', // Optional: Add QR code image
    },
  ],
  footNote: `
    © ${new Date().getFullYear()}. Crafted with ❤️ by Jeremiah Chienda. All rights reserved.
  `,
};
