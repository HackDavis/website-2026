'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Img = { path: string; alt: string };

function Pictures({
  path,
  alt,
  order,
}: {
  path: string;
  alt: string;
  order: number;
}) {
  if (order > 5) return null;

  const animClass =
    order === 1
      ? 'animate-picture1 bg-[#DCE3EA]'
      : order === 2
      ? 'animate-picture2 bg-[#BDC7D0]'
      : order === 3
      ? 'animate-picture3 bg-[#BDC7D0]'
      : order === 4
      ? 'animate-picture4 bg-[#BDC7D0]'
      : order === 5
      ? 'animate-picture5 bg-[#BDC7D0]'
      : '';

  return (
    <div
      className={`absolute left-1/2 top-1/2 will-change-transform flex justify-center items-center p-[1.1vw] pb-[6vw] md:p-[0.6vw] md:pb-[4vw] rounded-[5px] shadow-[4px_4px_0_0_#A6BFC7] ${animClass}`}
    >
      <div className="w-[25vw] h-[25vw] sm:w-[14vw] sm:h-[14vw] relative overflow-hidden">
        <Image src={path} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

export default function CelebratePast() {
  const [images, setImages] = useState<Img[]>([
    { path: '/Images/celebrateus/One.jpeg', alt: 'the goated three' },
    {
      path: '/Images/celebrateus/Two.jpg',
      alt: 'hackdavis directors smiling for a photo',
    },
    {
      path: '/Images/celebrateus/Three.jpg',
      alt: 'close up of hackers looking at their computers',
    },
    {
      path: '/Images/celebrateus/Four.jpg',
      alt: 'ucd arc pavilion full of hackers',
    },
    {
      path: '/Images/celebrateus/Five.jpg',
      alt: 'two individuals posing next to hackdavis cow mascot',
    },
  ]);

  useEffect(() => {
    // match this interval to CSS animation duration
    const DURATION_MS = 3000;
    const id = window.setInterval(() => {
      setImages((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, DURATION_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="m-[10%] py-[5%] rounded-[6vw] shadow-[1.5vw_1.5vw_0_0_#A6BFC7] outline outline-[2px] outline-[#A6BFC7] flex flex-col items-center bg-[#E5EEF1] place-content-center">
      {/* text */}
      <div className="flex flex-col items-center">
        <div className="py-[0.5vw] text-center">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-none text-[#123041] text-center">
            Come celebrate
            <br className="md:hidden" /> our past with us!
          </p>
        </div>
        <div className="py-[0.5vw] text-center ">
          <p className="mt-2 text-[var(--text-dark)] leading-snug text-[14px] sm:text-base lg:text-lg font-jakarta">
            We truly could not have done any of this
            <br className="md:hidden" /> without you. Your support means the
            world!
          </p>
        </div>
      </div>

      <div className="h-[45vw] md:h-[28vw] relative flex items-center justify-center">
        {images.map((image, index) => (
          <Pictures
            // key={`${image.path}-${index}`}
            key={image.path}
            path={image.path}
            alt={image.alt}
            order={index + 1}
          />
        ))}
      </div>

      <button className="px-[6%] py-[2%] md:px-[4%] md:py-[1%] rounded-full bg-[#123041] text-[#F9FBFC]">
        <a
          href="https://hackdavis-2025.devpost.com/project-gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-[3vw] md:text-[1.2vw] font-medium font-jakarta tracking-wide">
            VIEW 2025 WINNERS
          </p>
        </a>
      </button>
    </div>
  );
}
