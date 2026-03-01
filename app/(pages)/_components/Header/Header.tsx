'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type SectionId = 'home' | 'faq' | 'sponsors' | 'about';
type AboutTheme = 'light' | 'dark' | 'teal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isAboutPage = pathname.startsWith('/about-us');
  const isHomePage = pathname === '/';

  const [aboutTheme, setAboutTheme] = useState<AboutTheme>('dark');

  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const lastUrlRef = useRef<string>('');
  const lastSectionRef = useRef<SectionId>('home');
  const rafRef = useRef<number | null>(null);
  const isNavigatingRef = useRef(false);

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
    isNavigatingRef.current = false;
  }, [pathname]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('mobile-menu-toggle', { detail: { open: isMenuOpen } })
    );
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isAboutPage) return;

    const headerOffset = 120;

    const getThemeFromEl = (el: Element): AboutTheme | null => {
      const t = el.getAttribute('data-header-theme');
      if (t === 'light' || t === 'dark' || t === 'teal') return t;
      return null;
    };

    const themedSections = Array.from(
      document.querySelectorAll('[data-header-theme]')
    ) as HTMLElement[];

    if (themedSections.length === 0) {
      setAboutTheme('dark');
      return;
    }

    const computeThemeFromScroll = () => {
      const scored = themedSections.map((el) => {
        const top = el.getBoundingClientRect().top;
        return { el, top, dist: Math.abs(top - headerOffset) };
      });

      const passed = scored
        .filter((s) => s.top <= headerOffset + 1)
        .sort((a, b) => b.top - a.top);

      const bestEl = (passed[0] ?? scored.sort((a, b) => a.dist - b.dist)[0])
        ?.el;

      if (!bestEl) return;

      const nextTheme = getThemeFromEl(bestEl);
      if (nextTheme) setAboutTheme(nextTheme);
    };

    computeThemeFromScroll();

    const onScroll = () => computeThemeFromScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(() => computeThemeFromScroll(), {
      root: null,
      threshold: [0, 0.01, 0.1],
    });

    themedSections.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [isAboutPage]);

  const linkTextClass = useMemo(() => {
    if (isHomePage) return 'text-[var(--text-dark-blue)]';

    if (isAboutPage) {
      if (aboutTheme === 'light') return 'text-[var(--text-dark-blue)]';
      if (aboutTheme === 'teal') return 'text-[#46D8E9]';
      return 'text-white'; // dark
    }

    return 'text-white';
  }, [isHomePage, isAboutPage, aboutTheme]);

  const desktopNavPillClass = useMemo(() => {
    if (isHomePage) return 'header-navbar';

    if (isAboutPage) {
      if (aboutTheme === 'light') {
        return 'glass-pill bg-[#005271]/20 border border-[#005271]/30 backdrop-blur-md backdrop-saturate-150 shadow-md';
      }
      if (aboutTheme === 'teal') {
        return 'glass-pill bg-[#005271]/70 backdrop-blur-md backdrop-saturate-150 shadow-md';
      }
      return 'glass-pill bg-black/30 backdrop-blur-md backdrop-saturate-150 shadow-md';
    }

    return 'glass-pill';
  }, [isHomePage, isAboutPage, aboutTheme]);

  const mobileHamburgerColorClass = useMemo(() => {
    if (isMenuOpen) return 'text-white';

    if (isHomePage) return 'text-[#005271]';

    if (isAboutPage) {
      if (aboutTheme === 'light') return 'text-[var(--text-dark-blue)]';
      if (aboutTheme === 'teal') return 'text-[#46D8E9]';
      return 'text-white';
    }

    return 'text-white';
  }, [isMenuOpen, isHomePage, isAboutPage, aboutTheme]);

  const goToSection = (id: 'home' | 'faq' | 'sponsors') => {
    if (pathname !== '/') {
      isNavigatingRef.current = true;
      router.push(id === 'home' ? '/' : `/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const nextUrl = id === 'home' ? '/' : `/#${id}`;
    if (lastUrlRef.current !== nextUrl) {
      lastUrlRef.current = nextUrl;
      history.replaceState(null, '', nextUrl);
    }
  };

  useEffect(() => {
    if (isAboutPage) {
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

    const headerOffset = 120;

    const setFromScrollPosition = () => {
      if (isNavigatingRef.current) return;
      if (sections.length === 0) return;

      const scored = sections.map((s) => {
        const top = s.el.getBoundingClientRect().top;
        return { id: s.id, top, dist: Math.abs(top - headerOffset) };
      });

      const passed = scored
        .filter((s) => s.top <= headerOffset + 1)
        .sort((a, b) => b.top - a.top);

      const best = (passed[0] ?? scored.sort((a, b) => a.dist - b.dist)[0])?.id;
      if (!best) return;

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

    setFromScrollPosition();

    const onHashChange = () => {
      requestAnimationFrame(() => setFromScrollPosition());
    };
    window.addEventListener('hashchange', onHashChange);

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        setFromScrollPosition();
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(() => setFromScrollPosition(), {
      root: null,
      threshold: [0, 0.01, 0.1],
    });
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
  }, [pathname, isAboutPage]);

  const handleMobileNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isMenuOpen) return;
      event.preventDefault();
      setIsMenuOpen(false);
      window.setTimeout(() => {
        isNavigatingRef.current = true;
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
        className={`absolute right-[5vw] top-[5vw] block md:hidden z-[60] mr-[7vw] mt-[1vw] h-8 w-8 pointer-events-auto transition-colors duration-300 ${mobileHamburgerColorClass}`}
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
              onClick={() => {
                isNavigatingRef.current = true;
              }}
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

              <Link
                href="/#donate"
                className=""
                onClick={handleMobileNavClick('/#donate')}
              >
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
