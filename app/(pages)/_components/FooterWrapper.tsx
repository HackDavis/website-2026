'use client';
import { usePathname } from 'next/navigation';
import Footer from './Footer/Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  const isIndexPage = pathname === '/';

  return <Footer variant={isIndexPage ? 'index' : 'about-us'} />;
}
