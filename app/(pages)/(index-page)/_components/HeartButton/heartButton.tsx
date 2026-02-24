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
        group relative w-full h-full
        flex items-center overflow-hidden
        rounded-full
        transition-[background,flex-direction] duration-300
        bg-[#EDF2F3]
        text-[var(--teal-1,#005271)]
        hover:bg-[var(--teal-1,#005271)]
        hover:text-white
        hover:flex-row-reverse
        no-underline
      "
    >
      {/* invisible placeholder (preserves layout width) */}
      <div className="relative aspect-square h-full rounded-full invisible" />

      {/* animated heart coin */}
      <div
        className="
          heart-animated
          absolute left-0 top-0
          aspect-square h-full rounded-full
          shadow-[0px_9px_75px_rgba(0,0,0,0.75)]
          group-hover:animate-slide-right
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

      {/* text */}
      <h4
        className="
          w-full text-center
          font-bold
          tracking-[0.32px]
          text-[14px] md:text-[16px]
        "
      >
        {text}
      </h4>

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
