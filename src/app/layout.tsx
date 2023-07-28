import type { Metadata } from 'next';

import Navbar from '@components/common/navbar';

// These styles apply to every route in the application
import './globals.css';

export const metadata: Metadata = {
  title: 'BEEHAW',
  description: 'a mock',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='dark'>
        <Navbar />
        <main className='w-full min-h-[100vh] p-4 bg-secondary-dark text-[#e4e4e4]'>
          {children}
        </main>
      </body>
    </html>
  );
}
