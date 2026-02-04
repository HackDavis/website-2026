'use client';
import React, { useState } from 'react';
import Image from 'next/image';
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

export default function Stats() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="stats-section relative w-full h-[1200px] ">
      <div className="relative w-full h-full">
        {/* Top Left - Scissors */}
        <div className="absolute left-[-10%] top-[-10%] w-[38%] max-w-92">
          <Image src={scissors} alt="Scissors" className="w-full h-auto" />
        </div>

        {/* Top area - Cross (lime green) */}
        <div className="absolute top-[30%] left-[20%] w-[15%] max-w-64">
          <Image src={cross_lime} alt="Cross" className="w-full h-auto" />
        </div>

        {/* Circle of Circles (cyan) */}
        <div className="absolute top-[20%] left-[35%] w-[12%] max-w-40">
          <Image
            src={circle_of_circles_cyan}
            alt="Circle of Circles"
            className="w-full h-auto"
          />
        </div>

        {/* Green Flower Thing */}
        <div className="absolute top-[15%] left-[89%] w-[10%] max-w-32">
          <Image src={flower_thing} alt="Flower" className="w-full h-auto" />
        </div>

        {/* Projects */}
        <div className="absolute top-[25%] left-[46%] w-[28%] max-w-80">
          <Image
            src={projects_count}
            alt="Projects Count"
            width={200}
            className="w-full h-auto"
          />
        </div>

        {/* Hackers */}
        <div className="absolute top-[23%] left-[65%] w-[32%] max-w-2xl">
          <Image
            src={hackers_count}
            alt="Hackers Count"
            className="w-full h-auto"
          />
        </div>

        {/* Time Count */}
        <div className="absolute top-[38%] left-[30%] w-[20%] max-w-92">
          <Image src={time_count} alt="Time Count" className="w-full h-auto" />
        </div>

        {/* Prize Amount */}
        <div className="absolute top-[74%] right-[23%] w-[17%] max-w-100">
          <Image
            src={prize_amount}
            alt="Prize Amount"
            className="w-full h-auto"
          />
        </div>

        {/* Sponsor Button */}
        <div
          className="absolute top-[60%] left-[46%] w-[18%] max-w-100 cursor-pointer transition-all"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? sponsor_button_hover : sponsor_button}
            alt="Sponsor 2026"
            className="w-full h-auto"
          />
        </div>

        {/* Circle of Circles Pink */}
        <div className="absolute top-[53%] right-[0%] w-[12%] max-w-24">
          <Image
            src={circle_of_circles_pink}
            alt="Circle of Circles"
            className="w-full h-auto"
          />
        </div>

        {/* Cross Cyan */}
        <div className="absolute top-[80%] right-[10%] w-[8%] max-w-48">
          <Image src={cross_cyan} alt="Cross" className="w-full h-auto" />
        </div>

        {/* Squiggly Circle Yellow */}
        <div className="absolute top-[55%] left-[6%] w-[10%] max-w-24">
          <Image
            src={squiggly_circle_yellow}
            alt="Circle"
            className="w-full h-auto"
          />
        </div>

        {/* Squiggly Circle Pink */}
        <div className="absolute top-[55%] left-[16%] w-[10%] max-w-48">
          <Image
            src={squiggly_circle_pink}
            alt="Circle"
            className="w-full h-auto"
          />
        </div>

        {/* Bottom Left - Tape (diagonal) */}
        <div className="absolute top-[72%] left-[5%] w-[30%] max-w-100">
          <Image src={tape} alt="Tape" className="w-full h-auto" />
        </div>

        {/* Bottom Left - Tape (diagonal) */}
        <div className="absolute top-[62%] left-[27%] w-[35%] max-w-164 z-[-1]">
          <Image
            src={background_gradient}
            alt="Tape"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
