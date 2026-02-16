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
        text-[var(--text-light)] no-underline
        transition-[background,flex-direction] duration-300
        hover:flex-row-reverse
        border-2 border-[#D5E1E5]
        bg-white
      "
    >
      {/* static placeholder (hidden but preserves layout) */}
      <div className="relative aspect-square h-full rounded-full border-2 border-[#005271] invisible" />

      {/* animated heart coin */}
      <div
        className="
          absolute left-0 top-0 z-10
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

      <p
        className="w-full text-center transition-all
                    rounded-full
                    font-bold
                    tracking-[0.32px]
                    text-[14px]
                    md:text-[16px]
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
