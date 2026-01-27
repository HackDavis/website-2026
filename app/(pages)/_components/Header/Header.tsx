'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <Image
        src="/Images/header/hd_logo.svg"
        alt="HackDavis Logo"
        width={200}
        height={200}
        className="hidden md:block w-[4vw] min-w-[48px] m-[2vw]"
      />
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
          <div className="glass-pill w-[17vw] h-[5.6vh] m-[3vw] items-center justify-evenly">
            <Link
              href="/?section="
              className="text-[1vw] text-white uppercase font-[var(--font-metropolis)]"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-[1vw] text-white uppercase font-[var(--font-metropolis)] font-bold"
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
