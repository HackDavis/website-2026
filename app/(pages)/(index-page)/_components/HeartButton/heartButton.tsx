'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeartButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group relative flex items-center overflow-hidden
        w-full h-full rounded-full
        bg-white border-2 border-[#D5E1E5]
        no-underline
        transition-[background] duration-300
        hover:flex-row-reverse
      "
    >
      <div
        className="
          relative z-10 shrink-0
          aspect-square h-full rounded-full
          shadow-[0px_9px_75px_rgba(0,0,0,0.75)]
        "
      >
        <Image
          src="/Images/reghero/HeartButton.svg"
          alt="heart"
          fill
          className="object-contain"
          priority
        />
      </div>

      <p
        className="
          flex-1 text-center
          rounded-full font-bold
          tracking-[0.32px]
          text-[14px] md:text-[16px]
          text-[var(--teal-1,#005271)]
        "
      >
        {text}
      </p>

      {/* overlay */}
      <span
        className="
          pointer-events-none absolute inset-0
          bg-[var(--background-light)] opacity-15
        "
      />
    </Link>
  );
}
