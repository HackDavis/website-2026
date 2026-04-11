import { EventType } from '@data/event';

export interface ScheduleEventStyle {
  bgColor: string;
  textColor: string;
  mutedTextColor: string;
  chipBorderColor?: string;
}

export const SCHEDULE_EVENT_STYLES: Record<EventType, ScheduleEventStyle> = {
  GENERAL: {
    bgColor: '#CCFFFE',
    textColor: '#003D3D',
    mutedTextColor: '#5F686A',
  },
  ACTIVITIES: {
    bgColor: '#FFE2D5',
    textColor: '#52230C',
    mutedTextColor: '#65656E',
    chipBorderColor: 'rgba(63, 63, 70, 0.35)',
  },
  WORKSHOPS: {
    bgColor: '#E9FBBA',
    textColor: '#1A3819',
    mutedTextColor: '#606060',
    chipBorderColor: 'rgba(32, 32, 32, 0.35)',
  },
  MEALS: {
    bgColor: '#FFE7B2',
    textColor: '#572700',
    mutedTextColor: '#5F6C6E',
    chipBorderColor: 'rgba(46, 61, 63, 0.35)',
  },
  RECOMMENDED: {
    bgColor: '#C0AAE2',
    textColor: '#003D3D',
    mutedTextColor: '#596A6C',
    chipBorderColor: 'rgba(43, 58, 59, 0.35)',
  },
};
