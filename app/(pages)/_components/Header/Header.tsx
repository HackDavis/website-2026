'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isAboutPage = pathname === '/about-us';
  const isHomePage = pathname === '/';
  const linkTextClass = isAboutPage
    ? 'text-white'
    : 'text-[var(--text-dark-blue)]';
  const [activeSection, setActiveSection] = useState<
    'home' | 'faq' | 'sponsors' | 'about'
  >('home');

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/about-us') {
      setActiveSection('about');
      return;
    }

    if (pathname !== '/') {
      setActiveSection('home');
      return;
    }

    const updateFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'faq') {
        setActiveSection('faq');
      } else if (hash === 'sponsors') {
        setActiveSection('sponsors');
      } else {
        setActiveSection('home');
      }
    };

    updateFromHash();
    window.addEventListener('hashchange', updateFromHash);
    return () => {
      window.removeEventListener('hashchange', updateFromHash);
    };
  }, [pathname]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('mobile-menu-toggle', { detail: { open: isMenuOpen } })
    );
  }, [isMenuOpen]);

  const handleMobileNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isMenuOpen) return;
      event.preventDefault();
      setIsMenuOpen(false);
      window.setTimeout(() => {
        router.push(href);
      }, 400);
    };

  return (
    <div className="w-full flex flex-col items-start justify-start bg-transparent fixed top-0 left-0 pl-4 md:pl-0 md:ml-auto md:flex-row md:items-start md:justify-between z-[80] pointer-events-none">
      <div className="sticky top-0 relative hidden md:flex items-center justify-center m-[2vw] z-40">
        {isHomePage ? (
          <Image
            src="/Images/header/pinkcloud.svg"
            alt="pink cloud background"
            width={100}
            height={100}
            className="block w-[8vw] min-w-[120px] h-auto animate-[cloud-spin_18s_linear_infinite]"
            style={{
              filter: 'drop-shadow(4px 10px 0px var(--text-dark-blue))',
            }}
          />
        ) : null}
        <Image
          src="/Images/header/hd_logo.svg"
          alt="HackDavis Logo"
          width={200}
          height={200}
          className={`absolute left-1/2 top-1/2 w-[4vw] min-w-[48px] -translate-x-1/2 -translate-y-1/2 z-30 ${
            isAboutPage ? 'm-[2vw]' : ''
          }`}
        />
      </div>
      <button
        type="button"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsMenuOpen((open) => !open)}
        className={`absolute right-[5vw] top-[5vw] block md:hidden z-[60] mr-[7vw] mt-[1vw] h-8 w-8 pointer-events-auto transition-colors duration-300 ${
          isMenuOpen
            ? 'text-white'
            : isHomePage
            ? 'text-[#005271]'
            : 'text-white'
        }`}
      >
        <span
          className={`absolute left-0 top-1/2 h-[3px] w-full bg-current transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 h-[3px] w-full bg-current transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 h-[3px] w-full bg-current transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
          }`}
        />
      </button>
      <div className="w-full flex items-center justify-start md:ml-auto md:w-auto md:items-start md:justify-end md:gap-2 pointer-events-auto">
        <div className="hidden md:flex">
          <div
            className={`w-[27vw] h-[5.6vh] m-[3vw] items-center justify-evenly ${
              isHomePage ? 'header-navbar' : 'glass-pill'
            }`}
            style={
              isHomePage ? { backgroundColor: 'var(--navbar-bg)' } : undefined
            }
          >
            <Link
              href="/"
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass} ${
                activeSection === 'home' ? 'font-black underline' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/#faq"
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass} ${
                activeSection === 'faq' ? 'font-black underline' : ''
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/#sponsors"
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass} ${
                activeSection === 'sponsors' ? 'font-black underline' : ''
              }`}
            >
              Sponsors
            </Link>
            <Link
              href="/about-us"
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass} ${
                activeSection === 'about' ? 'font-black underline' : ''
              }`}
            >
              About
            </Link>
          </div>
        </div>
        <Image
          src="/Images/header/mlh_badge.svg"
          alt="MLH Badge"
          width={220}
          height={220}
          className="block ml-[5vw] w-[10vw] max-w-[100px] drop-shadow-[0_6px_14px_rgba(0,0,0,0.3)] md:ml-0 md:w-[5vw] md:mr-[5vw]"
        />
      </div>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(74,74,74,0.5)] backdrop-blur-[12.5px] transform transition-transform duration-[400ms] ease-in-out pointer-events-auto ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:static md:translate-y-0 md:flex-row md:bg-transparent md:backdrop-blur-0`}
      >
        {isMenuOpen ? (
          <div className="flex flex-col items-center gap-10 px-6 pt-[16vh]">
            <Image
              src="/Images/header/hd_logo.svg"
              alt="HackDavis Logo"
              width={160}
              height={160}
            />
            <nav className="flex flex-col items-center gap-7 text-white font-[var(--font-metropolis)] uppercase text-lg">
              <Link
                href="/"
                className={`${
                  activeSection === 'home' ? 'font-bold underline' : ''
                }`}
                onClick={handleMobileNavClick('/')}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={`${
                  activeSection === 'about' ? 'font-bold underline' : ''
                }`}
                onClick={handleMobileNavClick('/about-us')}
              >
                About
              </Link>
              <Link href="/#donate" onClick={handleMobileNavClick('/#donate')}>
                Donate
              </Link>
              <Link
                href="/#faq"
                className={`${
                  activeSection === 'faq' ? 'font-bold underline' : ''
                }`}
                onClick={handleMobileNavClick('/#faq')}
              >
                FAQ
              </Link>
              <Link
                href="/#sponsors"
                className={`${
                  activeSection === 'sponsors' ? 'font-bold underline' : ''
                }`}
                onClick={handleMobileNavClick('/#sponsors')}
              >
                Sponsors
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </div>
  );
}
