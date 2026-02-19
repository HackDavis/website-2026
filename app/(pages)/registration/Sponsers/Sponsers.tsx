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
        w-[220px] h-[150px]
        sm:w-[260px] sm:h-[170px]
        md:w-[320px] md:h-[200px]
        lg:w-[380px] lg:h-[240px]
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
            sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
          />
        </a>
      </div>
    </div>
  );
}

function SponserRow({
  rowImages,
  rowNum,
}: {
  rowImages: Sponsor[];
  rowNum: 1 | 2 | 3;
}) {
  // row 1 + 3 go left, row 2 goes right (adjust if you want)
  const anim =
    rowNum === 2 ? 'sponsor-marquee-right' : 'sponsor-marquee-left';

  // If your list is short, repeat it BEFORE we do the 2-copy marquee
  // (this prevents empty gaps on large screens)
  const base =
    rowImages.length < 6 ? [...rowImages, ...rowImages, ...rowImages] : rowImages;

  return (
    <div className="group w-full overflow-hidden">
      <div
        className={[
          'flex w-max items-center',
          'gap-6 sm:gap-8 md:gap-10',
          anim,
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

      {/* local CSS so you don't have to touch tailwind.config */}
      <style jsx global>{`
        @keyframes sponsorMarqueeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes sponsorMarqueeRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .sponsor-marquee-left {
          animation: sponsorMarqueeLeft 50s linear infinite;
          will-change: transform;
        }

        .sponsor-marquee-right {
          animation: sponsorMarqueeRight 50s linear infinite;
          will-change: transform;
        }
      `}</style>
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
      <div className="bg-transparent md:bg-[#3F1959] py-6 md:py-10 flex flex-col gap-6 md:gap-8">
        <SponserRow rowImages={row1_images} rowNum={1} />
        <SponserRow rowImages={row2_images} rowNum={2} />
        <SponserRow rowImages={row3_images} rowNum={3} />
      </div>

      {/* Left cloud */}
      <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-full h-[min(70vh,700px)] -translate-y-6 -translate-x-2 z-10">
        <Image
          src="/Images/sponsers/leftcloud.png"
          alt="Purple cloud wrapping around the left side of the sponsors"
          fill
          className="object-contain object-left"
          priority
          sizes="100vw"
        />
      </div>

      {/* Right cloud */}
      <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-full h-[min(70vh,700px)] -translate-y-20 z-10">
        <Image
          src="/Images/sponsers/rightcloud.png"
          alt="Purple cloud wrapping around the right side of the sponsors"
          fill
          className="object-contain object-right"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
