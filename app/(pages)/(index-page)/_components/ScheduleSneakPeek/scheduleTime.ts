import Event from '@data/event';

export const formatScheduleTime = (date: Date): string =>
  date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

export const formatScheduleTimeRange = (start: Date, end?: Date): string => {
  if (!end || start.getTime() === end.getTime()) {
    return formatScheduleTime(start);
  }

  const startTimeStr = formatScheduleTime(start);
  const endTimeStr = formatScheduleTime(end);

  const startAMPM = startTimeStr.slice(-2);
  const endAMPM = endTimeStr.slice(-2);

  if (startAMPM === endAMPM) {
    const startWithoutDayPeriod = startTimeStr
      .replace(/\s?(AM|PM)$/i, '')
      .trimEnd();
    return `${startWithoutDayPeriod} - ${endTimeStr}`;
  }

  return `${startTimeStr} - ${endTimeStr}`;
};

export const getScheduleEventEndTime = (event: Event): Date => {
  if (event.end_time) return new Date(event.end_time);
  const fallback = new Date(event.start_time);
  fallback.setMinutes(fallback.getMinutes() + 60);
  return fallback;
};

export const isScheduleEventLive = (
  event: Event,
  now: Date = new Date()
): boolean => {
  const start = new Date(event.start_time);
  const end = getScheduleEventEndTime(event);
  return start <= now && now < end;
};

export const formatCountdown = (milliseconds: number): string => {
  const clamped = Math.max(0, milliseconds);
  const hours = Math.floor(clamped / 3600000);
  const minutes = Math.floor((clamped % 3600000) / 60000);
  const seconds = Math.floor((clamped % 60000) / 1000);
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
