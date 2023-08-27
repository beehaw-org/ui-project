import type { Metadata } from 'next';
import { apiClient } from '@app/apiClient';

import Navbar from '@components/common/Navbar';

// These styles apply to every route in the application
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const site = await apiClient.getSite();

  return {
    title: site.site_view.site.name,
    description: site.site_view.site.description,
  };
}

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
