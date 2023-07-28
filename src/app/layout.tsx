import type { Metadata } from 'next';

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
        <main className='w-full min-h-[100vh] px-4 pb-4 bg-secondary-dark text-[#e4e4e4]'>
          {children}
        </main>
      </body>
    </html>
  );
}
