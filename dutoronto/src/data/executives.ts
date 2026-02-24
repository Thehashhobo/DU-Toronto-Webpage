export interface Executive {
  position: string;
  name: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  description?: string;
  phone?: string;
  email?: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
}

/**
 * Central source of truth for all executive member data.
 * Used by: home page (MemberGrid), contact page (recruitment & alumni contacts).
 * Update this file to change exec info site-wide.
 */
export const executives: Executive[] = [
  {
    position: "President",
    name: "Michael Atrach",
    image: "/exec/michael.webp",
    instagram: "https://www.instagram.com/michaelatrach13/",
  },
  {
    position: "Vice President",
    name: "Mikhail Skazhenyuk",
    image: "/exec/micah.webp",
    description: "Hello, I'm Mikhail, but people know me as Micah. I'm a Ukrainian from Nova Scotia, currently on my PEY year specializing in Computer Science with a Focus in AI, as well as majoring in Cognitive Science, at the University of Toronto. Over the past few years I've grown a lot within Delta Upsilon. Previously serving as Minister of Risk Management, Administration, and Brotherhood Excellence before stepping into my current role as Vice President. Outside the chapter, I work as an AI Software Developer and Research Trainee, building systems that ship and make an impact. I bring the same mindset to everything I do in DU: get the details rights, hold the standard, and make sure brotherhood is something worth being proud of.",
    linkedin: "https://www.linkedin.com/in/mikhail-skazhenyuk-1b44bb271/",
    instagram: "https://www.instagram.com/mikhskaz/",
  },
  {
    position: "Minister of Recruitment",
    name: "Adam Ratanshi",
    image: "/exec/adam.webp",
    imageWidth: 1024,
    imageHeight: 1536,
    linkedin: "https://www.linkedin.com/in/adam-ratanshi-139482270/",
    instagram: "https://www.instagram.com/adamaliratanshi/",
    phone: "+1 (437) 855-2773",
    email: "adamaliratanshi@gmail.com",
  },
  {
    position: "Minister of Finance",
    name: "Alexander Mansourov",
    image: "/exec/alex.webp",
    description:
      "Hi, I'm Alex! I'm from Vaughan and am currently studying Economics. I've served as VP of Administration and now proudly serve as VP of Finance for a second term at DU. What I love most about DU is that there's always something fun happening—there's never a dull moment. Outside of academics and fraternity commitments, you can find me at home or at the gym.",
    linkedin: "https://www.linkedin.com/in/alexander-mansourov-170283248/",
  },
  {
    position: "Minister of Risk Management",
    name: "Avery Lomonaco",
    image: "/exec/avery.webp",
    instagram: "https://www.instagram.com/avery.lomonaco/",
  },
  {
    position: "Minister of Administration",
    name: "David van Geilswyk",
    image: "/exec/david.webp",
    description:
      "Hi, I'm David. I was born and raised in Scarborough (Toronto) and I currently study Aerospace Engineering. Being a part of DU was one of the best decisions of my life and I am happy to support my brothers as VP of Administration. The best part of being here is the people you meet along the way. Outside of academics I focus on work and the gym when I'm not watching movies to pass time.",
    instagram: "https://www.instagram.com/dvang_4/",
  },
  {
    position: "Minister of External Relations",
    name: "Ian Murray",
    image: "/exec/ian.webp",
    imageWidth: 2832,
    imageHeight: 4340,
    description:
      "Hello! My name is Adrian, I grew up in Vaughan Ontario, and I study Molecular Biology at the University of Toronto. I am the former Delta Upsilon Social Chair, and current Minister of External Relations. My favourite DU memory would have to be the first rush event I attended where I met everyone who would end up being some of my closest friends in the future. Fun fact: I like to think I'm the best in the house at smash bros!",
    instagram: "https://www.instagram.com/ian.y.murray/",
    phone: "+1 (240) 676-8460",
    email: "murrayian647@gmail.com",
  },
];
