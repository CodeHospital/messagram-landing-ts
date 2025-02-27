import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import GoogleAdsense from '../components/GoogleAdsense';

import '@/styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Messagram',
    default: 'Messagram - Bridge Your SMS to Telegram',
  },
  description:
    "Connect your SMS messages with Telegram seamlessly. Perfect for couples staying in touch or businesses managing communications efficiently.",
  verification: {
    google: 'ca-pub-2499635055097290'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://messagram.app',
    title: 'Messagram - Bridge Your SMS to Telegram',
    description: 'Share your SMS messages instantly on Telegram. Keep loved ones connected or streamline business communications with our reliable message bridging service.',
    siteName: 'Messagram',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
      <GoogleAdsense pId="2499635055097290" />
    </html>
  );
}
