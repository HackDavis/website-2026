'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === '/about-us';
  const isHomePage = pathname === '/';
  const linkTextClass = isAboutPage
    ? 'text-white'
    : 'text-[var(--text-dark-blue)]';

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`w-full flex flex-col items-start justify-start bg-transparent absolute top-0 left-0 pl-4 md:pl-0 md:ml-auto md:flex-row md:items-start md:justify-between ${
        isMenuOpen ? 'z-[60]' : 'z-20'
      }`}
    >
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
        className="absolute right-[5vw] top-[5vw] block md:hidden z-[60]"
      >
        <Image
          src={
            isMenuOpen
              ? '/Images/header/white_x.svg'
              : '/Images/header/mobile_hamburger.svg'
          }
          alt=""
          width={40}
          height={40}
        />
      </button>
      <div className="w-full flex items-center justify-start md:ml-auto md:w-auto md:items-start md:justify-end md:gap-2">
        <div className="hidden md:flex">
          <div
            className={`w-[27vw] h-[5.6vh] m-[3vw] items-center justify-evenly glass-pill`}
            style={
              isHomePage ? { backgroundColor: 'var(--navbar-bg)' } : undefined
            }
          >
            <Link
              href="/?section="
              className={`text-[1vw] uppercase font-black underline font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass}`}
            >
              Home
            </Link>
            <Link
              href="/"
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass}`}
            >
              FAQ
            </Link>
            <Link
              href="/"
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass}`}
            >
              Sponsors
            </Link>
            <Link
              href="/about-us"
              className={`text-[1vw] uppercase font-[var(--font-metropolis)] mx-[1vw] ${linkTextClass}`}
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
          className="block ml-[5vw] w-[10vw] max-w-[100px] md:ml-0 md:w-[5vw] md:mr-[5vw]"
        />
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center bg-black/50 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center gap-10 px-6 pt-[16vh]">
            <Image
              src="/Images/header/hd_logo.svg"
              alt="HackDavis Logo"
              width={160}
              height={160}
            />
            <nav className="flex flex-col items-center gap-7 text-white font-[var(--font-metropolis)] uppercase text-lg">
              <Link href="/" className="font-bold">
                Home
              </Link>
              <Link href="/about-us">About</Link>
              <Link href="/donate">Donate</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/sponsors">Sponsors</Link>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
