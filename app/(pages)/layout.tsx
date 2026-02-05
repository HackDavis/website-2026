'use client';
import { usePathname } from 'next/navigation';
import type { Metadata } from 'next';
import '@globals/styles/globals.scss';
import metadataJSON from '@app/(pages)/_globals/metadata.json';
import fonts from './_globals/fonts';
import Header from './_components/Header/Header';
import Footer from '@app/(pages)/_components/Footer/Footer';

// export const metadata: Metadata = metadataJSON;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isIndexPage = pathname === '/';

  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
        <Header />
        {children}
        <Footer variant={isIndexPage ? 'index' : 'about-us'} />
      </body>
    </html>
  );
}
