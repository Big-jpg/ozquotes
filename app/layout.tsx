import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';


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
        height: 447,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Header />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
