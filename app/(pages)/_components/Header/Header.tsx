'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type SectionId = 'home' | 'faq' | 'sponsors' | 'about';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isAboutPage = pathname === '/about-us';
  const isHomePage = pathname === '/';

  // Keep your current choice (white text on About), since we’ll tint the pill darker there.
  const linkTextClass = isAboutPage
    ? 'text-white'
    : 'text-[var(--text-dark-blue)]';

  const [activeSection, setActiveSection] = useState<SectionId>('home');

  // Prevent spamming history.replaceState on every scroll tick
  const lastUrlRef = useRef<string>('');
  const lastSectionRef = useRef<SectionId>('home');
  const rafRef = useRef<number | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Broadcast menu toggle (your existing behavior)
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('mobile-menu-toggle', { detail: { open: isMenuOpen } })
    );
  }, [isMenuOpen]);

  // Navbar styling: keep glass-pill but tint darker on About so white text is readable
  const desktopNavPillClass = useMemo(() => {
    if (isHomePage) return 'header-navbar';
    if (isAboutPage)
      return 'glass-pill bg-[#005271]/45 backdrop-blur-md backdrop-saturate-150 shadow-md';
    return 'glass-pill';
  }, [isHomePage, isAboutPage]);

  // Helper: navigate to in-page section smoothly when already on "/"
  const goToSection = (id: 'home' | 'faq' | 'sponsors') => {
    if (pathname !== '/') {
      router.push(id === 'home' ? '/' : `/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    // If you have a fixed header, use scroll-margin-top on sections (recommended),
    // or do an offset scroll here. This uses native smooth scroll:
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update URL immediately (scroll handler will keep it in sync too)
    const nextUrl = id === 'home' ? '/' : `/#${id}`;
    if (lastUrlRef.current !== nextUrl) {
      lastUrlRef.current = nextUrl;
      history.replaceState(null, '', nextUrl);
    }
  };

  // Scroll/observer logic: update activeSection + URL while scrolling on "/"
  useEffect(() => {
    if (pathname === '/about-us') {
      setActiveSection('about');
      lastSectionRef.current = 'about';
      return;
    }

    if (pathname !== '/') {
      setActiveSection('home');
      lastSectionRef.current = 'home';
      return;
    }

    const homeEl = document.getElementById('home');
    const faqEl = document.getElementById('faq');
    const sponsorsEl = document.getElementById('sponsors');

    const sections = [
      { id: 'home' as const, el: homeEl },
      { id: 'faq' as const, el: faqEl },
      { id: 'sponsors' as const, el: sponsorsEl },
    ].filter(
      (s): s is { id: 'home' | 'faq' | 'sponsors'; el: HTMLElement } => !!s.el
    );

    const headerOffset = 120; // tweak to match your header height

    const setFromScrollPosition = () => {
      if (sections.length === 0) return;

      // Score each section based on distance from the headerOffset line
      const scored = sections.map((s) => {
        const top = s.el.getBoundingClientRect().top;
        return { id: s.id, top, dist: Math.abs(top - headerOffset) };
      });

      // Prefer sections already passed the header line
      const passed = scored
        .filter((s) => s.top <= headerOffset + 1)
        .sort((a, b) => b.top - a.top);

      const best =
        (passed[0] ?? scored.sort((a, b) => a.dist - b.dist)[0])?.id;

      if (!best) return;

      // Only update state/history if the section actually changed
      if (lastSectionRef.current !== best) {
        lastSectionRef.current = best;
        setActiveSection(best);

        const nextUrl = best === 'home' ? '/' : `/#${best}`;
        if (lastUrlRef.current !== nextUrl) {
          lastUrlRef.current = nextUrl;
          history.replaceState(null, '', nextUrl);
        }
      }
    };

    // Run once after mount (handles direct loads + anchor jumps)
    setFromScrollPosition();

    const onHashChange = () => {
      requestAnimationFrame(() => setFromScrollPosition());
    };
    window.addEventListener('hashchange', onHashChange);

    const onScroll = () => {
      // Throttle to one per animation frame
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        setFromScrollPosition();
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // IntersectionObserver can help on jumpy scroll/resize
    const observer = new IntersectionObserver(
      () => setFromScrollPosition(),
      { root: null, threshold: [0, 0.01, 0.1] }
    );
    sections.forEach((s) => observer.observe(s.el));

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [pathname]);

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
          <div className="relative w-[8vw] min-w-[120px]">
            {/* Static shadow layer */}
            <Image
              src="/Images/header/bluecloud.svg"
              alt="cloud shadow"
              width={100}
              height={100}
              className="absolute m-[5px] mt-[7px] inset-0 w-full h-auto animate-[cloud-spin_18s_linear_infinite]"
            />

            {/* Spinning visible cloud */}
            <Image
              src="/Images/header/pinkcloud.svg"
              alt="pink cloud background"
              width={100}
              height={100}
              className="block w-full h-auto animate-[cloud-spin_18s_linear_infinite]"
            />
          </div>
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
          isMenuOpen ? 'text-white' : isHomePage ? 'text-[#005271]' : 'text-white'
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
            className={`w-[27vw] h-[5.6vh] m-[3vw] items-center justify-evenly ${desktopNavPillClass}`}
            style={
              isHomePage ? { backgroundColor: 'var(--navbar-bg)' } : undefined
            }
          >
            {/* Desktop links */}
            <button
              type="button"
              onClick={() => goToSection('home')}
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass} ${
                activeSection === 'home' ? 'font-black underline' : ''
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => goToSection('faq')}
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass} ${
                activeSection === 'faq' ? 'font-black underline' : ''
              }`}
            >
              FAQ
            </button>

            <button
              type="button"
              onClick={() => goToSection('sponsors')}
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass} ${
                activeSection === 'sponsors' ? 'font-black underline' : ''
              }`}
            >
              Sponsors
            </button>

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

      {/* Mobile overlay */}
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
                className={`${activeSection === 'home' ? 'font-bold underline' : ''}`}
                onClick={handleMobileNavClick('/')}
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className={`${activeSection === 'about' ? 'font-bold underline' : ''}`}
                onClick={handleMobileNavClick('/about-us')}
              >
                About
              </Link>

              <Link
                href="/#donate"
                className=""
                onClick={handleMobileNavClick('/#donate')}
              >
                Donate
              </Link>

              <Link
                href="/#faq"
                className={`${activeSection === 'faq' ? 'font-bold underline' : ''}`}
                onClick={handleMobileNavClick('/#faq')}
              >
                FAQ
              </Link>

              <Link
                href="/#sponsors"
                className={`${activeSection === 'sponsors' ? 'font-bold underline' : ''}`}
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