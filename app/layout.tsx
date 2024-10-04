import './globals.css';
import Navbar from '@/components/ui/navbar';
import { ReactNode } from 'react';
import Head from 'next/head';

// Define the type for children prop
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        {/* Global Open Graph Meta Tags */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Discover the best energy upgrade quotes, powered by AI and advanced analytics." />
        <meta property="og:title" content="Oz Quotes - Get the Best Energy Upgrade Quotes" />
        <meta property="og:description" content="Get the Best Energy Upgrade Quotes with AI-Powered Insights and Exclusive Rewards" />
        <meta property="og:image" content="/images/ogImageHeader.png" />
        <meta property="og:url" content="https://ozquotes.com" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
