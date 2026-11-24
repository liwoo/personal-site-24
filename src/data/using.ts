/**
 * What's on the desk, for /using. Icons are Tabler names (astro-icon). The old
 * vendor product photos were hotlinked and most had gone dead, so rows use an
 * icon tile instead.
 */
export interface SetupItem {
  category: string;
  name: string;
  /** One line. */
  description: string;
  icon: string;
  specs: string[];
}

export const setup: SetupItem[] = [
  {
    category: 'Display',
    name: 'LG 34WL75C-B',
    description: '34" curved UltraWide QHD IPS monitor',
    icon: 'tabler:device-desktop',
    specs: [
      '3440 x 1440 resolution (21:9 aspect ratio)',
      'HDR10 support with 99% sRGB color gamut',
      '1900R curvature for immersive viewing',
      '3-side virtually borderless design',
      'Height and tilt adjustable stand',
    ],
  },
  {
    category: 'Audio',
    name: 'JBL Quantum 200',
    description: 'Wired gaming headphones',
    icon: 'tabler:headphones',
    specs: [
      '50mm dynamic drivers with JBL QuantumSOUND Signature',
      'Memory foam ear cushions with PU leather',
      'Voice focus directional flip-up boom microphone',
      'Compatible with PC, PS4, Xbox, Nintendo Switch',
      '248g lightweight design',
    ],
  },
  {
    category: 'Computer',
    name: 'Apple MacBook Pro M1 Max',
    description: 'High-performance laptop',
    icon: 'tabler:device-laptop',
    specs: [
      'Apple M1 Max chip with 10-core CPU',
      '32GB unified memory',
      '1TB SSD storage',
      '16-inch Liquid Retina XDR display',
      'Up to 21 hours battery life',
    ],
  },
  {
    category: 'Webcam',
    name: 'Logitech Brio 4K',
    description: 'Ultra HD pro webcam',
    icon: 'tabler:device-computer-camera',
    specs: [
      '4K Ultra HD video at 30fps (4096 x 2160)',
      '13 megapixel image sensor',
      '5x digital zoom with autofocus',
      'RightLight 3 for optimal lighting',
      'Windows Hello facial recognition support',
      'Integrated privacy shutter',
    ],
  },
  {
    category: 'Mouse',
    name: 'Logitech G502 Lightspeed',
    description: 'Wireless gaming mouse',
    icon: 'tabler:mouse',
    specs: [
      'HERO 25K sensor with up to 25,600 DPI',
      'LIGHTSPEED wireless with 1ms response time',
      '11 programmable buttons',
      'Dual-mode hyper-fast scroll wheel',
      'Up to 60 hours battery life',
      'POWERPLAY compatible for continuous charging',
    ],
  },
  {
    category: 'Keyboard',
    name: 'Logitech Pro X TKL',
    description: 'Tenkeyless mechanical keyboard',
    icon: 'tabler:keyboard',
    specs: [
      'LIGHTSPEED wireless and Bluetooth connectivity',
      'GX Red Linear mechanical switches',
      'Dual-shot PBT keycaps',
      'LIGHTSYNC RGB lighting',
      'Ultra-portable tenkeyless design',
      'Game Mode Lock and media controls',
    ],
  },
];
