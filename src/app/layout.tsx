import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import Head from 'next/head'; // Import for dynamic head content

import '@/styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Pocket',
    default: 'Pocket - Invest at the perfect time.',
  },
  description:
    'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2499635055097290"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-2499635055097290" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
