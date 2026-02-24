export interface HistoryMilestone {
  title: string;
  date: string;
  description: string;
  /** Tailwind width class for the desktop timeline item, e.g. "md:w-[25vw]" */
  desktopWidth: string;
}

/**
 * History timeline data used by the History component on the About page.
 * Update this file to add, remove, or edit timeline milestones.
 */
export const historyMilestones: HistoryMilestone[] = [
  {
    title: "Foundation Date",
    date: "1834",
    description:
      "A group of Williams students led by sophomores Stephen Field, Lewis Lockwood and Francis Tappan, met for the first time on Tuesday, Nov. 4, 1834, at the Freshman Recitation Room of the West College Building to form what they would call the Social Fraternity.",
    desktopWidth: "md:w-[25vw]",
  },
  {
    title: "Anti-Secret Confederation",
    date: "1847",
    description:
      "In 1847, Delta Upsilon's founders at Williams College joined forces with like-minded non-secret fraternities from Union, Middlebury, and Amherst to form the Anti-Secret Confederation (ACS). United by the motto Ouden Adelon (\"Nothing Secret\"), they promoted justice and open, liberal education in contrast to the secrecy of other fraternities.",
    desktopWidth: "md:w-[40vw]",
  },
  {
    title: "Adoption of Name",
    date: "1864",
    description:
      "Over the next two decades, nine more chapters joined the ACS, though some disbanded by 1864. At that year's convention, the confederation nearly dissolved due to low attendance—until a last-minute delegate from Rutgers arrived, establishing quorum. This pivotal moment led to renewed discussions and the official adoption of the name Delta Upsilon, already used by several chapters.",
    desktopWidth: "md:w-[30vw]",
  },
  {
    title: "Growth",
    date: "1865 – 1898",
    description:
      "By 1865, just a year after adopting the name Delta Upsilon, the Fraternity had expanded to 15 chapters across the Northeast. In 1898, it became an international organization with the founding of its first Canadian chapter at McGill University in Montreal.",
    desktopWidth: "md:w-[25vw]",
  },
  {
    title: "Toronto Chapter Founded",
    date: "1899",
    description:
      "The Delta Upsilon Toronto Chapter was officially installed on Dec. 15, 1899. Located at the University of Toronto, it played a key role in expanding DU's presence beyond the United States and reinforcing its commitment to non-secret, merit-based brotherhood across borders.",
    desktopWidth: "md:w-[40vw]",
  },
  {
    title: "Incorporation",
    date: "1909",
    description:
      "Following rapid growth in the early 1900s, Delta Upsilon was officially incorporated in New York in 1909. This led to the creation of a Board of Directors and an Assembly of Graduate Trustees, with Charles Evans Hughes serving as the Fraternity's first president. That same year, DU also became a founding member of the North-American Interfraternity Conference (NIC).",
    desktopWidth: "md:w-[35vw]",
  },
  {
    title: "Turn of the Millennium",
    date: "2001 – 2007",
    description:
      "At the turn of the millennium, Delta Upsilon had established 148 chapters. Following the installation of its 150th chapter (Northwestern State Chapter) in 2001, the Fraternity focused solely on reopening closed chapters until 2007.",
    desktopWidth: "md:w-[25vw]",
  },
  {
    title: "Post-Recession",
    date: "2009 - 2012",
    description:
      "Delta Upsilon experienced significant growth after the 2008 recession, with many new and old Chapters being chartered. This expansion was driven by a renewed focus on recruitment and reestablishing the Fraternity's presence on campuses across North America.",
    desktopWidth: "md:w-[25vw]",
  },
  {
    title: "Covid-19 Pandemic",
    date: "2019 – 2022",
    description:
      "The global pandemic of Covid-19 significantly impacted Delta Upsilon's operations and activities. Delta Upsilon Toronto saw its membership drop significantly during this time.",
    desktopWidth: "md:w-[25vw]",
  },
  {
    title: "Growth Under Leadership",
    date: "2023 - 2025",
    description:
      "Under the leadership of an excellent executive team with Dev Sharma as President, Delta Upsilon Toronto experienced significant growth and became an iconic fixture of campus life. Our membership more than doubled during this period.",
    desktopWidth: "md:w-[25vw]",
  },
];
