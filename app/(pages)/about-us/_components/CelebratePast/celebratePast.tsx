'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

  const picture = (
    <div className="w-[18cqw] h-[18cqw] relative overflow-hidden">
      <Image src={path} alt={alt} fill className="object-cover" />
    </div>
  );

  const frame = (
    <div
      className={`p-[0.8cqw] pb-[5cqw] absolute flex justify-center items-center ${
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
          : ''
      }`}
    >
      {picture}
    </div>
  );

  return frame;
}

export default function CelebratePast() {
  // REPLACE
  const [images, setImages] = useState([
    { path: '/placeholder.jpg', alt: 'i like among us' },
    { path: '/anotherplaceholder.png', alt: 'its pretty cool' },
    { path: '/clouds.jpg', alt: 'cheese is also cool' },
    { path: '/realclouds.jpg', alt: 'amongsus' },
    { path: '/frog.png', alt: 'among us!!!' },
  ]);

  useEffect(() => {
    const handleAnimationEnd = (e: AnimationEvent) => {
      if (e.animationName === 'picture1') {
        setImages((prev) => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
      }
    };

    document.addEventListener('animationend', handleAnimationEnd);

    return () => {
      document.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="container-type-inline-size pt-[3cqw] pb-[8cqw] rounded-[8cqw] shadow-[2cqw_2cqw_0_0_#A6BFC7] outline outline-[0.3cqw] outline-[#A6BFC7] md:outline-[0cqw] flex flex-col items-center bg-[#E5EEF1] place-content-center">
      <div className="p-[2cqw] flex flex-col items-center">
        <div className="py-[0.5cqw] text-center">
          <p className="text-[5cqw] md:text-[3cqw] leading-tight text-[#123041] font-bold font-montserrat">
            Come celebrate
            <br className="md:hidden" /> our past with us!
          </p>
        </div>
        <div className="py-[0.5cqw] text-center">
          <p className="text-[2.4cqw] md:text-[1.2cqw] text-[#123041] font-jakarta">
            We truly could not have done any of this
            <br className="md:hidden" /> without you. Your support means the
            world!
          </p>
        </div>
      </div>
      <div className="h-[50cqw] relative flex items-center justify-center">
        {images.map((image, index) => (
          <Pictures
            key={`${image.path}-${index}`}
            path={image.path}
            alt={image.alt}
            order={index + 1}
          />
        ))}
      </div>
      <button className="px-[3cqw] py-[1cqw] md:px-[1.5cqw] md:py-[.5cqw] rounded-full bg-[#123041] text-[#F9FBFC]">
        <p className="text-[3cqw] md:text-[1.3cqw] font-medium font-jakarta tracking-wide">
          VIEW 2025 WINNERS
        </p>
      </button>
    </div>
  );
}
