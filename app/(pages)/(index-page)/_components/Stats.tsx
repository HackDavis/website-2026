'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import circle_of_circles_pink from '@public/home/stats/circle_of_circles_pink.svg';
import circle_of_circles_cyan from '@public/home/stats/circle_of_circles_cyan.svg';
import cross_lime from '@public/home/stats/cross_lime.svg';
import cross_cyan from '@public/home/stats/cross_cyan.svg';
import flower_thing from '@public/home/stats/flower_thing.svg';
import hackers_count from '@public/home/stats/hackers_count.svg';
import projects_count from '@public/home/stats/projects_count.svg';
import prize_amount from '@public/home/stats/prize_amount.svg';
import scissors from '@public/home/stats/scissors.svg';
import sponsor_button from '@public/home/stats/sponsor_button.svg';
import sponsor_button_hover from '@public/home/stats/sponsor_button_hover.svg';
import tape from '@public/home/stats/tape.svg';
import time_count from '@public/home/stats/time_count.svg';
import squiggly_circle_pink from '@public/home/stats/squiggly_circle_pink.svg';
import squiggly_circle_yellow from '@public/home/stats/squiggly_circle_yellow.svg';
import background_gradient from '@public/home/stats/background_gradient.svg';
import {
  useParallax,
  PARALLAX_SPEEDS,
  getParallaxStyle,
} from '@app/(pages)/_hooks/useParallax';

