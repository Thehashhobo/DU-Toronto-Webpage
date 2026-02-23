export interface BlogPost {
  id: string;
  title: string;
  date: string; // ISO date string "YYYY-MM-DD"
  excerpt: string;
  tag: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "winter-2026-initiation",
    title: "Winter 2026 Associate Member Class Initiated",
    date: "2026-02-15",
    excerpt:
      "We are proud to welcome the newest brothers into the Delta Upsilon Toronto Chapter. The Winter 2026 class demonstrated exceptional dedication, character, and brotherhood throughout their associate member period.",
    tag: "Brotherhood",
    image: "/images/carousel/c1.webp",
    imageAlt: "Associate Member Class Winter 2026",
    imageWidth: 2000,
    imageHeight: 3250,
  },
  {
    id: "philanthropy-drive-2026",
    title: "Annual Philanthropy Drive Raises $3,200 for SickKids",
    date: "2026-01-20",
    excerpt:
      "This year's philanthropy drive exceeded all expectations. Brothers, alumni, and community members came together for a week of fundraising events, raising over $3,200 for the Hospital for Sick Children.",
    tag: "Philanthropy",
  },
  {
    id: "chapter-house-restoration",
    title: "Historic Chapter House Restoration Project Underway",
    date: "2025-12-05",
    excerpt:
      "The chapter has begun a restoration project to preserve the original crown-moulding and wainscotting at 182 St. George Street, maintaining the heritage designation under the Ontario Heritage Act.",
    tag: "Chapter News",
    image: "/images/snow.webp",
    imageAlt: "Delta Upsilon house in winter",
    imageWidth: 3000,
    imageHeight: 2250,
  },
  {
    id: "intramural-hockey-champions",
    title: "DU Toronto Wins U of T Intramural Hockey Championship",
    date: "2025-11-18",
    excerpt:
      "After a thrilling finals game, the Delta Upsilon hockey team claimed the U of T intramural championship title for the second consecutive year. The team's hard work and camaraderie paid off in a memorable victory.",
    tag: "Athletics",
  },
  {
    id: "alumni-weekend-2025",
    title: "Alumni Weekend 2025 — A Night to Remember",
    date: "2025-10-30",
    excerpt:
      "Over 60 alumni returned to 182 St. George for Alumni Weekend 2025. The event featured a house tour, a panel discussion with notable brothers, and a formal dinner celebrating decades of brotherhood.",
    tag: "Alumni",
    image: "/images/ap2.webp",
    imageAlt: "DU Toronto alumni collage",
    imageWidth: 898,
    imageHeight: 1056,
  },
];
