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
        border-2 border-[#bfcacd]
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
          src="/Images/Create/HeartButton.svg"
          alt="heart"
          fill
          className="object-contain"
          priority
        />
        {/* <Image
          src="/Images/reghero/ButtonHeart.svg"
          alt="heart"
          fill
        />
        <Image
          src="/Images/reghero/heart.svg"
          alt="Heart icon"
          width={24}
          height={24}
          className="h-[15px] w-[17px] object-contain break-625:h-[24px] break-625:w-[24px]"
        /> */}
      </div>

      <p className="w-full text-center font-bold transition-all">{text}</p>

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
