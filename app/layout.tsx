import './globals.css';
import Navbar from '@/components/ui/navbar';
import { ReactNode } from 'react';

// Define the metadata using the Metadata API
export const metadata = {
  title: 'Oz Quotes - Get the Best Energy Upgrade Quotes',
  description: 'Discover the best energy upgrade quotes, powered by AI and advanced analytics.',
  openGraph: {
    title: 'Oz Quotes - Get the Best Energy Upgrade Quotes',
    description: 'Get the Best Energy Upgrade Quotes with AI-Powered Insights and Exclusive Rewards',
    url: 'https://ozquotes.com',
    type: 'website',
    images: [
      {
        url: '/images/ogImageHeader.png',
        width: 937,
        height: 370,
        alt: 'Oz Quotes OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oz Quotes - Get the Best Energy Upgrade Quotes',
    description: 'Get the Best Energy Upgrade Quotes with AI-Powered Insights and Exclusive Rewards',
    images: ['/images/ogImageHeader.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// Define the type for children prop
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
