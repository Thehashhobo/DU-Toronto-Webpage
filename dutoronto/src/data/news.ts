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
  /** Height (px) of the displayed image container. Defaults to 208 (h-52). */
  imageDisplayHeight?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "philanthropy-drive-2026",
    title: "Egg a DUck Philanthropy W26",
    date: "2026-02-03",
    excerpt:
      "This semester's philanthropy 'Egg a DUck' exceeded all expectations. Brothers, alumni, and greek life community members came together for a day of fundraising, raising hundreds of dollars for the Global Service Initiative.",
    tag: "Philanthropy",
    image: "/images/news/eggaduck.webp",
    imageWidth: 4032,
    imageHeight: 3024,
    imageDisplayHeight: 400,
  },
  {
    id: "winter-2026-pinning",
    title: "Winter 2026 Associate Member Class Pinned",
    date: "2026-01-31",
    excerpt:
      "We are proud to welcome the newest Associate Members into the Delta Upsilon Toronto Chapter. We're excited to see them grow and contribute to our brotherhood.",
    tag: "Brotherhood",
    image: "/images/carousel/c1.webp",
    imageAlt: "Associate Member Class Winter 2026",
    imageWidth: 2000,
    imageHeight: 3250,
    imageDisplayHeight: 400,
  },
  {
    id: "2026-exec",
    title: "Introducing the 2026 Executive Team",
    date: "2026-01-05",
    excerpt:
      "We are excited to announce the 2026 executive team for the Delta Upsilon Toronto Chapter. These dedicated Brothers will lead our Chapter to new heights in the coming year.",
    tag: "Brotherhood",
    image: "/images/news/exec26.webp",
    imageAlt: "2026 Executive Team",
    imageWidth: 2000,
    imageDisplayHeight: 400,
  },
  {
    id: "fall-2025-formal",
    title: "What Colour is the CN Tower?",
    date: "2025-12-03",
    excerpt:
      "The Delta Upsilon Toronto Chapter hosted its Fall formal at Toronto's landmark, the CN Tower. The event was a great success, with over 100 Brothers and guests attending.",
    tag: "Brotherhood",
    image: "/images/news/cntower.webp",
    imageAlt: "CN Tower Formal 2025",
    imageWidth: 2000,
    imageHeight: 3250,
    imageDisplayHeight: 400,
  },
  {
    id: "alumni-bbq-2023",
    title: "Alumni BBQ 2023",
    date: "2023-8-19",
    excerpt:
      "Alumni returned to 182 St. George for Alumni BBQ Weekend. The event featured a house tour, our new dog, and yummy food cooked up by our Brothers.",
    tag: "Alumni",
    image: "/images/news/bbq.webp",
    imageAlt: "DU Toronto alumni collage",
    imageWidth: 898,
    imageHeight: 1056,
    imageDisplayHeight: 400,
  },
];
