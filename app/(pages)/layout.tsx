import type { Metadata } from 'next';
import '@globals/styles/globals.scss';
import metadataJSON from '@app/(pages)/_globals/metadata.json';
import fonts from './_globals/fonts';
import Header from './_components/Header/Header';
import Footer from '@app/(pages)/_components/Footer/Footer';
import AboutUs from './about-us/page';

export const metadata: Metadata = metadataJSON;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} antialiased`}>
        <Header />
        {children}
        <AboutUs />
        <Footer />
      </body>
    </html>
  );
}
