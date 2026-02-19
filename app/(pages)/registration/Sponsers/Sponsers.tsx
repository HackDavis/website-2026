'use client';

import Image from 'next/image';

type Sponsor = { id: string; src?: string; url?: string; alt?: string };

function SponsorElement({ src, url, alt }: Sponsor) {
  return (
    <div
      className="
        relative flex-shrink-0
        bg-[#612D72]
        rounded-2xl
        w-[165px] h-[105px]
        sm:w-[195px] sm:h-[125px]
        md:w-[240px] md:h-[150px]
        lg:w-[285px] lg:h-[180px]
        flex items-center justify-center
      "
    >
      <div className="absolute inset-[10%]">
        <a
          href={url ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <Image
            src={src ?? '/Images/sponsers/abbottlogo.png'}
            alt={alt ?? 'Unknown sponsor logo'}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, (max-width: 1024px) 320px, 380px"
          />
        </a>
      </div>
    </div>
  );
}

function SponserRow({
  rowImages,
  rowNum,
  durationClass,
}: {
  rowImages: Sponsor[];
  rowNum: 1 | 2 | 3;
  durationClass?: string;
}) {
  // uses the NEW tailwind config animations:
  // animate-sponsor-left / animate-sponsor-right
  const anim = rowNum === 2 ? 'animate-sponsor-right' : 'animate-sponsor-left';

  // if list is short, repeat before the 2-copy marquee to avoid gaps
  const base =
    rowImages.length < 6
      ? [...rowImages, ...rowImages, ...rowImages]
      : rowImages;

  return (
    <div className="group w-full overflow-hidden">
      <div
        className={[
          'flex w-max items-center',
          'gap-6 sm:gap-8 md:gap-10',
          anim,
          durationClass ?? '',
          'group-hover:[animation-play-state:paused]',
        ].join(' ')}
      >
        {/* copy A */}
        {base.map((image) => (
          <SponsorElement key={`a-${image.id}`} {...image} />
        ))}
        {/* copy B (identical) */}
        {base.map((image) => (
          <SponsorElement key={`b-${image.id}`} {...image} />
        ))}
      </div>
    </div>
  );
}

export default function Sponsers() {
  const row1_images: Sponsor[] = [
    {
      id: 'ucdavis',
      src: '/Images/sponsers/ucd.png',
      url: 'https://www.ucdavis.edu/',
      alt: 'University of California Davis Logo',
    },
    {
      id: 'ucdcs',
      src: '/Images/sponsers/ucdcs.png',
      url: 'https://cs.ucdavis.edu/',
      alt: 'UC Davis Department of Computer Science Logo',
    },
    {
      id: 'ucdavis-again',
      src: '/Images/sponsers/ucd.png',
      url: 'https://www.ucdavis.edu/',
      alt: 'University of California Davis Logo',
    },
    {
      id: 'ucdcs-again',
      src: '/Images/sponsers/ucdcs.png',
      url: 'https://cs.ucdavis.edu/',
      alt: 'UC Davis Department of Computer Science Logo',
    },
  ];

  const row2_images: Sponsor[] = [
    {
      id: 'ucdavis-2',
      src: '/Images/sponsers/ucd.png',
      url: 'https://www.ucdavis.edu/',
      alt: 'University of California Davis Logo',
    },
    {
      id: 'ucdcs-2',
      src: '/Images/sponsers/ucdcs.png',
      url: 'https://cs.ucdavis.edu/',
      alt: 'UC Davis Department of Computer Science Logo',
    },
    {
      id: 'ucdavis-again-2',
      src: '/Images/sponsers/ucd.png',
      url: 'https://www.ucdavis.edu/',
      alt: 'University of California Davis Logo',
    },
    {
      id: 'ucdcs-again-2',
      src: '/Images/sponsers/ucdcs.png',
      url: 'https://cs.ucdavis.edu/',
      alt: 'UC Davis Department of Computer Science Logo',
    },
  ];

  const row3_images: Sponsor[] = [
    {
      id: 'ucdavis-3',
      src: '/Images/sponsers/ucd.png',
      url: 'https://www.ucdavis.edu/',
      alt: 'University of California Davis Logo',
    },
    {
      id: 'ucdcs-3',
      src: '/Images/sponsers/ucdcs.png',
      url: 'https://cs.ucdavis.edu/',
      alt: 'UC Davis Department of Computer Science Logo',
    },
    {
      id: 'ucdavis-again-3',
      src: '/Images/sponsers/ucd.png',
      url: 'https://www.ucdavis.edu/',
      alt: 'University of California Davis Logo',
    },
    {
      id: 'ucdcs-again-3',
      src: '/Images/sponsers/ucdcs.png',
      url: 'https://cs.ucdavis.edu/',
      alt: 'UC Davis Department of Computer Science Logo',
    },
  ];

  return (
    <div className="relative bg-darkpurple w-screen overflow-hidden">
      <div className="bg-[#11043F] md:bg-[#3F1959] py-6 md:py-10 flex flex-col gap-6 md:gap-8">
        {/* durations come from tailwind config:
            animate-sponsor-left (55s) / animate-sponsor-right (65s)
            If you want per-row speed, set them in config or I can show a CSS-var approach.
        */}
        <SponserRow rowImages={row1_images} rowNum={1} />
        <SponserRow rowImages={row2_images} rowNum={2} />
        <SponserRow rowImages={row3_images} rowNum={3} />
      </div>

      {/* Left cloud */}
      <div className="hidden md:block pointer-events-none absolute -top-40 -bottom-40 left-0 right-0 z-50">
        <Image
          src="/Images/sponsers/leftcloud.png"
          alt="Left cloud"
          fill
          className="object-contain object-left"
          priority
          sizes="100vw"
        />
      </div>

      {/* Right cloud */}
      <div className="hidden md:block pointer-events-none absolute -top-40 -bottom-40 left-0 right-0 z-10">
        <Image
          src="/Images/sponsers/rightcloud.png"
          alt="Right cloud"
          fill
          className="object-contain object-right"
          sizes="100vw"
        />
      </div>

    </div>
  );
}
