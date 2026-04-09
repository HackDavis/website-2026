'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import rawEvents from '@data/hub-2026-staging.events.json';

import bunny from '@public/Images/upcoming/bunny.svg';
import cow from '@public/Images/upcoming/cow.svg';
import froggie from '@public/Images/upcoming/froggie.svg';
import yellowStar from '@public/Images/upcoming/yellow_star.svg';
import scissors from '@public/Images/upcoming/scissors.svg';
import mochinut from '@public/Images/upcoming/mochinut.svg';
import ditto from '@public/Images/upcoming/ditto.svg';
import greenFlower from '@public/Images/upcoming/green_flower.svg';

interface UpcomingTimelineProps {
  className?: string;
}

interface RawUpcomingEvent {
  name: string;
  type: string;
  start_time: { $date: string };
}

interface UpcomingEvent {
  id: string;
  name: string;
  startTime: Date;
}

const DISPLAY_LIMIT = 3;

const formatEventTime = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);

const allEvents = (rawEvents as RawUpcomingEvent[]).map((event, index) => ({
  id: `${index}-${event.name}-${event.start_time.$date}`,
  name: event.name,
  type: (event.type || '').toUpperCase(),
  startTime: new Date(event.start_time.$date),
}));

export default function UpcomingTimeline({ className }: UpcomingTimelineProps) {
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNowMs(Date.now());
    }, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const upcomingGeneralEvents = useMemo<UpcomingEvent[]>(
    () =>
      allEvents
        .filter(
          (event) =>
            event.type === 'GENERAL' && event.startTime.getTime() > nowMs
        )
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime())
        .slice(0, DISPLAY_LIMIT),
    [nowMs]
  );

  return (
    <section
      id="upcoming-events"
      className={`relative z-0 mt-32 mb-44 w-full overflow-x-clip bg-[#FAFAFA] py-16 md:mt-36 md:mb-36 md:py-20 ${
        className ?? ''
      }`}
    >
      <Image
        src={scissors}
        alt=""
        className="pointer-events-none absolute -left-2 -top-52 -z-10 hidden w-[320px] opacity-60 md:block md:w-[420px]"
      />
      <Image
        src={greenFlower}
        alt=""
        className="pointer-events-none absolute right-[14%] -top-28 -z-10 w-32 md:w-40"
      />
      <Image
        src={mochinut}
        alt=""
        className="pointer-events-none absolute bottom-20 -z-10 w-25 md:w-25"
      />
      <Image
        src={ditto}
        alt=""
        className="pointer-events-none absolute -right-5 -bottom-40 -z-10 w-27 md:-bottom-60 md:w-35"
      />

      <div className="relative z-10 grid w-full grid-cols-1 gap-[4rem] md:grid-cols-2 md:items-start">
        <div className="flex w-full pl-4 pr-4 md:pl-[103px] md:pr-0">
          <div className="w-full">
            <h2 className="font-[var(--font-metropolis)] text-[30px] font-semibold leading-normal tracking-[0.6px] text-[#005271]">
              Upcoming Timeline
            </h2>

            <div className="mt-6 space-y-5">
              {upcomingGeneralEvents.length > 0 ? (
                upcomingGeneralEvents.map((event) => (
                  <article
                    key={event.id}
                    className="w-full rounded-[20px] border border-[#D3D4DA] bg-[#FAFAFF] px-6 py-5 md:px-7 md:py-6"
                  >
                    <p className="font-[var(--font-metropolis)] text-[18px] font-normal uppercase leading-[145%] tracking-[0.36px] text-[#A5A5A5]">
                      {formatEventTime(event.startTime)}
                    </p>
                    <h3 className="mt-2 font-jakarta text-[24px] font-medium leading-normal text-[#000000]">
                      {event.name}
                    </h3>
                  </article>
                ))
              ) : (
                <article className="w-full rounded-[20px] border border-[#D3D4DA] bg-[#FAFAFF] px-6 py-7 md:px-7">
                  <p className="font-[var(--font-metropolis)] text-[1.7rem] font-semibold text-[#4D4E59]">
                    No upcoming general events yet
                  </p>
                </article>
              )}
            </div>
          </div>
        </div>

        <div className="grid h-[500px] grid-rows-2 gap-8 overflow-visible md:h-[620px] md:gap-10">
          <div className="flex items-end justify-end gap-6 md:gap-8">
            <Image
              src={bunny}
              alt="Bunny tile artwork"
              className="h-auto w-[72%] max-w-[560px]"
            />
            <Image
              src={yellowStar}
              alt="Yellow star tile artwork"
              className="h-auto w-[22%] min-w-[95px] max-w-[180px]"
            />
          </div>

          <div className="flex items-start justify-end gap-6 md:gap-8">
  <Image
    src={cow}
    alt="Cow tile artwork"
    className="h-auto w-auto max-w-[160px] shrink-0 lg:max-w-[250px]"
  />
  <Image
    src={froggie}
    alt="Frog tile artwork"
    className="h-auto w-auto shrink-0 max-h-[175px] object-contain lg:max-h-[311px]"
  />
</div>
        </div>
      </div>
    </section>
  );
}
