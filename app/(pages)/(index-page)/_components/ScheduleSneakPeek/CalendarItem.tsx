import Image from 'next/image';
import Event, { EventTag, EventType } from '@data/event';
import { SCHEDULE_EVENT_STYLES } from './scheduleEventStyles';
import { formatScheduleTimeRange } from './scheduleTime';

import locationIcon from '@public/schedule/location.svg';
import attendeeIcon from '@public/schedule/attendee.svg';

interface CalendarItemProps {
  event: Event;
  attendeeCount?: number;
}

const isEventType = (value: string): value is EventType => {
  return value in SCHEDULE_EVENT_STYLES;
};

const normalizeTag = (tag: EventTag) => tag.toUpperCase().replace('_', ' ');

const toHostLines = (host?: string) =>
  host
    ? host
        .split(/,|\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .slice(0, 3)
    : [];

export function CalendarItem({ event, attendeeCount }: CalendarItemProps) {
  const { name, type, location, start_time, end_time, tags, host } = event;
  const rawType = type ?? '';
  const normalizedType = rawType.toUpperCase();
  const displayType: EventType = isEventType(normalizedType)
    ? normalizedType
    : 'GENERAL';
  const eventStyle = SCHEDULE_EVENT_STYLES[displayType];
  const hostLines = toHostLines(host);
  const showAttendees = displayType === 'WORKSHOPS' && (attendeeCount ?? 0) > 0;
  const hasMeta =
    hostLines.length > 0 || (tags?.length ?? 0) > 0 || showAttendees;

  const timeDisplay = formatScheduleTimeRange(
    new Date(start_time),
    end_time ? new Date(end_time) : undefined
  );

  return (
    <div
      className="w-full rounded-[20px] px-6 py-6 md:px-7 md:py-7"
      style={{
        backgroundColor: eventStyle.bgColor,
        color: eventStyle.textColor,
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row md:items-start md:justify-between gap-5">
          <div>
            <h3 className="font-[var(--font-metropolis)] text-[28px] font-semibold leading-tight tracking-[-0.02em]">
              {name}
            </h3>
            <div
              className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 font-jakarta text-[18px]"
              style={{ color: eventStyle.mutedTextColor }}
            >
              <span>{timeDisplay}</span>
              {location && (
                <span className="inline-flex items-center gap-2">
                  <Image src={locationIcon} alt="" width={13} height={13} />
                  {location}
                </span>
              )}
            </div>
          </div>
          {hostLines.length > 0 && (
            <div
              className="font-jakarta text-[18px] leading-tight uppercase md:text-right"
              style={{ color: eventStyle.mutedTextColor }}
            >
              {hostLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}
        </div>

        {hasMeta && (
          <div className="flex flex-col gap-4">
            {(tags?.length ?? 0) > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border px-3 py-1 font-jakarta text-[16px] uppercase"
                    style={{
                      borderColor: eventStyle.chipBorderColor,
                      color: eventStyle.mutedTextColor,
                    }}
                  >
                    {normalizeTag(tag)}
                  </span>
                ))}
              </div>
            )}

            {showAttendees && (
              <div
                className="inline-flex items-center gap-3 font-jakarta text-[16px]"
                style={{
                  color: eventStyle.mutedTextColor,
                }}
              >
                <Image src={attendeeIcon} alt="" width={66} height={45} />
                <span>
                  {attendeeCount} Hacker{attendeeCount === 1 ? ' is' : 's are'}{' '}
                  attending this event
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CalendarItem;
