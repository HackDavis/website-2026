type EventType =
  | 'GENERAL'
  | 'ACTIVITIES'
  | 'WORKSHOPS'
  | 'MEALS'
  | 'RECOMMENDED';
type EventTag = 'developer' | 'designer' | 'pm' | 'other' | 'beginner';

interface Event {
  _id?: string;
  name: string;
  host?: string;
  type: EventType;
  location?: string;
  start_time: Date;
  end_time?: Date;
  tags?: EventTag[];
}

export default Event;
export type { EventType, EventTag };
