/**
 * Options shown in the "Book me" modal. The free intro call goes to Cal.com;
 * paid sessions are booked (and paid for) on the GeniYanga storefront.
 */
export interface BookingOption {
  title: string;
  meta: string;
  price: string;
  href: string;
  icon: string;
  featured?: boolean;
}

export const BOOKING_SHOP_URL = 'https://liwu.geniyanga.shop';

export const quickCall: BookingOption = {
  title: 'Intro call',
  meta: '30 min · video',
  price: 'Free',
  href: 'https://cal.com/liwu-codes/30min',
  icon: 'tabler:video',
  featured: true,
};

export const paidSessions: BookingOption[] = [
  {
    title: 'Data & AI 1-on-1',
    meta: '1 hr · lesson',
    price: 'MK 50,000',
    href: `${BOOKING_SHOP_URL}/bookings/xxuaejfpm8703ux`,
    icon: 'tabler:school',
  },
  {
    title: 'Technical assistance',
    meta: '1 hr · hands-on',
    price: 'MK 30,000',
    href: `${BOOKING_SHOP_URL}/bookings/rt2b300s036uyh5`,
    icon: 'tabler:tool',
  },
];
