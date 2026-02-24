export interface AlumniMember {
  name: string;
  description: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  link?: string;
}

/**
 * Prominent alumni data used by the About page.
 * Update this file to add, remove, or edit alumni cards.
 */
export const prominentAlumni: AlumniMember[] = [
  {
    name: "Lester B. Pearson",
    description: "14th Prime Minister of Canada",
    image: "/images/A1.webp",
    imageWidth: 810,
    imageHeight: 1080,
  },
  {
    name: "James A. Garfield",
    description: "President of United States",
    image: "/images/private/A2.webp",
    imageWidth: 1024,
    imageHeight: 1298,
  },
  {
    name: "John P. Robarts",
    description: "17th Premier of Ontario",
    image: "/images/A3.webp",
    imageWidth: 550,
    imageHeight: 804,
  },
  {
    name: "John Arthur Clark",
    description: "Commander of the 72nd Seaforth Highlanders at the Battle of Vimy Ridge",
    image: "/images/private/A4.webp",
    imageWidth: 620,
    imageHeight: 842,
  },
  {
    name: "Richard M. Ivey",
    description: "Philanthropist and Education Advocate, namesake of the Ivey Business School",
    image: "/images/private/A5.webp",
    imageWidth: 620,
    imageHeight: 842,
  },
  {
    name: "Gabriel Macht",
    description: "American actor, plays Harvey Specter in Suits",
    image: "/images/private/A6.webp",
    imageWidth: 620,
    imageHeight: 842,
  },
];
