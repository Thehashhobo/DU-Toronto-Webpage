export interface Principle {
  /** Path to the SVG icon in /public/svgs/ */
  icon: string;
  /** e.g. "Promotion of" */
  prefix: string;
  /** e.g. "Friendship" */
  title: string;
}

/**
 * Delta Upsilon's four founding principles.
 * Used by the WhyDu component on the home page.
 * Update this file to change principle text or icons.
 */
export const principles: Principle[] = [
  {
    icon: "/svgs/W1.svg",
    prefix: "Promotion of",
    title: "Friendship",
  },
  {
    icon: "/svgs/W2.svg",
    prefix: "Development of",
    title: "Character",
  },
  {
    icon: "/svgs/W3.svg",
    prefix: "Diffusion of",
    title: "Liberal Culture",
  },
  {
    icon: "/svgs/W4.svg",
    prefix: "Advancement of",
    title: "Justice",
  },
];
