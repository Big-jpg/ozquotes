import './globals.css';
import Navbar from '@/components/ui/navbar';
import { ReactNode } from 'react';

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
