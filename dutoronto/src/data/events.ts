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
    id: "initiation-winter-2026",
    title: "Winter Initiation",
    date: "2026-03-28",
    time: "6:00 PM",
    location: "182 St. George Street, Toronto",
    description: "Join our Chapter as we welcome the Winter 2026 Associate Member class into our brotherhood. The initiation ceremony will be followed by a celebratory dinner.",
  }
];
