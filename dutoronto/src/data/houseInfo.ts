export interface HouseInfoItem {
  title: string;
  content: string;
}

/**
 * House information accordion data used by HouseInfo component on the House page.
 * Update this file to change the house description, location info, or community blurb.
 */
export const houseInfoItems: HouseInfoItem[] = [
  {
    title: "The House",
    content:
      "Secluded in the Annex just north of the university campus, lies 182 St. George, home of the Toronto Chapter of Delta Upsilon. Built in the Worker Cottage style, the house stands out from the Richardsonian-Victorian style that pervades the Annex with its symmetrical stone façade and Greek pillars. The house was completed in 1911, just as construction on the nearby Casa Loma was underway, at a time when the Annex housed Toronto's antique Anglophone aristocracy.",
  },
  {
    title: "Location",
    content:
      "Located in the heart of the Annex, the fraternity house is just steps away from the University of Toronto campus, offering unparalleled convenience for students. The neighborhood is known for its vibrant culture, diverse dining options, and proximity to public transportation, making it an ideal setting for university life.",
  },
  {
    title: "Join the Delta Upsilon Community",
    content:
      "Delta Upsilon at the University of Toronto is committed to building better men through its core principles of friendship, character development, cultural diffusion, and the advancement of justice. Living at 182 St. George Street provides members with the opportunity to immerse themselves in a supportive community that values personal growth and collective success.",
  },
];
