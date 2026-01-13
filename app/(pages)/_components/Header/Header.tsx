import Link from 'next/link';
export default function Header() {
  return (
    <div className="w-full flex items-start justify-between bg-transparent absolute top-0 left-0 z-10">
      <img src="/Images/hd_logo.svg" alt="HackDavis Logo" className="w-[4vw] block m-[2vw]" />
            <div className="ml-auto flex items-start gap-2">
        <div className="glass-pill w-[17vw] h-[5.6vh] m-[3vw] flex items-center justify-evenly">
          <Link href="/" className="text-[1vw] text-white uppercase font-[var(--font-metropolis)]">Home</Link>
          <Link href="/about-us" className="text-[1vw] text-white uppercase font-[var(--font-metropolis)] font-bold">About</Link>
        </div>
        <img src="/Images/mlh_badge.svg" alt="MLH Badge" className="w-[5vw] mr-[5vw] ml-[4vw] block" />
      </div>
    </div>
  );
}
