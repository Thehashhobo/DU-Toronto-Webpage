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
    id: "rush-winter-2026",
    title: "Winter Rush Week",
    date: "2026-03-01",
    time: "6:00 PM",
    location: "182 St. George Street, Toronto",
    description: "Meet the brothers, tour the house, and learn what DU has to offer.",
  },
  {
    id: "philanthropy-gala-2026",
    title: "Annual Philanthropy Gala",
    date: "2026-03-14",
    time: "7:00 PM",
    location: "Hart House, University of Toronto",
    description: "Our annual fundraising gala supporting SickKids Hospital.",
  },
  {
    id: "alumni-mixer-spring-2026",
    title: "Alumni Spring Mixer",
    date: "2026-04-05",
    time: "5:00 PM",
    location: "182 St. George Street, Toronto",
    description: "Reconnect with brothers old and new at our spring alumni mixer.",
  },
  {
    id: "intramural-finals-2026",
    title: "Intramural Hockey Finals",
    date: "2026-04-12",
    time: "2:00 PM",
    location: "Varsity Arena, University of Toronto",
  },
];
