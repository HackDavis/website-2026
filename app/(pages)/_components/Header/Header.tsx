import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full flex items-start justify-between bg-transparent absolute top-0 left-0 z-20">
      <Image
        src="/Images/hd_logo.svg"
        alt="HackDavis Logo"
        width={200}
        height={200}
        className="w-[4vw] min-w-[48px] block m-[2vw]"
      />
      <div className="ml-auto flex items-start gap-2">
        <div className="glass-pill w-[17vw] h-[5.6vh] m-[3vw] flex items-center justify-evenly">
          <Link
            href="/"
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
        <Image
          src="/Images/mlh_badge.svg"
          alt="MLH Badge"
          width={220}
          height={220}
          className="w-[5vw] mr-[5vw] ml-[4vw] block"
        />
      </div>
    </div>
  );
}
