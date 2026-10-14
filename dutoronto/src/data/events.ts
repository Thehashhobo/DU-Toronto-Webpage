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
    id: "2",
    title: "Initiation Ceremony",
    date: "2026-11-28",
    time: "7:00 PM",
    location: "182 St. George Street, Toronto",
    description: "Welcome our new Brothers of the Fall 2026 Associate Member Class.",
  }
];
