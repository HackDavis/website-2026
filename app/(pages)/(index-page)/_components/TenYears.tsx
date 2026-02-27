'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useParallax, PARALLAX_SPEEDS, getParallaxStyle } from '@app/(pages)/_hooks/useParallax';

// Helper to scale all numbers in the path
function scalePath(path: string, scale: number) {
  return path.replace(/([0-9.]+)/g, (num) => `${parseFloat(num) * scale}`);
}

function FlyingMascot({
  mascot,
  scrollYProgress,
  wavePath,
}: {
  mascot: { src: string; alt: string; start: number; end: number };
  scrollYProgress: any;
  wavePath: string;
}) {
  const progress = useTransform(
    scrollYProgress,
    [0, 0.7], // defines the scroll range over which the mascot will move
    [`${(1 - mascot.start) * 100}%`, `${(1 - mascot.end) * 100}%`]
  );

  return (
    <motion.div
      style={{
        offsetPath: `path('${wavePath}')`,
        offsetDistance: progress,
        offsetRotate: '0deg',
        x: '-50%',
        y: '-50%',
      }}
      className="hidden md:block absolute top-0 left-0"
    >
      <Image
        src={mascot.src}
        alt={mascot.alt}
        width={80}
        height={80}
        className="md:w-12 lg:w-15 xl:w-20 h-auto"
      />
    </motion.div>
  );
}

export default function TenYears() {
  const waveWrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const { mousePosition, containerRef } = useParallax();
  const { littleShape } = PARALLAX_SPEEDS;

  // track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // scale the wave and mascots based on the height of the wave wrapper
  useEffect(() => {
    if (!waveWrapperRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      setScale(height / 429); // original SVG height
    });

    resizeObserver.observe(waveWrapperRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const mascots = [
    {
      src: '/home/tenyears/flying-rabbit.svg',
      alt: 'Bunny',
      start: 0.45,
      end: 0.85,
    },
    {
      src: '/home/tenyears/flying-chicken.svg',
      alt: 'Duck',
      start: 0.5,
      end: 0.9,
    },
    {
      src: '/home/tenyears/flying-frog.svg',
      alt: 'Frog',
      start: 0.55,
      end: 0.95,
    },
    {
      src: '/home/tenyears/flying-cow.svg',
      alt: 'Cow',
      start: 0.6,
      end: 1,
    },
  ];

  const wavePath =
    'M131 409C131 409 285.299 340.014 256.392 221.784C230.003 113.851 110.376 62.4755 20 20C101.525 64.7392 194.54 116.442 211.469 215.913C228.556 316.312 131 409 131 409';
  const scaledWavePath = scalePath(wavePath, scale);

  return (
    <div ref={containerRef} className="relative flex flex-col">
      <div
        ref={waveWrapperRef}
        className="absolute top-[15%] sm:top-[10%] left-[55%] sm:left-[50%]"
      >
        <Image
          src="/home/tenyears/wave.svg"
          alt="Light green wave"
          width={280}
          height={429}
          className="h-[240px] sm:h-[500px] xl:h-[895px] w-auto"
          style={getParallaxStyle(mousePosition, littleShape)}
        />

        {mascots.map((mascot, index) => (
          <FlyingMascot
            key={index}
            mascot={mascot}
            scrollYProgress={scrollYProgress}
            wavePath={scaledWavePath}
          />
        ))}
      </div>

      <Image
        src="/home/tenyears/cheers.svg"
        alt="Cheers to 10 years!"
        width={110}
        height={144}
        className="object-cover w-[400px] sm:w-[525px] xl:w-[872px] mt-[40%] sm:mt-[20%] md:mt-[15%] lg:ml-[10%] z-10"
      />

      <Image
        src="/home/tenyears/sm-pink-flower.svg"
        alt="Small Pink Flower"
        width={110}
        height={144}
        className="absolute right-[20%] sm:right-[2%] -bottom-[10%] sm:bottom-[10%] md:bottom-[20%] w-[70px] xl:w-[120px] h-auto ml-auto sm:-mr-4"
        style={getParallaxStyle(mousePosition, littleShape)}
      />
    </div>
  );
}