export default function Stats() {
  const [isHovered, setIsHovered] = useState(false);

  const { mousePosition, containerRef } = useParallax();
  const { bigShape, mediumShape, littleShape, extraTiniTiny } = PARALLAX_SPEEDS;

  return (
    <div
      ref={containerRef}
      className="stats-section relative w-full h-[1200px] sm:h-[1400px] md:max-h-screen md:h-screen overflow-x-clip "
    >
      <div className="relative w-full h-full">
        {/* Top Left - Scissors */}
        <div className="absolute md:left-[-10%] md:top-[calc(25%-21vw)] w-[38%] max-w-92 hidden md:block">
          <Image src={scissors} alt="Scissors" className="w-full h-auto" />
        </div>

        {/* Top area - Cross (lime green) */}
        <div
          className="absolute md:top-[30%] md:left-[20%] md:w-[15%] md:max-w-64 sm:top-[35%] sm:left-[-15%] top-[30%] left-[-15%] w-[30%]"
          style={getParallaxStyle(mousePosition, bigShape)}
        >
          <Image
            src={cross_lime}
            alt="Cross"
            className="w-full h-auto"
            style={{ animation: 'spin 30s linear infinite' }}
          />
        </div>

        {/* Circle of Circles (cyan) */}
        <div className="absolute md:top-[20%] md:left-[35%] md:w-[12%] md:max-w-40 hidden md:block">
          <Image
            src={circle_of_circles_cyan}
            alt="Circle of Circles"
            className="w-full h-auto"
            style={getParallaxStyle(mousePosition, mediumShape)}
          />
        </div>

        {/* Green Flower Thing */}
        <div className="absolute md:top-[15%] md:left-[89%] md:w-[10%] md:max-w-32 sm:right-[-7%] sm:top-[13%] right-[-7%] top-[9%]">
          <Image
            src={flower_thing}
            alt="Flower"
            className="w-full h-auto"
            style={getParallaxStyle(mousePosition, littleShape)}
          />
        </div>

        {/* Projects w-[16%] md:w-[24%] lg: xs:max-w-24  md:max-w-48 lg:*/}
        <div className="absolute md:top-[25%] md:right-[34%] md:w-[20vw] sm:right-[55%] sm:top-[4%] sm:w-[45vw] w-[40vw] right-[50vw] top-[5%]">
          <Image
            src={projects_count}
            alt="Projects Count"
            className="w-full h-auto"
          />
        </div>

        {/* Hackers */}
        <div className="absolute md:top-[23%] md:left-[65%] md:w-[32%] md:max-w-2xl sm:right-[-17%] sm:top-[19%] sm:max-w-xl sm:w-[90%] right-[-15%] max-w-lg w-[90vw] top-[16%]">
          <Image
            src={hackers_count}
            alt="Hackers Count"
            className="w-full h-auto"
          />
        </div>

        {/* Time Count */}
        <div className="absolute md:top-[38%] md:left-[30%] md:w-[20%] md:max-w-92 sm:top-[43%] sm:left-[-1%] top-[37%] left-[-5vw] w-[60vw]">
          <Image src={time_count} alt="Time Count" className="w-full h-auto" />
        </div>

        {/* Prize Amount  md:top-[74%]*/}
        <div className="absolute md:top-[calc(34%+21vw)] md:right-[23%] md:w-[17%] md:max-w-100 sm:top-[70%] sm:right-[5%] top-[63%] right-[0vw] w-[50vw]">
          <Image
            src={prize_amount}
            alt="Prize Amount"
            className="w-full h-auto"
          />
        </div>

        {/* Sponsor Button */}
        <Link
          href="mailto:team@hackdavis.io"
          target="_blank"
          className="absolute md:top-[calc(25%+21vw)] md:left-[46%] md:w-[20vw] cursor-pointer transition-all sm:max-w-128 sm:w-[50vw] sm:top-[60%] sm:right-[25%] top-[54%] max-w-56 right-[25vw] w-[40vw]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? sponsor_button_hover : sponsor_button}
            alt="Sponsor 2026"
            className="w-full h-auto"
          />
        </Link>

        {/* Circle of Circles Pink */}
        <div className="absolute md:top-[53%] right-[0%] md:w-[8vw] md:max-w-20 sm:top-[57%] sm:max-w-20 max-w-16 w-[20vw] top-[50%]">
          <Image
            src={circle_of_circles_pink}
            alt="Circle of Circles"
            className="w-full h-auto"
            style={getParallaxStyle(mousePosition, bigShape)}
          />
        </div>

        {/* Cross Cyan */}
        <div
          className="absolute md:top-[calc(45%+21vw)] md:right-[10%] md:w-[8vw] md:max-w-48 md:rotate-0 sm:top-[81%] sm:right-[60%] sm:w-[28%] top-[75%] right-[55%] rotate-[45deg]"
          style={getParallaxStyle(mousePosition, littleShape)}
        >
          <Image
            src={cross_cyan}
            alt="Cross"
            className="w-full h-auto"
            style={{ animation: 'spin 30s linear infinite reverse' }}
          />
        </div>

        {/* Squiggly Circle Yellow */}
        <div
          className="absolute md:top-[calc(20%+20vw)] md:left-[5vw] md:w-[10vw] md:max-w-20 sm:top-[68%] sm:max-w-24 sm:w-[20%] sm:left-[5%] left-[5vw] top-[65%]"
          style={getParallaxStyle(mousePosition, extraTiniTiny)}
        >
          <Image
            src={squiggly_circle_yellow}
            alt="Circle"
            className="w-full h-auto"
            style={{ animation: 'spin 25s linear infinite reverse' }}
          />
        </div>

        {/* Squiggly Circle Pink */}
        <div className="hidden md:block absolute md:top-[calc(35%+12vw)] md:left-[16%] md:w-[10%] md:max-w-48">
          <Image
            src={squiggly_circle_pink}
            alt="Circle"
            className="w-full h-auto"
            style={getParallaxStyle(mousePosition, littleShape)}
          />
        </div>

        {/* Bottom Left - Tape (diagonal) */}
        <div className="absolute md:top-[calc(32%+21vw)] md:left-[5%] md:w-[30%] md:max-w-100 hidden md:block">
          <Image src={tape} alt="Tape" className="w-full h-auto" />
        </div>

        {/* Background gradient */}
        <div className="absolute md:top-[62%] md:left-[27%] md:w-[35%] md:max-w-164 z-[-1] top-[76%] left-[5%] w-[80vw]">
          <Image
            src={background_gradient}
            alt="Tape"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
