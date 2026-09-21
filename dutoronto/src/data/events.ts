export interface ChapterEvent {
  id: string;
  title: string;
  date: string; // ISO date string "YYYY-MM-DD"
  time?: string;
  location: string;
  description?: string;
}

export const upcomingEvents: ChapterEvent[] = [
  {
    id: "1",
    title: "Pinning Ceremony",
    date: "2026-10-02",
    time: "7:00 PM",
    location: "182 St. George Street, Toronto",
    description: "Join our Chapter as we present our Fall 2026 Associate Member Class.",
  },
  {
    id: "2",
    title: "Initiation Ceremony",
    date: "2026-11-27",
    time: "7:00 PM",
    location: "182 St. George Street, Toronto",
    description: "Welcome our new Brothers of the Fall 2026 Associate Member Class.",
  }
];
