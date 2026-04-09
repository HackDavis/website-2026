'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import rawScheduleEvents from '@data/hub-2026-staging.events.json';
import Event, { EventTag, EventType } from '@data/event';
import CalendarItem from './CalendarItem';
import {
  formatCountdown,
  getScheduleEventEndTime,
  isScheduleEventLive,
} from './scheduleTime';

import duckBunny from '@public/schedule/duck+bunny.svg';
import duckFrog from '@public/schedule/duck+frog.svg';

interface ScheduleSneakPeekProps {
  className?: string;
}

interface RawScheduleEvent {
  name: string;
  host?: string;
  type: string;
  location?: string;
  start_time: { $date: string };
  end_time?: { $date: string };
  tags?: string[];
}

const VALID_EVENT_TYPES: EventType[] = [
  'GENERAL',
  'ACTIVITIES',
  'WORKSHOPS',
  'MEALS',
  'RECOMMENDED',
];
const DISPLAY_TYPES = new Set<EventType>(['ACTIVITIES', 'WORKSHOPS', 'MEALS']);
const VALID_TAGS: EventTag[] = [
  'developer',
  'designer',
  'pm',
  'other',
  'beginner',
];

const isEventType = (value: string): value is EventType =>
  VALID_EVENT_TYPES.includes(value as EventType);

const isEventTag = (value: string): value is EventTag =>
  VALID_TAGS.includes(value as EventTag);

const normalizeScheduleEvent = (
  event: RawScheduleEvent,
  index: number
): Event => {
  const start = new Date(event.start_time.$date);
  const end = event.end_time ? new Date(event.end_time.$date) : undefined;
  const normalizedType = (event.type || 'GENERAL').toUpperCase();
  const type = isEventType(normalizedType) ? normalizedType : 'GENERAL';
  const tags = event.tags?.filter(isEventTag);
  const eventId = `${index}-${event.name}-${start.getTime()}`;

  return {
    _id: eventId,
    name: event.name,
    host: event.host,
    type,
    location: event.location,
    start_time: start,
    end_time: end,
    tags,
  };
};

const normalizedEvents = (rawScheduleEvents as RawScheduleEvent[])
  .map((event, index) => normalizeScheduleEvent(event, index))
  .sort(
    (a, b) =>
      new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
  );

const displayableEvents = normalizedEvents.filter((event) =>
  DISPLAY_TYPES.has(event.type)
);

const estimateAttendeeCount = (event: Event): number | undefined => {
  if (event.type !== 'WORKSHOPS') return undefined;
  const seedSource = event._id ?? event.name;
  const hash = Array.from(seedSource).reduce(
    (total, character) => total + character.charCodeAt(0),
    0
  );
  return 8 + (hash % 19);
};

function EmptyState({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: React.ComponentProps<typeof Image>['src'];
  imageAlt: string;
}) {
  return (
    <div className="rounded-[20px] bg-[#F5F5F6] px-8 py-10 text-center flex flex-col items-center gap-3">
      <Image src={imageSrc} alt={imageAlt} width={110} height={110} />
      <p className="font-[var(--font-metropolis)] text-[1.5rem] font-semibold text-[#3F3F46]">
        {title}
      </p>
      <p className="font-jakarta text-[1.05rem] text-[#73737B] max-w-[35ch] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function ScheduleSneakPeek({
  className,
}: ScheduleSneakPeekProps) {
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const displayNowMs = nowMs;
  const displayNow = useMemo(() => new Date(displayNowMs), [displayNowMs]);

  const liveEvents = useMemo(
    () =>
      displayableEvents
        .filter((event) => isScheduleEventLive(event, displayNow))
        .sort(
          (a, b) =>
            getScheduleEventEndTime(a).getTime() -
            getScheduleEventEndTime(b).getTime()
        )
        .slice(0, 3),
    [displayNow]
  );

  const upcomingEvents = useMemo(
    () =>
      displayableEvents
        .filter((event) => new Date(event.start_time).getTime() > displayNowMs)
        .slice(0, 3),
    [displayNowMs]
  );

  const liveLabel =
    liveEvents.length > 0
      ? `UNTIL ${formatCountdown(
          Math.min(
            ...liveEvents.map((event) =>
              getScheduleEventEndTime(event).getTime()
            )
          ) - displayNowMs
        )}`
      : 'NO LIVE EVENTS';
  const upcomingLabel =
    upcomingEvents.length > 0
      ? `IN ${formatCountdown(
          new Date(upcomingEvents[0].start_time).getTime() - displayNowMs
        )}`
      : 'NO UPCOMING EVENTS';

  return (
    <section
      id="schedule-sneak-peek"
      className={`w-full bg-[#FAFAFA] py-14 md:py-16 ${className ?? ''}`}
    >
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-[4rem] md:grid-cols-2">
          <div className="flex w-full pl-4 pr-4 md:pl-[103px] md:pr-0">
            <article className="w-full">
              <p className="font-jakarta text-[#9B9BA1] uppercase tracking-[0.08em] text-[18px]">
                {liveLabel}
              </p>
              <h2 className="mt-4 font-[var(--font-metropolis)] text-[#3F3F46] font-semibold text-[30px] leading-tight tracking-[-0.02em]">
                Happening now
              </h2>
              <div className="mt-4 mb-7 h-px w-full bg-[#DDDDDF]" />
              <div className="space-y-4">
                {liveEvents.length > 0 ? (
                  liveEvents.map((event) => (
                    <CalendarItem key={event._id} event={event} />
                  ))
                ) : (
                  <EmptyState
                    title="Nothing live right now"
                    description="Live events will appear here as soon as the next activity begins."
                    imageSrc={duckBunny}
                    imageAlt="Duck and bunny mascot"
                  />
                )}
              </div>
            </article>
          </div>

          <div className="flex w-full pl-4 pr-4 md:pr-[103px] md:pl-0">
            <article className="w-full">
              <p className="font-jakarta text-[#9B9BA1] uppercase tracking-[0.08em] text-[18px]">
                {upcomingLabel}
              </p>
              <h2 className="mt-4 font-[var(--font-metropolis)] text-[#3F3F46] font-semibold text-[30px] leading-tight tracking-[-0.02em]">
                Upcoming Events
              </h2>
              <div className="mt-4 mb-7 h-px w-full bg-[#DDDDDF]" />
              <div className="space-y-4">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => (
                    <CalendarItem
                      key={`${event._id}-upcoming`}
                      event={event}
                      attendeeCount={estimateAttendeeCount(event)}
                    />
                  ))
                ) : (
                  <EmptyState
                    title="No upcoming events"
                    description="Check back soon for workshops, activities, and meals as they are scheduled."
                    imageSrc={duckFrog}
                    imageAlt="Mascot illustration"
                  />
                )}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
