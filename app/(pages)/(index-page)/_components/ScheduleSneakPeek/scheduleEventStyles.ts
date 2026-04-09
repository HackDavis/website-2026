import { EventType } from '@data/event';

export interface ScheduleEventStyle {
  bgColor: string;
  textColor: string;
  mutedTextColor: string;
  chipBorderColor?: string;
}

export const SCHEDULE_EVENT_STYLES: Record<EventType, ScheduleEventStyle> = {
  GENERAL: {
    bgColor: '#D9F2F4',
    textColor: '#2B3A3B',
    mutedTextColor: '#5F686A',
  },
  ACTIVITIES: {
    bgColor: '#FFE2D5',
    textColor: '#3F3F46',
    mutedTextColor: '#65656E',
    chipBorderColor: 'rgba(63, 63, 70, 0.35)',
  },
  WORKSHOPS: {
    bgColor: '#D7E8AB',
    textColor: '#202020',
    mutedTextColor: '#606060',
    chipBorderColor: 'rgba(32, 32, 32, 0.35)',
  },
  MEALS: {
    bgColor: '#CFF3F2',
    textColor: '#2E3D3F',
    mutedTextColor: '#5F6C6E',
    chipBorderColor: 'rgba(46, 61, 63, 0.35)',
  },
  RECOMMENDED: {
    bgColor: '#D6C8E8',
    textColor: '#2B3A3B',
    mutedTextColor: '#596A6C',
    chipBorderColor: 'rgba(43, 58, 59, 0.35)',
  },
};
